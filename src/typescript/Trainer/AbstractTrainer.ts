import { Network } from "../Network";
import { AbstractOptimizer } from "./Optimizer/AbstractOptimizer";
import { Dataset } from "impulse-dataset-ts/src/typescript/Dataset/Dataset";
import { CalcMatrix2D } from "impulse-math-device-ts";
import { AbstractCost } from "./Cost/AbstractCost";

export interface CostResult {
  cost: number;
  accuracy: number;
}

export interface StepCallbackParameters {
  iteration: number;
}

export abstract class AbstractTrainer {
  network: Network;
  optimizer: AbstractOptimizer;
  costFunction: AbstractCost;
  regularization = 1e-4;
  iterations = 1000;
  learningRate = 0.001;
  verbose = true;
  verboseStep = 1;
  stepCallback = (data: StepCallbackParameters): void => undefined;

  constructor(network: Network, optimizer: AbstractOptimizer, costFunction: AbstractCost) {
    this.network = network;
    this.optimizer = optimizer;
    this.costFunction = costFunction;
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
    return this
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

  cost(predictions: CalcMatrix2D, correctOutput: CalcMatrix2D): CostResult {
    const miniBatchSize = correctOutput.cols();
    const dataLoss = this.costFunction.loss(correctOutput, predictions);

    let regularizationPenalty = 0;
    this.network.getLayers().forEach((layer) => {
      regularizationPenalty += layer.penalty().get()[0];
    });
    const regularizationLoss = (this.regularization * regularizationPenalty) / (2.0 * miniBatchSize);

    const cost = dataLoss + regularizationLoss;

    let correctPredictions = 0;
    for (let i = 0; i < miniBatchSize; i += 1) {
      const predictionIndex = predictions.col(i).maxCoeff();
      const outputIndex = correctOutput.col(i).maxCoeff();

      if (predictionIndex.get()[0] === outputIndex.get()[0]) {
        correctPredictions++;
      }
    }

    const accuracy = (correctPredictions / miniBatchSize) * 100.0;

    return {
      cost,
      accuracy,
    };
  }
}
