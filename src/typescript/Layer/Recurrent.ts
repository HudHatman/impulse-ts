import { CalcMatrix2D } from "impulse-math-device-ts";
import { Dimension, LayerType, Layers } from "../types";
import { AbstractLayer } from "./AbstractLayer";

/**
 * Podstawowa warstwa rekurencyjna (RNN).
 * Ta warstwa przetwarza sekwencje danych, utrzymując wewnętrzny stan.
 *
 * Wymiary:
 * - `height` (inputSize): Rozmiar wektora wejściowego w jednym kroku czasowym.
 * - `width` (hiddenSize): Rozmiar wektora stanu ukrytego.
 * - `depth` (outputSize): Rozmiar wektora wyjściowego w jednym kroku czasowym.
 */
export class RecurrentLayer extends AbstractLayer {
  // --- Wagi i Biary ---
  public Wax: CalcMatrix2D; // Wagi: Wejście -> Stan ukryty
  public Waa: CalcMatrix2D; // Wagi: Stan ukryty -> Stan ukryty
  public Wya: CalcMatrix2D; // Wagi: Stan ukryty -> Wyjście

  public ba: CalcMatrix2D; // Bias: Stan ukryty
  public by: CalcMatrix2D; // Bias: Wyjście

  // --- Gradienty ---
  public dWax: CalcMatrix2D;
  public dWaa: CalcMatrix2D;
  public dWya: CalcMatrix2D;
  public dba: CalcMatrix2D;
  public dby: CalcMatrix2D;

  // --- Pamięć podręczna dla Backpropagation Through Time (BPTT) ---
  public cache: {
    A: CalcMatrix2D[]; // Stany ukryte a<t>
    X: CalcMatrix2D[]; // Wejścia x<t>
    Y?: CalcMatrix2D[]; // Wyjścia y<t>
  } = { A: [], X: [] };

  public penalty(): number {
    // Prosta regularyzacja L2 dla wszystkich wag
    const waaPenalty = this.Waa.pow(2).sum().get()[0];
    const waxPenalty = this.Wax.pow(2).sum().get()[0];
    const wyaPenalty = this.Wya.pow(2).sum().get()[0];
    return waaPenalty + waxPenalty + wyaPenalty;
  }

  configure(): void {
    const inputSize = this.getHeight();
    const hiddenSize = this.getWidth();
    const outputSize = this.getDepth();

    // Inicjalizacja wag (metoda Xavier)
    this.Wax = new CalcMatrix2D(hiddenSize, inputSize).setRandom(inputSize);
    this.Waa = new CalcMatrix2D(hiddenSize, hiddenSize).setRandom(hiddenSize);
    this.Wya = new CalcMatrix2D(outputSize, hiddenSize).setRandom(hiddenSize);

    // Inicjalizacja biasów
    this.ba = new CalcMatrix2D(hiddenSize, 1).setZeros();
    this.by = new CalcMatrix2D(outputSize, 1).setZeros();

    // Inicjalizacja gradientów
    this.dWax = new CalcMatrix2D(hiddenSize, inputSize).setZeros();
    this.dWaa = new CalcMatrix2D(hiddenSize, hiddenSize).setZeros();
    this.dWya = new CalcMatrix2D(outputSize, hiddenSize).setZeros();
    this.dba = new CalcMatrix2D(hiddenSize, 1).setZeros();
    this.dby = new CalcMatrix2D(outputSize, 1).setZeros();
  }

  /**
   * Przetwarza całą sekwencję wejściową.
   * @param input Macierz o wymiarach (input_size, sequence_length)
   */
  forward(input: CalcMatrix2D): CalcMatrix2D {
    const sequenceLength = input.cols();
    const hiddenSize = this.getWidth();

    // Inicjalizacja pamięci podręcznej i stanu początkowego
    this.cache = { A: [], X: [] };
    let aPrev = new CalcMatrix2D(hiddenSize, 1).setZeros();
    this.cache.A.push(aPrev.clone());

    const outputs: CalcMatrix2D[] = [];

    // Pętla po krokach czasowych
    for (let t = 0; t < sequenceLength; t++) {
      const xt = input.col(t);
      this.cache.X.push(xt.clone());

      // Obliczenie stanu ukrytego: a<t> = tanh(Waa * a<t-1> + Wax * x<t> + ba)
      const aNext = this.Waa.dot(aPrev)
        .add(this.Wax.dot(xt))
        .add(this.ba)
        .tanh();

      // Obliczenie wyjścia: y<t> = Wya * a<t> + by (bez aktywacji)
      const yt = this.Wya.dot(aNext).add(this.by);

      outputs.push(yt);
      this.cache.A.push(aNext);
      aPrev = aNext;
    }

    // Połącz wszystkie wyjścia w jedną macierz
    return CalcMatrix2D.hstack(outputs);
  }

  // --- Implementacja metod abstrakcyjnych ---

  activation(m: CalcMatrix2D): CalcMatrix2D {
    return m.tanh();
  }

  derivative(a: CalcMatrix2D): CalcMatrix2D {
    // Pochodna tanh(x) to 1 - tanh(x)^2
    return a.pow(2).minusOne().multiply(-1);
  }

  getType(): LayerType {
    return LayerType.rnnlayer;
  }

  is1D(): boolean {
    return true; // Traktujemy sekwencję jako "płaską" warstwę
  }

  is3D(): boolean {
    return false;
  }

  transition(previousLayer: Layers): Layers {
    this.previousLayer = previousLayer;
    this.setHeight(previousLayer.getOutputHeight());
    this.setDepth(this.getOutputHeight()); // Domyślnie output_size = hidden_size
    return this;
  }

  getSize(): number | Dimension {
    return [this.getWidth(), this.getHeight(), this.getDepth()];
  }

  getOutputWidth(): number {
    return this.getWidth();
  }

  getOutputHeight(): number {
    return this.getDepth();
  }

  getOutputDepth(): number {
    return 1;
  }
}
