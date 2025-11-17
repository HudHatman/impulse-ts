import { Dimension, Layers } from "../types";
import { CalcMatrix2D } from "impulse-math-device-ts";
import * as fs from "fs";

class Network {
  private readonly dimensions: Dimension | null = null;
  private size = 0;
  private layers: Layers[] = [];

  constructor(dimensions: Dimension) {
    this.dimensions = dimensions;
  }

  addLayer(layer: Layers): Network {
    this.size++;
    this.layers.push(layer);

    return this;
  }

  getLayers(): Layers[] {
    return this.layers;
  }

  getLastLayer(): Layers {
    return this.layers[this.layers.length - 1];
  }

  forward(input: CalcMatrix2D): CalcMatrix2D {
    let output = input;

    this.layers.forEach((layer: Layers) => {
      output = layer.forward(output);
    });

    return output;
  }

  forwardAsync(input: CalcMatrix2D): Promise<CalcMatrix2D> {
    return new Promise((resolve) => {
      let output = input.clone();
      let l = 0;
      const next = () => {
        return this.layers[l].forwardAsync(output).then((out) => {
          output.destroy();
          output = out;
          if (l < this.layers.length - 1) {
            l++;
            next();
          } else {
            resolve(output);
          }
        })
      };

      next();
    })
  }

  backward(X: CalcMatrix2D, regularization: number, sigma: CalcMatrix2D): void {
    const m = X.cols();
    let currentSigma = sigma;

    for (let i = this.layers.length - 1; i >= 0; i -= 1) {
      const layer = this.layers[i];
      currentSigma = layer.getBackPropagation().propagate(X, m, regularization, layer, currentSigma);
    }
  }

  save(path: string): Promise<string> {
    const resultJSON = {
      dimensions: this.dimensions,
      layers: [],
    };

    this.layers.forEach((layer: Layers) => {
      resultJSON.layers.push({
        type: layer.getType(),
        size: layer.getSize(),
        weights: {
          W: layer.W.get(),
          b: layer.b.get(),
        },
      });
    });

    const result = JSON.stringify(resultJSON);

    return new Promise((resolve, reject) => {
      fs.writeFile(path, result, (err) => {
        if (err) {
          console.error(err);
          reject();
        }
        resolve(result);
      });
    });
  }
}

export { Network };
export default Network;
