import { CalcMatrix2D } from "impulse-math-device-ts";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class ReluLayer extends AbstractLayer1D {
  activation(m: CalcMatrix2D): CalcMatrix2D {
    return m.setMin(0.0);
  }

  getType(): LayerType {
    return LayerType.relu;
  }

  derivative(delta: CalcMatrix2D) {
    return delta.reluBackpropagation();
  }
}

export { ReluLayer };
