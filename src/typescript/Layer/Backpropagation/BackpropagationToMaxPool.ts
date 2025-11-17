import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { CalcMatrix2D } from "impulse-math-device-ts";
import { Layers } from "../../types";
import { MaxPoolLayer } from "../MaxPool";

/**
 * Implementuje wsteczną propagację dla warstwy Max-Pooling.
 * Działa jak "przełącznik", kierując gradienty tylko do tych neuronów,
 * które miały maksymalną wartość podczas przechodzenia w przód.
 */
export class BackpropagationToMaxPool extends AbstractBackPropagation {
  propagate(
    input: CalcMatrix2D,
    numberOfExamples: number,
    regularization: number,
    layer: Layers,
    sigma: CalcMatrix2D
  ): CalcMatrix2D {
    const maxPoolLayer = layer as MaxPoolLayer;
    // @ts-ignore
    const { switches, inputShape } = maxPoolLayer.cache;
    const [inputHeight, inputWidth, inputDepth, batchSize] = inputShape;

    // Stwórz macierz gradientu wejściowego wypełnioną zerami
    const dX = new CalcMatrix2D(inputHeight * inputWidth * inputDepth, batchSize).setZeros();
    const dXData = dX.get();
    const sigmaData = sigma.get();

    let switchIndex = 0;
    const outputSize = sigma.get().length;

    // Rozprowadź gradienty do odpowiednich miejsc
    for (let i = 0; i < outputSize; i++) {
        const maxIndex = switches[switchIndex++];
        dXData[maxIndex] += sigmaData[i];
    }

    dX.set(dXData);

    // Przekształć gradient do kształtu oczekiwanego przez poprzednią warstwę
    return dX.reshape(inputHeight * inputWidth * inputDepth, batchSize);
  }
}
