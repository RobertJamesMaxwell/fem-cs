class AVLTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
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
    this.height = 1;
  }

  add(value) {
    if (value < this.value) {
      // go left
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new Node(value);
      }
      // adjust height to check for rebalance
      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }
    } else {
      // go right
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new Node(value);
      }
      // adjust height to check for rebalance
      if (!this.left || this.left.height < this.right.height) {
        this.height = this.right.height + 1;
      }
    }
    this.balance();
  }

  balance() {
    const rightHeight = this.right ? this.right.height : 0;
    const leftHeight = this.left ? this.left.height : 0;

    // checks if tree is out of balance on left
    if (leftHeight > rightHeight + 1) {
      const leftRightHeight = this.left.right ? this.left.right.height : 0;
      const leftLeftHeight = this.left.left ? this.left.left.height : 0;

      // checks unbalance is skewed and if we need the additional secondary rotation
      if (leftRightHeight > leftLeftHeight) {
        this.left.rotateRR();
      }

      // performs rotation to restore balance
      this.rotateLL();

      // checks if tree is out of balance on right
    } else if (rightHeight > leftHeight + 1) {
      const rightLeftHeight = this.right.left ? this.right.left.height : 0;
      const rightRightHeight = this.right.right ? this.right.right.height : 0;

      // checks unbalance is skewed and if we need the additional secondary rotation
      if (rightLeftHeight > rightRightHeight) {
        this.right.rotateLL();
      }

      // performs rotation to restore balance
      this.rotateRR();
    }
  }

  rotateRR() {
    const valueBefore = this.value;
    const leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }

  rotateLL() {
    const valueBefore = this.value;
    const rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }

  updateInNewLocation() {
    if (!this.right && !this.left) {
      this.height = 1;
    } else if (
      !this.right ||
      (this.left && this.right.height < this.left.height)
    ) {
      this.height = this.left.height + 1;
    } else if (!this.left || this.right.height > this.left.height) {
      this.height = this.right.height + 1;
    }
  }
}

// console.log(new Node());
const tree = new AVLTree();
[...Array(100).keys()].forEach((key) => tree.add(key));
console.log(tree.getTree());
