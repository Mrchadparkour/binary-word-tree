import { action, extendObservable, computed } from 'mobx';
import { setLeaf, setContext, drawLine } from './d3Functions';
import { makeTree } from './GrowTree';

export class MainStore {
  constructor() {
    extendObservable(this, {
      context: setContext(),
      inputs: [10, 16],
      tree: computed(() => makeTree(this.inputs)),
      addInput: action((word) => this.inputs.push(word))
    })
  }
}

export default new MainStore();
