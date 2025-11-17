import { CalcMatrix2D } from "impulse-math-device-ts";
import { Dimension, Layers, LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

/**
 * Warstwa w pełni połączona (Fully Connected / Dense).
 * Każdy neuron w tej warstwie jest połączony z każdym neuronem w warstwie poprzedniej.
 * Jest to podstawowy budulec większości sieci neuronowych.
 */
export class FullyConnectedLayer extends AbstractLayer1D {
  // Pamięć podręczna dla wstecznej propagacji
  private cache: {
    input?: CalcMatrix2D;
  } = {};

  public penalty(): number {
    return this.W.pow(2).sum().get()[0];
  }

  /**
   * Konfiguruje wagi i biasy warstwy.
   * @param inputSize Rozmiar wektora wejściowego.
   * @param outputSize Liczba neuronów w tej warstwie.
   */
  configure(inputSize: number, outputSize: number): void {
    this.width = outputSize; // W kontekście 1D, "width" to liczba neuronów
    this.height = inputSize;

    // Inicjalizacja wag (metoda Xavier)
    this.W = new CalcMatrix2D(outputSize, inputSize).setRandom(inputSize);
    // Inicjalizacja biasów
    this.b = new CalcMatrix2D(outputSize, 1).setZeros();

    // Inicjalizacja gradientów
    this.gW = new CalcMatrix2D(outputSize, inputSize).setZeros();
    this.gb = new CalcMatrix2D(outputSize, 1).setZeros();
  }

  /**
   * Automatycznie konfiguruje rozmiar wejściowy na podstawie poprzedniej warstwy.
   * Obsługuje "spłaszczanie" (flattening) danych z warstw 3D.
   */
  transition(previousLayer: Layers): Layers {
    this.previousLayer = previousLayer;
    let inputSize: number;

    if (previousLayer.is3D()) {
      // Spłaszczanie wyjścia z warstwy 3D (Conv, MaxPool)
      inputSize = previousLayer.getOutputWidth() * previousLayer.getOutputHeight() * previousLayer.getOutputDepth();
    } else {
      // Standardowe połączenie z warstwą 1D
      inputSize = previousLayer.getOutputWidth();
    }

    // `this.width` jest już ustawione w konstruktorze lub przez `setSize`
    this.configure(inputSize, this.getWidth());
    return this;
  }

  /**
   * Przetwarza partię danych wejściowych.
   * @param input Macierz o wymiarach (input_size, batch_size)
   */
  forward(input: CalcMatrix2D): CalcMatrix2D {
    const batchSize = input.cols();
    let currentInput = input;

    // Jeśli poprzednia warstwa była 3D, spłaszcz wejście
    if (this.previousLayer && this.previousLayer.is3D()) {
      const inputSize = this.W.cols();
      currentInput = input.reshape(inputSize, batchSize);
    }

    this.cache = { input: currentInput };

    // Y = W * X + b
    this.Z = this.W.dot(currentInput).add(this.b);
    // W tej warstwie nie ma funkcji aktywacji.
    // Aktywację (np. ReLU, Softmax) należy dodać jako osobną warstwę.
    this.A = this.Z;

    return this.A;
  }

  // Ta warstwa nie ma własnej funkcji aktywacji.
  activation(m: CalcMatrix2D): CalcMatrix2D { return m; }
  derivative(delta: CalcMatrix2D): CalcMatrix2D { return delta; }

  getType(): LayerType {
    return LayerType.fullyconnected;
  }

  setSize(value: number): this {
    this.width = value;
    return this;
  }
}
