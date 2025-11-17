import { Layers, LayerType } from "../../types";
import { Backpropagation1Dto1D } from "./Backpropagation1Dto1D";
import { Backpropagation3Dto1D } from "./Backpropagation3Dto1D";
import { BackpropagationToMaxPool } from "./BackpropagationToMaxPool";
import { BackpropagationToConv } from "./BackpropagationToConv";
import { AbstractBackPropagation } from "./AbstractBackpropagation";
import { BackpropagationToRecurrent } from "./BackpropagationToRecurrent";
import { BackpropagationToLSTM } from "./BackpropagationToLSTM";

export class BackpropagationFactory {
  static create(previousLayer: Layers, layer: Layers): AbstractBackPropagation | null {
    // --- Reguły oparte na typie bieżącej warstwy ---
    if (layer.getType() === LayerType.rnnlayer) {
      return new BackpropagationToRecurrent(layer, previousLayer);
    }
    if (layer.getType() === LayerType.lstm) {
      return new BackpropagationToLSTM(layer, previousLayer);
    }
    if (layer.getType() === LayerType.maxpool) {
      return new BackpropagationToMaxPool(layer, previousLayer);
    }
    if (layer.getType() === LayerType.conv) {
      return new BackpropagationToConv(layer, previousLayer);
    }

    // --- Reguły oparte na typie poprzedniej warstwy (jeśli istnieją) ---
    if (previousLayer) {
        if (previousLayer.is1D() || previousLayer.getType() == LayerType.fullyconnected) {
            return new Backpropagation1Dto1D(layer, previousLayer);
        }
    } 
    // --- Domyślne reguły ---
    else {
        if (layer.is1D()) {
            return new Backpropagation1Dto1D(layer, previousLayer);
        } else if (layer.is3D()) {
            // Domyślna obsługa dla warstw 3D, jeśli żadna inna reguła nie pasuje
            return new Backpropagation3Dto1D(layer, previousLayer);
        }
    }

    return null;
  }
}
