import React, { Component } from 'react';
import { setLeaf, setContext } from './d3Functions';

const testBinary = {
  leaf: {
    val: 10,
    pos: 200,
    left: {
      val: 8,
      left: null,
      right: null
    },
    right: {
      val: 12,
      left: null,
      right: {
        val: 13,
        left: null,
        right: null
      }
    }
  }
};

class App extends Component {
  componentDidMount() {
    let context = setContext();
    for (var i = 1; i < 10; i++ ) {
      var spot = i * 200;
      setLeaf(context, spot, i);
    }
    this.printTree(testBinary.leaf);
  }

  printTree(leaf) {
    console.log(leaf.val);
    if (leaf.left != null) {
      this.printTree(leaf.left);
    }
    if (leaf.right != null) {
      this.printTree(leaf.right);
    }

  }

  render() {
    return (
      <div id="Tree">
      </div>
    );
  }
}

export default App;
