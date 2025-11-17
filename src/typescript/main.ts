import { NetworkBuilder1D } from "./NetworkBuilder";
import {
  SoftmaxLayer,
  LogisticLayer,
  ReluLayer,
  SoftplusLayer,
  TanhLayer,
  //ConvLayer,
  //FullyConnectedLayer,
  //MaxPoolLayer,
  //RecurrentLayer,
  //LSTMLayer,
} from "./Layer";
import { Matrix } from "impulse-math-ts";
import {
  OptimizerAdam,
  OptimizerGradientDescent,
  OptimizerAdagrad,
  OptimizerMomentum,
  OptimizerRMSProp,
} from "./Trainer/Optimizer";
import { MiniBatchTrainer, Trainer as TrainerTrainer, RNNTrainer } from "./Trainer";
import { NetworkRNN, NetworkLSTM } from "./Network";
import { MeanSquaredErrorCost} from "./Trainer/Cost/MeanSquaredErrorCost";
import { CrossEntropyCost } from "./Trainer/Cost/CrossEntropyCost";

const NetworkBuilder = { NetworkBuilder1D };
const Math = {
  Matrix,
};
const Layer = {
  SoftmaxLayer,
  LogisticLayer,
  ReluLayer,
  SoftplusLayer,
  TanhLayer,
  // ConvLayer,
  //MaxPoolLayer,
  //FullyConnectedLayer,
  //RecurrentLayer,
  //LSTMLayer,
};
const Optimizer = {
  OptimizerAdam,
  OptimizerGradientDescent,
  OptimizerAdagrad,
  OptimizerMomentum,
  OptimizerRMSProp,
};
const Trainer = {
  MiniBatchTrainer,
  Trainer: TrainerTrainer,
  RNNTrainer,
};
const Network = {
  NetworkRNN,
  NetworkLSTM,
};

const Cost = {
  MeanSquaredErrorCost, CrossEntropyCost
}

export { NetworkBuilder, Math, Layer, Optimizer, Trainer, Network, Cost };
