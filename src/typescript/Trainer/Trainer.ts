import { AbstractTrainer } from "./AbstractTrainer";
import { Dataset } from "impulse-dataset-ts/src/typescript/Dataset/Dataset";
import { round } from "impulse-math-ts";
import { AbstractOptimizer } from "./Optimizer/AbstractOptimizer";
import { Network } from "../Network";
import { AbstractCost } from "./Cost/AbstractCost";

export class Trainer extends AbstractTrainer {
  constructor(network: Network, optimizer: AbstractOptimizer, costFunction: AbstractCost) {
    super(network, optimizer, costFunction);
  }

  train(inputDataset: Dataset, outputDataset: Dataset): AbstractTrainer {
    const numberOfExamples = inputDataset.getNumberOfExamples();
    const X = inputDataset.data.transpose();
    const Y = outputDataset.data.transpose();

    let t = 0;

    this.optimizer.setBatchSize(numberOfExamples);
    this.optimizer.setLearningRate(this.learningRate);

    for (let i = 0; i < this.iterations; i += 1) {
      const startTime = new Date().getTime();

      const predictions = this.network.forward(X);

      const sigma = this.costFunction.derivative(Y, predictions, this.network.getLastLayer());

      this.network.backward(X, this.regularization, sigma);

      this.optimizer.setT(++t);

      this.network.getLayers().forEach((layer) => {
        this.optimizer.optimize(layer);
      });

      if (this.verbose && (i + 1) % this.verboseStep === 0) {
        const currentResult = this.cost(predictions, Y);
        const endTime = new Date().getTime();

        console.log(
          `Iteration: ${i + 1} | Cost: ${round(currentResult.cost, 5)} | Accuracy: ${round(
            currentResult.accuracy,
            2
          )}% | Time: ${(endTime - startTime) / 1000} s.`
        );
      }

      this.stepCallback({
        iteration: i,
      });
    }

    return this;
  }
}
