import { CalcMatrix2D } from "impulse-math-device-ts";
import { LayerType } from "../types";
import { AbstractLayer3D } from "./AbstractLayer3D";

/**
 * Warstwa Max-Pooling.
 * Redukuje wymiarowość przestrzenną (wysokość i szerokość) map cech,
 * zachowując najważniejsze informacje (maksymalne wartości) z każdego regionu.
 */
export class MaxPoolLayer extends AbstractLayer3D {
  protected filterSize = 2;
  protected stride = 2;

  // Pamięć podręczna dla wstecznej propagacji, przechowująca indeksy maksymalnych wartości.
  private cache: {
    switches?: number[];
    inputShape?: number[];
  } = {};

  // Warstwa Max-Pooling nie ma wag do uczenia się.
  public penalty(): number { return 0; }
  configure(): void { }
  activation(m: CalcMatrix2D): CalcMatrix2D { return m; }
  derivative(delta: CalcMatrix2D): CalcMatrix2D { return delta; }

  getOutputHeight(): number {
    return Math.floor((this.getHeight() - this.filterSize) / this.stride + 1);
  }

  getOutputWidth(): number {
    return Math.floor((this.getWidth() - this.filterSize) / this.stride + 1);
  }

  getOutputDepth(): number {
    return this.getDepth(); // Głębokość pozostaje bez zmian
  }

  /**
   * Przetwarza partię danych wejściowych.
   * @param input Macierz o wymiarach (wysokość * szerokość * głębokość, liczba_przykładów)
   */
  forward(input: CalcMatrix2D): CalcMatrix2D {
    const batchSize = input.cols();
    const [inputHeight, inputWidth, inputDepth] = [this.getHeight(), this.getWidth(), this.getDepth()];
    const outputHeight = this.getOutputHeight();
    const outputWidth = this.getOutputWidth();

    const output = new CalcMatrix2D(outputHeight * outputWidth * inputDepth, batchSize).allocate().setZeros();
    const switches: number[] = []; // Przechowuje indeksy maksymalnych wartości

    const inputData = input.get();
    const outputData = output.get();

    for (let n = 0; n < batchSize; n++) {
      const batchOffset = n * inputHeight * inputWidth * inputDepth;
      for (let c = 0; c < inputDepth; c++) {
        const channelOffset = c * inputHeight * inputWidth;
        for (let y = 0; y < outputHeight; y++) {
          for (let x = 0; x < outputWidth; x++) {
            const startY = y * this.stride;
            const startX = x * this.stride;

            let maxVal = -Infinity;
            let maxIndex = -1;

            // Znajdź maksymalną wartość w oknie
            for (let fy = 0; fy < this.filterSize; fy++) {
              for (let fx = 0; fx < this.filterSize; fx++) {
                const imgY = startY + fy;
                const imgX = startX + fx;
                const currentIndex = batchOffset + channelOffset + imgY * inputWidth + imgX;
                const currentVal = inputData[currentIndex];

                if (currentVal > maxVal) {
                  maxVal = currentVal;
                  maxIndex = currentIndex;
                }
              }
            }

            // Zapisz maksymalną wartość i jej indeks
            const outputIndex = n * (outputHeight * outputWidth * inputDepth) + c * (outputHeight * outputWidth) + y * outputWidth + x;
            outputData[outputIndex] = maxVal;
            switches.push(maxIndex);
          }
        }
      }
    }
    
    output.set(outputData);
    this.cache = { switches, inputShape: [inputHeight, inputWidth, inputDepth, batchSize] };
    this.A = output;

    return this.A;
  }

  getType(): LayerType {
    return LayerType.maxpool;
  }

  // --- Settery dla parametrów warstwy ---
  setFilterSize(size: number): this { this.filterSize = size; return this; }
  getFilterSize(): number { return this.filterSize; }
  setStride(stride: number): this { this.stride = stride; return this; }
  getStride(): number { return this.stride; }
  getPadding(): number { return 0; } // Max-pooling zazwyczaj nie używa paddingu
}
