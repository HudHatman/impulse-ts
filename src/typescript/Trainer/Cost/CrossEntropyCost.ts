import { AbstractCost } from "./AbstractCost";
import { CalcMatrix2D } from "impulse-math-device-ts";
import { LayerType } from "../../types";
import { AbstractLayer } from "../../Layer/AbstractLayer";

export class CrossEntropyCost extends AbstractCost {
  private readonly epsilon = 1e-8;

  loss(correctOutput: CalcMatrix2D, predictions: CalcMatrix2D): number {
    const miniBatchSize = correctOutput.cols();
    const logPredictions = predictions.add(this.epsilon).log();
    const cost = correctOutput.multiply(logPredictions).sum().get()[0];
    return -cost / miniBatchSize;
  }

  derivative(
    correctOutput: CalcMatrix2D,
    predictions: CalcMatrix2D,
    lastLayer: AbstractLayer
  ): CalcMatrix2D {
    if (lastLayer.getType() === LayerType.softmax) {
      return predictions.subtract(correctOutput);
    }

    const denominator = predictions
      .multiply(predictions.minusOne().multiply(-1))
      .add(this.epsilon);

    const dA = predictions.subtract(correctOutput).divide(denominator);

    return dA.multiply(lastLayer.derivative(predictions));
  }
}
