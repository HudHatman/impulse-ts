import { Network } from "../Network";
import { AbstractOptimizer } from "./Optimizer/AbstractOptimizer";
import { Dataset } from "impulse-dataset-ts/src/typescript/Dataset/Dataset";

export interface CostResult {
  cost: number;
  accuracy: number;
}

export interface StepCallbackParameters {
  iteration: number;
}

export abstract class AbstractTrainer {
  network: Network | null = null;
  optimizer: AbstractOptimizer | null = null;
  regularization = 1e-4;
  iterations = 1000;
  learningRate = 0.001;
  verbose = true;
  verboseStep = 1;
  stepCallback = (data: StepCallbackParameters): void => undefined;

  constructor(network: Network, optimizer: AbstractOptimizer) {
    this.network = network;
    this.optimizer = optimizer;
  }

  abstract train(inputDataset: Dataset, outputDataset: Dataset): AbstractTrainer;

  setRegularization(regularization: number): AbstractTrainer {
    this.regularization = regularization;
    return this;
  }

  setIterations(iterations: number): AbstractTrainer {
    this.iterations = iterations;
    return this;
  }

  setLearningRate(learningRate: number): AbstractTrainer {
    this.learningRate = learningRate;
    return this;
  }

  setVerbose(verbose: boolean): AbstractTrainer {
    this.verbose = verbose;
    return this;
  }

  setVerboseStep(verboseStep: number): AbstractTrainer {
    this.verboseStep = verboseStep;
    return this;
  }

  setStepCallback(stepCallback: (data: StepCallbackParameters) => void): AbstractTrainer {
    this.stepCallback = stepCallback;
    return this;
  }

  cost(inputDataset: Dataset, outputDataset: Dataset): CostResult {
    const numberOfExamples = inputDataset.getNumberOfExamples();

    let accuracy = 0;
    let penalty = 0;
    let cost = 0;

    this.network.getLayers().forEach((layer) => {
      penalty += layer.penalty().get()[0];
    });

    const predictions = this.network.forward(inputDataset.data.transpose());
    const correctOutput = outputDataset.data.transpose();

    const miniBatchSize = correctOutput.cols();
    console.log("SIZE", miniBatchSize);
    const loss = this.network.loss(correctOutput, predictions);
    const error = this.network.error(miniBatchSize);

    cost =
      (error * loss + (this.regularization * penalty) / (2.0 * miniBatchSize)) /
      (miniBatchSize * (miniBatchSize / miniBatchSize));

    for (let i = 0; i < predictions.cols(); i += 1) {
      const p = predictions.col(i).maxCoeff();
      const o = correctOutput.col(i).maxCoeff();

      if (p.get()[0] === o.get()[0]) {
        accuracy++;
      }
    }

    return {
      cost,
      accuracy: ((accuracy - 1.0) / numberOfExamples) * 100.0,
    };
  }
}
