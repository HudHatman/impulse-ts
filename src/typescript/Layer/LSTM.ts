import { CalcMatrix2D } from "impulse-math-device-ts";
import { Dimension, LayerType, Layers } from "../types";
import { AbstractLayer } from "./AbstractLayer";

/**
 * Warstwa Long Short-Term Memory (LSTM).
 * Jest to zaawansowany typ warstwy rekurencyjnej, który potrafi uczyć się
 * długoterminowych zależności dzięki mechanizmowi bramek.
 *
 * Wymiary:
 * - `height` (inputSize): Rozmiar wektora wejściowego w jednym kroku czasowym.
 * - `width` (hiddenSize): Rozmiar wektora stanu ukrytego i stanu komórki.
 */
export class LSTMLayer extends AbstractLayer {
  // --- Wagi i Biary (zoptymalizowana, połączona struktura) ---
  public W: CalcMatrix2D; // Połączone wagi dla wejść [Wf, Wi, Wg, Wo]
  public U: CalcMatrix2D; // Połączone wagi dla stanu rekurencyjnego [Uf, Ui, Ug, Uo]
  public b: CalcMatrix2D; // Połączone biasy [bf, bi, bg, bo]

  // --- Gradienty ---
  public dW: CalcMatrix2D;
  public dU: CalcMatrix2D;
  public db: CalcMatrix2D;

  // --- Pamięć podręczna dla BPTT ---
  public cache: {
    A: CalcMatrix2D[]; // Stany ukryte a<t>
    C: CalcMatrix2D[]; // Stany komórki c<t>
    X: CalcMatrix2D[]; // Wejścia x<t>
    F: CalcMatrix2D[]; // Bramki zapominania f<t>
    I: CalcMatrix2D[]; // Bramki wejściowe i<t>
    G: CalcMatrix2D[]; // Bramki kandydujące g<t>
    O: CalcMatrix2D[]; // Bramki wyjściowe o<t>
  } = { A: [], C: [], X: [], F: [], I: [], G: [], O: [] };

  public penalty(): number {
    const wPenalty = this.W.pow(2).sum().get()[0];
    const uPenalty = this.U.pow(2).sum().get()[0];
    return wPenalty + uPenalty;
  }

  configure(): void {
    const inputSize = this.getHeight();
    const hiddenSize = this.getWidth();

    // Inicjalizacja połączonych macierzy wag (metoda Xavier)
    // Każda macierz ma wysokość 4 * hiddenSize, ponieważ zawiera wagi dla 4 bramek.
    this.W = new CalcMatrix2D(hiddenSize * 4, inputSize).setRandom(inputSize);
    this.U = new CalcMatrix2D(hiddenSize * 4, hiddenSize).setRandom(hiddenSize);

    // Inicjalizacja połączonego wektora biasów
    this.b = new CalcMatrix2D(hiddenSize * 4, 1).setZeros();

    // Inicjalizacja gradientów
    this.dW = new CalcMatrix2D(hiddenSize * 4, inputSize).setZeros();
    this.dU = new CalcMatrix2D(hiddenSize * 4, hiddenSize).setZeros();
    this.db = new CalcMatrix2D(hiddenSize * 4, 1).setZeros();
  }

  /**
   * Przetwarza całą sekwencję wejściową.
   * @param input Macierz o wymiarach (input_size, sequence_length)
   */
  forward(input: CalcMatrix2D): CalcMatrix2D {
    const sequenceLength = input.cols();
    const hiddenSize = this.getWidth();

    // Inicjalizacja pamięci podręcznej i stanów początkowych
    this.cache = { A: [], C: [], X: [], F: [], I: [], G: [], O: [] };
    let aPrev = new CalcMatrix2D(hiddenSize, 1).setZeros();
    let cPrev = new CalcMatrix2D(hiddenSize, 1).setZeros();
    this.cache.A.push(aPrev.clone());
    this.cache.C.push(cPrev.clone());

    const outputs: CalcMatrix2D[] = [];

    // Pętla po krokach czasowych
    for (let t = 0; t < sequenceLength; t++) {
      const xt = input.col(t);
      this.cache.X.push(xt.clone());

      // 1. Oblicz aktywacje dla wszystkich bramek naraz (zoptymalizowane)
      // Z = [Zf, Zi, Zg, Zo]^T
      const Z = this.W.dot(xt).add(this.U.dot(aPrev)).add(this.b);

      // 2. Podziel Z na poszczególne bramki i zastosuj funkcje aktywacji
      const Zf = Z.slice(0, hiddenSize);
      const Zi = Z.slice(hiddenSize, hiddenSize * 2);
      const Zg = Z.slice(hiddenSize * 2, hiddenSize * 3);
      const Zo = Z.slice(hiddenSize * 3, hiddenSize * 4);

      const ft = Zf.sigmoid(); // Bramka zapominania
      const it = Zi.sigmoid(); // Bramka wejściowa
      const gt = Zg.tanh();   // Bramka kandydująca
      const ot = Zo.sigmoid(); // Bramka wyjściowa

      // 3. Oblicz nowy stan komórki i nowy stan ukryty
      // c<t> = f<t> * c<t-1> + i<t> * g<t>
      const cNext = ft.multiply(cPrev).add(it.multiply(gt));
      // a<t> = o<t> * tanh(c<t>)
      const aNext = ot.multiply(cNext.tanh());

      // 4. Zapisz wyniki w cache i zaktualizuj stany
      outputs.push(aNext);
      this.cache.A.push(aNext);
      this.cache.C.push(cNext);
      this.cache.F.push(ft);
      this.cache.I.push(it);
      this.cache.G.push(gt);
      this.cache.O.push(ot);

      aPrev = aNext;
      cPrev = cNext;
    }

    // Połącz wszystkie wyjścia (stany ukryte) w jedną macierz
    return CalcMatrix2D.hstack(outputs);
  }

  // --- Implementacja metod abstrakcyjnych ---

  activation(m: CalcMatrix2D): CalcMatrix2D {
    // Ta metoda nie jest bezpośrednio używana w pętli forward,
    // ale jest wymagana przez interfejs.
    return m.tanh();
  }

  derivative(a: CalcMatrix2D): CalcMatrix2D {
    // Pochodna tanh(x) to 1 - tanh(x)^2
    return a.pow(2).minusOne();
  }

  getType(): LayerType {
    return LayerType.lstm;
  }

  is1D(): boolean {
    return true;
  }

  is3D(): boolean {
    return false;
  }

  transition(previousLayer: Layers): Layers {
    this.previousLayer = previousLayer;
    this.setHeight(previousLayer.getOutputHeight());
    this.setDepth(this.getOutputHeight());
    return this;
  }

  getSize(): number | Dimension {
    return [this.getWidth(), this.getHeight()];
  }

  getOutputWidth(): number {
    return this.getWidth();
  }

  getOutputHeight(): number {
    return this.getWidth(); // W LSTM rozmiar wyjścia jest równy rozmiarowi stanu ukrytego
  }

  getOutputDepth(): number {
    return 1;
  }
}
