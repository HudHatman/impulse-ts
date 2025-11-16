import { CalcMatrix2D } from "impulse-math-device-ts";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class SoftmaxLayer extends AbstractLayer1D {
  activation(m: CalcMatrix2D): CalcMatrix2D {
    return m.softmax();
  }

  getType(): LayerType {
    return LayerType.softmax;
  }

  derivative(delta: CalcMatrix2D): CalcMatrix2D {
    return delta.softmaxDerivative();
  }

  public loss(correctOutput: CalcMatrix2D, predictions: CalcMatrix2D) {
    const result = correctOutput.multiply(predictions.log());
    return result.sum().get()[0];
  }

  public error(batchSize: number) {
    return -1.0 / batchSize;
  }
}

export { SoftmaxLayer };
