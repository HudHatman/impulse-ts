import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { CalcMatrix2D } from "impulse-math-device-ts";
import { Layers } from "../../types";

export class Backpropagation3Dto1D extends AbstractBackPropagation {
  propagate(input: MaCalcMatrix2Dtrix, numberOfExamples: number, regularization: number, layer: Layers, sigma: Matrix): Matrix {
    return sigma;
  }
}
