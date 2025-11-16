import { Layers } from "../../types";
import { CalcMatrix2D } from "impulse-math-device-ts";

export abstract class AbstractBackPropagation {
  protected layer: Layers | null = null;
  protected previousLayer: Layers | null = null;

  constructor(layer: Layers | null, previousLayer: Layers) {
    this.layer = layer;
    this.previousLayer = previousLayer;
  }

  abstract propagate(
    input: CalcMatrix2D,
    numberOfExamples: number,
    regularization: number,
    layer: Layers,
    sigma: CalcMatrix2D
  ): CalcMatrix2D;
}
