const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null,
        },
      },
    },
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null,
      },
      right: {
        value: 11,
        left: null,
        right: null,
      },
    },
  },
};

const preorderTraverse = (node, array) => {
  array.push(node.value);
  if (node.left) {
    preorderTraverse(node.left, array);
  }
  if (node.right) {
    preorderTraverse(node.right, array);
  }
  return array;
};

const inorderTraverse = (node, array) => {
  // fill this out
};

const postorderTraverse = (node, array) => {
  // fill this out
};

console.log(preorderTraverse(tree, []));
