class BST {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      let currentRoot = this.root;
      while (currentRoot) {
        if (value < currentRoot.value) {
          if (!currentRoot.left) {
            currentRoot.left = new Node(value);
            break;
          } else {
            currentRoot = currentRoot.left;
          }
        } else {
          if (!currentRoot.right) {
            currentRoot.right = new Node(value);
            break;
          } else {
            currentRoot = currentRoot.right;
          }
        }
      }
    }
  }

  getTree() {
    return this.root;
  }
}

class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// console.log(new Node());
const tree = new BST();
tree.add(4);
tree.add(3);
tree.add(2);
tree.add(5);
tree.add(6);
console.log(tree.getTree());
