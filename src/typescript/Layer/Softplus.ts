import { CalcMatrix2D } from "impulse-math-device-ts";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class SoftplusLayer extends AbstractLayer1D {
  activation(m: CalcMatrix2D): CalcMatrix2D {
    return m.exp().add(1).log();
  }

  getType(): LayerType {
    return LayerType.softplus;
  }

  derivative(delta: CalcMatrix2D): CalcMatrix2D {
    return delta.multiply(-1).exp().add(1).fraction(1);
  }
}

export { SoftplusLayer };
