import React, { Component } from 'react';
import { setLeaf, setContext } from './d3Functions';
import {makeTree} from './GrowTree';

// const tree = {
//   leaf: {
//     val: 10,
//     yPos: 200,
//     xPos: 1000,
//     left: {
//       val: 8,
//       yPos: 400,
//       xPos: 890,
//       left: null,
//       right: {
//         val: 9,
//         yPos: 600,
//         xPos: 790,
//         left: null,
//         right: null
//       }
//     },
//     right: {
//       val: 12,
//       yPos: 400,
//       xPos: 1100,
//       left: null,
//       right: null
//     }
//   }
// };

const tree = makeTree();

class App extends Component {
  componentDidMount() {
    let context = setContext();
    console.log(tree);
    this.printTree(context, tree);
  }

  printTree(context, leaf) {
    setLeaf(context, leaf.xPos, leaf.yPos, leaf.val);
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
}

export default App;
