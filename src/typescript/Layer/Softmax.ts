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
    return delta.multiply(-1).add(1).fraction(1);
  }
}

export { SoftmaxLayer };
