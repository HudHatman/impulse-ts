import { CalcMatrix2D } from "impulse-math-device-ts";
import { LayerType } from "../types";
import { AbstractLayer3D } from "./AbstractLayer3D";

/**
 * Warstwa konwolucyjna (Convolutional Layer).
 * Przetwarza dane wejściowe 3D (wysokość, szerokość, głębokość/kanały)
 * za pomocą zestawu filtrów, aby wyodrębnić cechy takie jak krawędzie, tekstury itp.
 */
export class ConvLayer extends AbstractLayer3D {
  protected numFilters = 8;
  protected filterSize = 3;
  protected padding = 1;
  protected stride = 1;

  // Pamięć podręczna dla wstecznej propagacji
  private cache: {
    inputCols?: CalcMatrix2D;
    inputShape?: number[];
  } = {};

  public penalty(): number {
    return this.W.pow(2).sum().get()[0];
  }

  configure(): void {
    const inputDepth = this.getDepth();
    const filterWeightCount = this.filterSize * this.filterSize * inputDepth;

    this.W = new CalcMatrix2D(this.numFilters, filterWeightCount).setRandom(filterWeightCount);
    this.b = new CalcMatrix2D(this.numFilters, 1).setZeros();

    this.gW = new CalcMatrix2D(this.numFilters, filterWeightCount).setZeros();
    this.gb = new CalcMatrix2D(this.numFilters, 1).setZeros();
  }

  getOutputHeight(): number {
    return Math.floor((this.getHeight() - this.filterSize + 2 * this.padding) / this.stride + 1);
  }

  getOutputWidth(): number {
    return Math.floor((this.getWidth() - this.filterSize + 2 * this.padding) / this.stride + 1);
  }

  getOutputDepth(): number {
    return this.numFilters;
  }

  private im2col(input: CalcMatrix2D, batchSize: number): CalcMatrix2D {
    const [inputHeight, inputWidth, inputDepth] = [this.getHeight(), this.getWidth(), this.getDepth()];
    const outputHeight = this.getOutputHeight();
    const outputWidth = this.getOutputWidth();
    const filterArea = this.filterSize * this.filterSize;

    const result = new CalcMatrix2D(filterArea * inputDepth, outputHeight * outputWidth * batchSize).allocate().calcSync((calc) => {
      return calc.img2col(this.filterSize, this.stride, this.padding)
    });
    return result;
  }

  /**
   * Przetwarza partię danych wejściowych.
   * @param input Macierz o wymiarach (wysokość * szerokość * głębokość, liczba_przykładów)
   */
  forward(input: CalcMatrix2D): CalcMatrix2D {
    const batchSize = input.cols();
    const outputHeight = this.getOutputHeight();
    const outputWidth = this.getOutputWidth();

    // 1. Przekształć wejście za pomocą im2col
    const inputCols = this.im2col(input, batchSize);
    this.cache = { inputCols, inputShape: [this.getHeight(), this.getWidth(), this.getDepth()] };

    // 2. Wykonaj operację konwolucji jako jedno mnożenie macierzy
    const result = this.W.dot(inputCols).add(this.b);

    // 3. Przekształć wynik do odpowiedniego formatu wyjściowego
    const reshapedResult = result.reshape(this.numFilters, outputHeight * outputWidth * batchSize);

    // 4. Zastosuj funkcję aktywacji
    this.Z = reshapedResult;
    this.A = this.activation(this.Z);

    return this.A;
  }

  activation(m: CalcMatrix2D): CalcMatrix2D {
    return m.relu(); // ReLU jest standardem dla warstw konwolucyjnych
  }

  derivative(delta: CalcMatrix2D): CalcMatrix2D {
    return delta.reluDerivative(this.A);
  }

  getType(): LayerType {
    return LayerType.conv;
  }

  // --- Settery dla parametrów warstwy ---
  setFilterSize(size: number): this { this.filterSize = size; return this; }
  setNumFilters(num: number): this { this.numFilters = num; return this; }
  setPadding(pad: number): this { this.padding = pad; return this; }
  setStride(stride: number): this { this.stride = stride; return this; }
}
