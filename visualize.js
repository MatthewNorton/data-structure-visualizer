/**
 * Function to visualize a linked list in ASCII art form
 * @param {LinkedList} list - The linked list to represent
 * @returns {string} - ASCII art representation of the linked list
 */
function visualizeLinkedList(list) {
  let current = list.head;
  let output = '';
  let index = 0;

  while (current) {
      output += `['IDX: ${index}: ${current.val}'] -> `;
      current = current.next;
      index++;
  }
  output += "null\n"; // End of the list
  return output;
}

/**
* Function to visualize an array (useful for sorting algorithms)
* @param {Array} arr - The array to represent
* @param {string} [label=""] - Optional label to describe the current state (e.g., "Pivot: 3")
* @returns {string} - ASCII art representation of the array
*/
function visualizeArray(arr, label = "") {
  let output = label ? `${label}: ` : '';
  output += arr.map(val => `[${val}]`).join(" -> ") + "\n";
  return output;
}

/**
* Function to visualize a binary tree in ASCII art form
* @param {BinaryTree} tree - The binary tree to represent
* @returns {string} - ASCII art representation of the binary tree
*/
function visualizeBinaryTree(tree) {
  function traverse(node, depth = 0) {
      if (!node) return '';

      let output = '';
      output += traverse(node.right, depth + 1);
      output += ' '.repeat(4 * depth) + `[${node.val}]\n`;
      output += traverse(node.left, depth + 1);
      return output;
  }

  return traverse(tree.root);
}

/**
* Function to visualize a graph in ASCII art form
* @param {Graph} graph - The graph to represent
* @returns {string} - ASCII art representation of the graph
*/
function visualizeGraph(graph) {
  let output = '';

  for (const [node, edges] of Object.entries(graph)) {
      output += `${node} -> ${edges.join(', ')}\n`;
  }

  return output;
}

/**
* Function to visualize a stack in ASCII art form
* @param {Stack} stack - The stack to represent
* @returns {string} - ASCII art representation of the stack
*/
function visualizeStack(stack) {
  let output = '';

  for (let i = stack.length - 1; i >= 0; i--) {
      output += `| ${stack[i]} |\n`;
  }
  output += "-----\n";
  return output;
}

/**
* Function to visualize a queue in ASCII art form
* @param {Queue} queue - The queue to represent
* @returns {string} - ASCII art representation of the queue
*/
function visualizeQueue(queue) {
  let output = "Front ";
  output += queue.map(val => `[${val}]`).join(" -> ");
  output += " Back\n";
  return output;
}

/**
* Function to visualize a heap in ASCII art form
* @param {Heap} heap - The heap to represent
* @returns {string} - ASCII art representation of the heap
*/
function visualizeHeap(heap) {
  function traverse(index = 0, depth = 0) {
      if (index >= heap.length) return '';

      let output = '';
      output += traverse(2 * index + 2, depth + 1); // Right child
      output += ' '.repeat(4 * depth) + `[${heap[index]}]\n`;
      output += traverse(2 * index + 1, depth + 1); // Left child
      return output;
  }

  return traverse();
}

/**
* Function to visualize a hash table in ASCII art form
* @param {HashTable} hashTable - The hash table to represent
* @returns {string} - ASCII art representation of the hash table
*/
function visualizeHashTable(hashTable) {
  let output = '';

  for (const [index, entry] of Object.entries(hashTable)) {
      output += `[${index}]: ${entry ? `{${entry.key}: ${entry.value}}` : 'null'}\n`;
  }

  return output;
}

/**
* Function to visualize a trie in ASCII art form
* @param {Trie} trie - The trie to represent
* @returns {string} - ASCII art representation of the trie
*/
function visualizeTrie(trie) {
  function traverse(node, depth = 0) {
      let output = '';
      for (const [char, child] of Object.entries(node.children)) {
          output += ' '.repeat(depth * 2) + char + '\n';
          output += traverse(child, depth + 1);
      }
      return output;
  }

  return traverse(trie.root);
}

/**
* Function to visualize a dynamic programming matrix in ASCII art form
* @param {Array<Array<number>>} matrix - The DP matrix to represent
* @returns {string} - ASCII art representation of the DP matrix
*/
function visualizeDPMatrix(matrix) {
  let output = '';
  for (const row of matrix) {
      output += row.map(val => val.toString().padStart(3, ' ')).join(' ') + '\n';
  }
  return output;
}

/**
* Function to visualize a ternary search tree in ASCII art form
* @param {TernarySearchTree} tree - The ternary search tree to represent
* @returns {string} - ASCII art representation of the ternary search tree
*/
function visualizeTernaryTree(tree) {
  function traverse(node, depth = 0) {
      if (!node) return '';

      let output = '';
      output += traverse(node.right, depth + 1);
      output += ' '.repeat(depth * 2) + `[${node.val}]\n`;
      output += traverse(node.middle, depth + 1);
      output += traverse(node.left, depth + 1);
      return output;
  }

  return traverse(tree.root);
}

/**
* Function to visualize a disjoint set (union-find) in ASCII art form
* @param {DisjointSet} set - The disjoint set to represent
* @returns {string} - ASCII art representation of the disjoint set
*/
function visualizeDisjointSet(set) {
  let output = '';
  for (const [element, parent] of Object.entries(set.parents)) {
      output += `${element} -> ${parent}\n`;
  }
  return output;
}

/**
* Universal console.log function to visualize different structures/outputs
* @param {string} type - Type of structure or algorithm ("linkedList", "array", "binaryTree", etc.)
* @param {Object} data - The data to visualize
* @param {Object} options - Additional options for visualization
*/
console.visualize = function(type, data, options = {}) {
  let visualization = "";

  switch(type) {
      case 'linkedList':
          visualization = visualizeLinkedList(data);
          break;
      case 'array':
          visualization = visualizeArray(data, options.label);
          break;
      case 'binaryTree':
          visualization = visualizeBinaryTree(data);
          break;
      case 'graph':
          visualization = visualizeGraph(data);
          break;
      case 'stack':
          visualization = visualizeStack(data);
          break;
      case 'queue':
          visualization = visualizeQueue(data);
          break;
      case 'heap':
          visualization = visualizeHeap(data);
          break;
      case 'hashTable':
          visualization = visualizeHashTable(data);
          break;
      case 'trie':
          visualization = visualizeTrie(data);
          break;
      case 'dpMatrix':
          visualization = visualizeDPMatrix(data);
          break;
      case 'ternaryTree':
          visualization = visualizeTernaryTree(data);
          break;
      case 'disjointSet':
          visualization = visualizeDisjointSet(data);
          break;
      default:
          console.error("Unknown visualization type");
          return;
  }

  console.log(visualization);
};

// Example usage:

// LinkedList Example
const myList = new LinkedList();
myList.add(1);
myList.add(2);
myList.add(3);
myList.printList(); // Uses console.visualize('linkedList', this);

// Array Example
const array = [5, 3, 8, 1, 2];
console.visualize('array', array, { label: "Initial Array" });

// Binary Tree Example
const binaryTree = { root: { val: 5, left: { val: 3 }, right: { val: 8 } } };
console.visualize('binaryTree', binaryTree);

// Stack Example
const stack = [1, 2, 3];
console.visualize('stack', stack);

// Queue Example
const queue = [1, 2, 3];
console.visualize('queue', queue);

// Heap Example
const heap = [10, 5, 7, 1, 2, 3];
console.visualize('heap', heap);

// Hash Table Example
const hashTable = {
  0: { key: "key1", value: "value1" },
  1: { key: "key2", value: "value2" },
  2: null,
  3: { key: "key3", value: "value3" },
};
console.visualize('hashTable', hashTable);

// Trie Example
const trie = {
  root: {
      children: {
          a: { children: { p: { children: { p: { children: { l: { children: { e: { children: {} } } } } } } } } },
          p: { children: { r: { children: { o: { children: { g: { children: { r: { children: { a: { children: { m: { children: {} } } } } } } } } } } } } }
      }
  }
};
console.visualize('trie', trie);

// DP Matrix Example
const dpMatrix = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 2, 2, 2]
];
console.visualize('dpMatrix', dpMatrix);

// Ternary Tree Example
const ternaryTree = {
  root: {
      val: 'g',
      left: { val: 'c' },
      middle: { val: 'h' },
      right: { val: 't' }
  }
};
console.visualize('ternaryTree', ternaryTree);

// Disjoint Set Example
const disjointSet = {
  parents: {
      1: 2,
      2: 2,
      3: 3,
      4: 3,
      5: 3
  }
};
console.visualize('disjointSet', disjointSet);
