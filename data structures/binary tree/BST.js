class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    let current = this.root;
    if (this.root === null) {
      this.root = node;
      return this;
    }
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return undefined;
    let current = this.root,
      found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  BFS() {
    if (!this.root) return undefined;
    let node = this.root;

    let queue = [],
      data = [];

    queue.push(node);

    while (queue.length !== 0) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    if (!this.root) return undefined;
    let node = this.root;

    const data = [];

    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(node);

    return data;
  }

  DFSPostOrder() {
    //in this first we check the left and right value and then store  there parents basically  bottoms one will be added
    if (!this.root) return undefined;
    let node = this.root;

    const data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };

    traverse(node);

    return data;
  }

  DFSInOrder() {
    if (!this.root) return undefined;
    let node = this.root;

    const data = [];

    const traverse = (node) => {
      node.left && traverse(node.left);
      data.push(node.value);
      node.right && traverse(node.right);
    };

    traverse(node);

    return data;
  }
}

const bst = new BinarySearchTree();

bst.insert(34);
bst.insert(12);
bst.insert(54);
bst.insert(87);
bst.insert(10);
bst.insert(14);
bst.insert(14);

console.log(bst.DFSInOrder());
