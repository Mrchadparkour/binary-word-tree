// const leaf = (value, parent) => {
//   return {
//     xPos: !parent ? 1000  : parent.val < value ? parent.xPos - 110 : parent.xPos + 110,
//     yPos: !parent ? 200 : parent.yPos - 200,
//     val: value,
//     right: null,
//     left: null
//   };
// }

class Btree {
  constructor() {
    this.root = null;
  }

  makeLeaf(value, parent) {
    if (parent){
      console.log("parent xPos is ", parent.xPos);
      console.log("parent is ", parent)

    }
    return {
      xPos: !parent ? 1000  : parent.val < value ? parent.xPos + 110 : parent.xPos - 110,
      yPos: !parent ? 200 : parent.yPos + 200,
      val: value,
      right: null,
      left: null
    };
  }

  insert(value, leaf, prev) {
    if (value < leaf.val) {
      if (leaf.left !== null) {
        this.insert(value, leaf.left, leaf);
      } else {
        console.log(leaf.val);
        leaf.left = this.makeLeaf(value, leaf);
        // leaf.left.val = value;
        // leaf.left.xPos = prev.xPos - 110;
        // leaf.left.yPos = prev.yPos - 200;
        // leaf.left.left = null;
        // leaf.left.right = null;
      }
    } else {
      if (leaf.right !== null) {
        this.insert(value, leaf.right, leaf);
      } else {
        leaf.right = this.makeLeaf(value, prev);
        // leaf.right.val = value;
        // leaf.right.xPos = prev.xPos + 110;
        // leaf.right.yPos = prev.yPos - 200;
        // leaf.right.left = null;
        // leaf.right.right = null;
      }
    }
  }

  executeInsert(value) {
    if (this.root !== null) {
      this.insert(value, this.root);
    } else {
      console.log(value)
      this.root = this.makeLeaf(value);
      // this.root.val = value;
      // this.root.xPos = 1000;
      // this.root.yPos = 200;
      // this.root.left = null;
      // this.root.right = null;
    }
  }

  getRoot() {
    return this.root;
  }
}

export const makeTree = (arr) => {
   let tree = new Btree();
   if (!arr) {
     arr = [20, 18, 7, 5];
   }

   for (var i = 0; i < arr.length; i++) {
     tree.executeInsert(arr[i]);
   }

   let json = tree.getRoot();

   return json;
}
