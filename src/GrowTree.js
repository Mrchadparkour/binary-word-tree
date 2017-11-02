class Btree {
  constructor() {
    this.root = null;
  }

  makeLeaf(value, parent) {
    return {
      xPos: !parent ? 1000  : parent.val < value ? parent.xPos + 400 : parent.xPos - 400,
      yPos: !parent ? 200 : parent.yPos + 200,
      val: value,
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
        leaf.left = this.makeLeaf(value, leaf);
      }
    } else {
      if (leaf.right !== null) {
        this.insert(value, leaf.right, leaf);
      } else {
        leaf.right = this.makeLeaf(value, leaf);
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
}

export const makeTree = (arr) => {
   let tree = new Btree();
   if (!arr) {
     arr = [22, 24, 23, 18 ];
   }

   for (var i = 0; i < arr.length; i++) {
     tree.executeInsert(arr[i]);
   }

   let json = tree.getRoot();

   return json;
}
