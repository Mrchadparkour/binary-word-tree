import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { setLeaf, setContext, drawLine } from './d3Functions';
import {makeTree} from './GrowTree';


const App = observer(class App extends Component {
  componentDidMount() {
    let context = setContext();
    const tree = makeTree(this.props.store.inputs);
    console.log(tree);
    this.printLines(context, tree);
    this.printTree(context, tree);
  }

  printLines(context, leaf) {
    drawLine(context, leaf);
    if (leaf.left != null) {
      this.printLines(context, leaf.left);
    }
    if (leaf.right != null) {
      this.printLines(context, leaf.right);
    }
  }

  printTree(context, leaf) {
    setLeaf(context, leaf, leaf.val);
    if (leaf.left != null) {
      this.printTree(context, leaf.left);
    }
    if (leaf.right != null) {
      this.printTree(context, leaf.right);
    }

  }

  render() {
    return (
      <div id="Tree">
      </div>
    );
  }
})

export default App;
