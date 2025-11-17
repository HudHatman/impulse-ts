import { CalcMatrix2D, CalcScalar } from "impulse-math-device-ts";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class LogisticLayer extends AbstractLayer1D {
  activation(m: CalcMatrix2D): CalcMatrix2D {
    return m.logisticForwardPropagation();
  }

  activationAsync(m: CalcMatrix2D): Promise<CalcMatrix2D> {
    return new Promise((resolve) => {
      m.calcAsync((calc) => {
        calc.logisticForwardPropagation().then((a) => {
          resolve(a);
        })
      })
    })
  }

  getType(): LayerType {
    return LayerType.logistic;
  }

  derivative(delta: CalcMatrix2D): CalcMatrix2D {
    return delta.logisticBackwardPropagation();
  }
}

export { LogisticLayer };
