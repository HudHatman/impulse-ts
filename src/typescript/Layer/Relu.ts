import { CalcMatrix2D } from "impulse-math-device-ts";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class ReluLayer extends AbstractLayer1D {
  activation(m: CalcMatrix2D): CalcMatrix2D {
    return m.setMin(0.0);
  }

  activationAsync(m: CalcMatrix2D): Promise<CalcMatrix2D> {
    return new Promise((resolve) => {
      m.calcAsync((calc) => {
        calc.setMin(0.0).then((a) => {
          resolve(a);
        })
      })
    })
  }

  getType(): LayerType {
    return LayerType.relu;
  }

  derivative(delta: CalcMatrix2D) {
    return delta.reluBackpropagation();
  }
}

export { ReluLayer };
