import { CalcMatrix2D } from "impulse-math-device-ts";
import { LayerType } from "../types";
import { AbstractLayer1D } from "./AbstractLayer1D";

class PurelinLayer extends AbstractLayer1D {
  activation(m: CalcMatrix2D): CalcMatrix2D {
    return m;
  }

  getType(): LayerType {
    return LayerType.purelin;
  }

  derivative(delta: CalcMatrix2D): CalcMatrix2D {
    return delta.setOnes();
  }
}

export { PurelinLayer };
