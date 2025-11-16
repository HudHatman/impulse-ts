import { AbstractLayer } from "./AbstractLayer";
import { Dimension, Layers } from "../types";
import { CalcMatrix2D } from "impulse-math-device-ts";

abstract class AbstractLayer3D extends AbstractLayer {
  public W: CalcMatrix2D;
  public b: CalcMatrix2D;
  public A: CalcMatrix2D;
  public Z: CalcMatrix2D;
  public gW: CalcMatrix2D;
  public gb: CalcMatrix2D;
  public vW: CalcMatrix2D;
  public sW: CalcMatrix2D;
  public vb: CalcMatrix2D;
  public sb: CalcMatrix2D;
  public dW: CalcMatrix2D;
  public db: CalcMatrix2D;
  public dZ: CalcMatrix2D;

  constructor() {
    super();
    this.W = new CalcMatrix2D();
    this.b = new CalcMatrix2D();
    this.A = new CalcMatrix2D();
    this.Z = new CalcMatrix2D();
    this.gW = new CalcMatrix2D();
    this.gb = new CalcMatrix2D();
    this.vW = new CalcMatrix2D();
    this.vb = new CalcMatrix2D();
    this.sW = new CalcMatrix2D();
    this.sb = new CalcMatrix2D();
    this.dW = new CalcMatrix2D();
    this.db = new CalcMatrix2D();
  }

  configure(): void {
    // do nothing
  }

  is1D(): boolean {
    return false;
  }

  is3D(): boolean {
    return true;
  }

  transition(previousLayer: Layers): Layers {
    if (previousLayer.is3D()) {
      this.setSize([previousLayer.getOutputWidth(), previousLayer.getOutputHeight(), previousLayer.getOutputDepth()]);
    }

    super.transition(previousLayer);

    return this;
  }

  setSize(dimension: Dimension | number): Layers {
    this.setWidth(dimension[0]);
    this.setHeight(dimension[1]);
    this.setDepth(dimension[2]);

    return this;
  }

  getSize(): Dimension {
    return [this.getWidth(), this.getHeight(), this.getDepth()];
  }

  abstract getPadding(): number;

  abstract getStride(): number;

  abstract getFilterSize(): number;

  abstract forward(input: CalcMatrix2D): CalcMatrix2D;

  abstract derivative(delta: CalcMatrix2D): CalcMatrix2D;

  penalty(): number {
    return this.W.pow(2).sum();
  }
}

export { AbstractLayer3D };
