import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { CalcMatrix2D } from "impulse-math-device-ts";
import { Layers } from "../../types";
import { RecurrentLayer } from "../Recurrent";

export class BackpropagationToRecurrent extends AbstractBackPropagation {
  propagate(
    input: CalcMatrix2D,
    numberOfExamples: number,
    regularization: number,
    layer: Layers,
    sigma: CalcMatrix2D
  ): CalcMatrix2D {
    const rnnLayer = layer as RecurrentLayer;
    const { A, X } = rnnLayer.cache;
    const sequenceLength = X.length;

    // Inicjalizacja gradientu dla stanu ukrytego
    let daNext = new CalcMatrix2D(rnnLayer.getWidth(), 1).setZeros();

    // Pętla wsteczna po krokach czasowych (Backpropagation Through Time)
    for (let t = sequenceLength - 1; t >= 0; t--) {
      const dyt = sigma.col(t); // Gradient kosztu względem wyjścia w kroku t

      // 1. Oblicz gradienty dla wag wyjściowych (Wya, by)
      rnnLayer.dWya = rnnLayer.dWya.add(dyt.dot(A[t + 1].transpose()));
      rnnLayer.dby = rnnLayer.dby.add(dyt);

      // 2. Oblicz gradient propagowany do stanu ukrytego
      // da = dC/da<t> = (dC/dy<t> * dy<t>/da<t>) + da_next
      const da = rnnLayer.Wya.transpose().dot(dyt).add(daNext);

      // 3. Oblicz gradient dla funkcji aktywacji tanh
      // dtanh = da<t> * (1 - a<t>^2)
      const dtanh = da.multiply(rnnLayer.derivative(A[t + 1]));

      // 4. Oblicz gradienty dla wag rekurencyjnych i wejściowych (Waa, Wax, ba)
      rnnLayer.dWax = rnnLayer.dWax.add(dtanh.dot(X[t].transpose()));
      rnnLayer.dWaa = rnnLayer.dWaa.add(dtanh.dot(A[t].transpose()));
      rnnLayer.dba = rnnLayer.dba.add(dtanh);

      // 5. Zaktualizuj gradient dla poprzedniego kroku czasowego
      // da_next (dla kroku t-1) = Waa^T * dtanh
      daNext = rnnLayer.Waa.transpose().dot(dtanh);
    }

    // Normalizacja gradientów i dodanie regularyzacji
    const clipValue = 5; // Zapobieganie eksplodującym gradientom
    for (const d of [rnnLayer.dWax, rnnLayer.dWaa, rnnLayer.dWya, rnnLayer.dba, rnnLayer.dby]) {
        d.clip(-clipValue, clipValue);
    }
    
    // Zastosowanie normalizacji przez liczbę przykładów (w tym przypadku 1, bo batching nie jest zaimplementowany)
    // rnnLayer.dWax = rnnLayer.dWax.divide(numberOfExamples);
    // ... etc. dla reszty

    // Dodanie regularyzacji
    rnnLayer.dWax = rnnLayer.dWax.add(rnnLayer.Wax.multiply(regularization));
    rnnLayer.dWaa = rnnLayer.dWaa.add(rnnLayer.Waa.multiply(regularization));
    rnnLayer.dWya = rnnLayer.dWya.add(rnnLayer.Wya.multiply(regularization));

    // Warstwa rekurencyjna zazwyczaj nie propaguje błędu dalej w ten sposób.
    // Zwracamy pustą macierz, aby zatrzymać propagację.
    return new CalcMatrix2D();
  }
}
