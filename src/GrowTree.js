class Btree {
  constructor() {
    this.root = null;
  }

  makeLeaf(value, parent) {
    let maxDepth = !parent ? this.getMaxDepth() : 1;
    let depth = this.getCurrentDepth(parent);
    return {
      xPos: !parent ? 1700 : parent.val < value ? parent.xPos + 800 - (100 * depth) : parent.xPos - 800 +(100 * depth),
      yPos: !parent ? 600 : parent.yPos + 200,
      val: value,
      depth: !parent ? 1 : depth,
      right: null,
      left: null,
      up: !parent ? null : parent
    };
  }

  insert(value, leaf, prev) {
    if (value < leaf.val) {
      if (leaf.left !== null) {
        this.insert(value, leaf.left, leaf);
      } else {
        leaf.left = this.makeLeaf(value, leaf, false);
      }
    } else {
      if (leaf.right !== null) {
        this.insert(value, leaf.right, leaf);
      } else {
        leaf.right = this.makeLeaf(value, leaf, false);
      }
    }
  }

  executeInsert(value) {
    if (this.root !== null) {
      this.insert(value, this.root);
    } else {
      this.root = this.makeLeaf(value);
    }
  }

  getRoot() {
    return this.root;
  }

  maxDiver(leaf) {
    if (leaf === null) return 0;
    let leftDepth = this.maxDiver(leaf.left);
    let rightDepth = this.maxDiver(leaf.right);
    return (leftDepth > rightDepth) ? leftDepth + 1 : rightDepth + 1;
  }

  getMaxDepth() {
    if (this.root === null) return 0;
    return this.maxDiver(this.root);
  }

  getCurrentDepth(parent) {
    // console.log(parent);
    if (parent === null || parent === undefined) return 1;
    let depth = this.getCurrentDepth(parent.up);
    return depth + 1;
  }
}

export const makeTree = (arr) => {
   let tree = new Btree();
   if (!arr) {
     arr = [22, 24, 23, 18, 22.5, 19, 17, 23.5, 22.7, 22.4 ];
   }

   for (var i = 0; i < arr.length; i++) {
     tree.executeInsert(arr[i]);
   }

   let json = tree.getRoot();

  //  console.log("depthCount is ", tree.getMaxDepth());
   console.log(json);
   return json;
}
