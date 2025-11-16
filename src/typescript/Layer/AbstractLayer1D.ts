import { AbstractLayer } from "./AbstractLayer";
import { Layers } from "../types";
import { CalcMatrix2D } from "impulse-math-device-ts";

abstract class AbstractLayer1D extends AbstractLayer {
  protected depth = 1;
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
    this.W.resize(this.getHeight(), this.getWidth());
    this.W.setRandom(this.previousLayer ? (this.previousLayer.getHeight() as number) : this.getHeight());

    this.b.resize(this.getHeight(), 1);
    this.b.setRandom(this.previousLayer ? (this.previousLayer.getHeight() as number) : this.getHeight());

    this.gW.resize(this.getHeight(), this.getWidth());
    this.gW.setZeros();

    this.gb.resize(this.getHeight(), 1);
    this.gb.setZeros();

    this.sW.resize(this.getHeight(), this.getWidth());
    this.sW.setZeros();

    this.sb.resize(this.getHeight(), 1);
    this.sb.setZeros();

    this.vW.resize(this.getHeight(), this.getWidth());
    this.vW.setZeros();

    this.vb.resize(this.getHeight(), 1);
    this.vb.setZeros();

    this.dW.resize(this.getHeight(), this.getWidth());
    this.dW.setZeros();

    this.db.resize(this.getHeight(), 1);
    this.db.setZeros();
  }

  forward(input: CalcMatrix2D): CalcMatrix2D {
    this.Z = this.W.dot(input).add(this.b.replicate(1, input.cols));
    this.A = this.activation(this.Z);
    return this.A;
  }

  is1D(): boolean {
    return true;
  }

  is3D(): boolean {
    return false;
  }

  transition(previousLayer: Layers): AbstractLayer1D {
    if (previousLayer.is1D()) {
      this.setWidth(previousLayer.getSize() as number);
    } else if (previousLayer.is3D()) {
      this.setWidth(previousLayer.getOutputWidth() * previousLayer.getOutputHeight() * previousLayer.getOutputDepth());
    }

    super.transition(previousLayer);

    return this;
  }

  setSize(value: number): AbstractLayer1D {
    this.setHeight(value as number);

    return this;
  }

  getSize(): number {
    return this.height;
  }

  getOutputWidth(): number {
    return this.width;
  }

  getOutputHeight(): number {
    return this.height;
  }

  getOutputDepth(): number {
    return 1;
  }

  penalty(): number {
    return 0;//this.W.pow(2).sum();
  }
}

export { AbstractLayer1D };
