import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { CalcMatrix2D } from "impulse-math-device-ts";
import { Layers } from "../../types";
import { LSTMLayer } from "../LSTM";

export class BackpropagationToLSTM extends AbstractBackPropagation {
  propagate(
    input: CalcMatrix2D,
    numberOfExamples: number,
    regularization: number,
    layer: Layers,
    sigma: CalcMatrix2D
  ): CalcMatrix2D {
    const lstmLayer = layer as LSTMLayer;
    const { A, C, X, F, I, G, O } = lstmLayer.cache;
    const sequenceLength = X.length;
    const hiddenSize = lstmLayer.getWidth();

    // Inicjalizacja gradientów propagowanych w czasie
    let daNext = new CalcMatrix2D(hiddenSize, 1).setZeros();
    let dcNext = new CalcMatrix2D(hiddenSize, 1).setZeros();

    // Pętla wsteczna po krokach czasowych (BPTT)
    for (let t = sequenceLength - 1; t >= 0; t--) {
      // Gradient dla stanu ukrytego a<t> = błąd z wyjścia + błąd z przyszłości
      const da = sigma.col(t).add(daNext);

      // --- Obliczanie gradientów dla każdej bramki ---

      // Bramka wyjściowa (Output Gate)
      const dot = da.multiply(C[t + 1].tanh());
      const dZo = dot.multiply(O[t]).multiply(O[t].minusOne().multiply(-1)); // d(sigmoid)

      // Stan komórki (Cell State)
      const dc = da.multiply(O[t]).multiply(lstmLayer.derivative(C[t + 1])).add(dcNext);

      // Bramka zapominania (Forget Gate)
      const dft = dc.multiply(C[t]);
      const dZf = dft.multiply(F[t]).multiply(F[t].minusOne().multiply(-1)); // d(sigmoid)

      // Bramka wejściowa (Input Gate)
      const dit = dc.multiply(G[t]);
      const dZi = dit.multiply(I[t]).multiply(I[t].minusOne().multiply(-1)); // d(sigmoid)

      // Bramka kandydująca (Candidate Gate)
      const dgt = dc.multiply(I[t]);
      const dZg = dgt.multiply(lstmLayer.derivative(G[t])); // d(tanh)

      // --- Połączenie gradientów bramek i obliczenie gradientów wag ---

      // Połącz gradienty bramek w jedną macierz [dZf, dZi, dZg, dZo]
      const dZ = CalcMatrix2D.vstack([dZf, dZi, dZg, dZo]);

      // Oblicz gradienty dla wag i biasów
      lstmLayer.dW = lstmLayer.dW.add(dZ.dot(X[t].transpose()));
      lstmLayer.dU = lstmLayer.dU.add(dZ.dot(A[t].transpose()));
      lstmLayer.db = lstmLayer.db.add(dZ);

      // --- Propagacja gradientów do poprzedniego kroku czasowego ---

      // da_next (dla t-1) = U^T * dZ
      daNext = lstmLayer.U.transpose().dot(dZ);
      // dc_next (dla t-1) = dc * f<t>
      dcNext = dc.multiply(F[t]);
    }

    // --- Finalizacja gradientów ---

    // 1. Obcinanie gradientów (Gradient Clipping) - kluczowe dla stabilności LSTM
    const clipValue = 5;
    for (const d of [lstmLayer.dW, lstmLayer.dU, lstmLayer.db]) {
      d.clip(-clipValue, clipValue);
    }

    // 2. Dodanie regularyzacji do wag
    lstmLayer.dW = lstmLayer.dW.add(lstmLayer.W.multiply(regularization));
    lstmLayer.dU = lstmLayer.dU.add(lstmLayer.U.multiply(regularization));

    // Warstwa LSTM nie propaguje błędu dalej w standardowy sposób.
    return new CalcMatrix2D();
  }
}
