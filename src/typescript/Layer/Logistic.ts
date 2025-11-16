import { CalcMatrix2D, CalcScalar } from "impulse-math-device-ts";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class LogisticLayer extends AbstractLayer1D {
  activation(m: CalcMatrix2D): CalcMatrix2D {
    return m.logisticForwardPropagation();
  }

  getType(): LayerType {
    return LayerType.logistic;
  }

  derivative(delta: CalcMatrix2D): CalcMatrix2D {
    return delta.logisticBackwardPropagation();
  }
  public loss(correctOutput: CalcMatrix2D, predictions: CalcMatrix2D) {
    const result = correctOutput
      .multiply(predictions.log())
      .add(correctOutput.minusOne().multiply(predictions.logMinusOne()));
    return result.sum().get()[0];
  }

  public error(batchSize: number) {
    return -1.0 / batchSize;
  }
}

export { LogisticLayer };
