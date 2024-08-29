
# Universal Data Structure and Algorithm Visualizer

A JavaScript utility to visualize various data structures and algorithm steps using ASCII art. This utility extends the native `console` object with a `visualize` function, enabling you to better understand and debug complex data structures and algorithms.

## Features

- Visualize Linked Lists, Arrays, Binary Trees, Graphs, Stacks, Queues, Heaps, Hash Tables, Tries, DP Matrices, Ternary Trees, and Disjoint Sets.
- ASCII art representation to help with debugging and understanding data flow.
- Customizable with additional data structures and algorithms.

## Installation

You can include this utility in your project by simply copying the `visualize.js` file into your project or by adding the code directly to your JavaScript files.

### Manual Installation

1. Download or clone the repository:
   ```bash
   git clone https://github.com/MatthewNorton/universal-data-structure-visualizer.git
   ```

2. Include the `visualize.js` script in your project:
   ```javascript
   // In your main JavaScript file
   import './path-to/visualize.js';
   ```

## Usage

You can use the `console.visualize` function to visualize different data structures and algorithms. Below are some examples, explanations, and usage instructions.

### Linked List Example

```javascript
const myList = new LinkedList();
myList.add(1);
myList.add(2);
myList.add(3);
myList.printList(); // Uses console.visualize('linkedList', this);
```

#### Explanation:
- **`visualizeLinkedList`**: Converts a linked list to an ASCII representation, showing each node and its connection.

#### Usage:
- Call `console.visualize('linkedList', linkedListInstance)` to visualize a linked list.

### Array Example

```javascript
const array = [5, 3, 8, 1, 2];
console.visualize('array', array, { label: "Initial Array" });
```

#### Explanation:
- **`visualizeArray`**: Visualizes an array, useful for showing steps in sorting algorithms.

#### Usage:
- Call `console.visualize('array', array, { label: 'Step X' })` for array-based algorithms.

### Binary Tree Example

```javascript
const binaryTree = { root: { val: 5, left: { val: 3 }, right: { val: 8 } } };
console.visualize('binaryTree', binaryTree);
```

#### Explanation:
- **`visualizeBinaryTree`**: Recursively traverses a binary tree and visualizes it in a hierarchical structure.

#### Usage:
- Call `console.visualize('binaryTree', binaryTreeInstance)` to visualize a binary tree.

### Graph Example

```javascript
const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D', 'E'],
    D: ['E'],
    E: [],
};
console.visualize('graph', graph);
```

#### Explanation:
- **`visualizeGraph`**: Displays the adjacency list of a graph, showing how nodes are connected.

#### Usage:
- Call `console.visualize('graph', graphInstance)` to visualize a graph.

### Stack Example

```javascript
const stack = [1, 2, 3];
console.visualize('stack', stack);
```

#### Explanation:
- **`visualizeStack`**: Represents a stack as a vertical structure, showing the top at the highest point.

#### Usage:
- Call `console.visualize('stack', stackInstance)` to visualize a stack.

### Queue Example

```javascript
const queue = [1, 2, 3];
console.visualize('queue', queue);
```

#### Explanation:
- **`visualizeQueue`**: Shows the queue from front to back, indicating the flow of elements.

#### Usage:
- Call `console.visualize('queue', queueInstance)` to visualize a queue.

### Heap Example

```javascript
const heap = [10, 5, 7, 1, 2, 3];
console.visualize('heap', heap);
```

#### Explanation:
- **`visualizeHeap`**: Displays the binary heap in tree form, respecting the heap properties.

#### Usage:
- Call `console.visualize('heap', heapInstance)` to visualize a binary heap.

### Hash Table Example

```javascript
const hashTable = {
    0: { key: "key1", value: "value1" },
    1: { key: "key2", value: "value2" },
    2: null,
    3: { key: "key3", value: "value3" },
};
console.visualize('hashTable', hashTable);
```

#### Explanation:
- **`visualizeHashTable`**: Displays the contents of a hash table, showing key-value pairs with their respective indices.

#### Usage:
- Call `console.visualize('hashTable', hashTableInstance)` to visualize a hash table.

### Trie Example

```javascript
const trie = {
    root: {
        children: {
            a: { children: { p: { children: { p: { children: { l: { children: { e: { children: {} } } } } } } } } },
            p: { children: { r: { children: { o: { children: { g: { children: { r: { children: { a: { children: { m: { children: {} } } } } } } } } } } } } }
        }
    }
};
console.visualize('trie', trie);
```

#### Explanation:
- **`visualizeTrie`**: Visualizes a trie (prefix tree), displaying the structure of stored words or prefixes.

#### Usage:
- Call `console.visualize('trie', trieInstance)` to visualize a trie.

### Dynamic Programming Matrix Example

```javascript
const dpMatrix = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 2, 2, 2]
];
console.visualize('dpMatrix', dpMatrix);
```

#### Explanation:
- **`visualizeDPMatrix`**: Represents a dynamic programming matrix, typically used in DP-based algorithms.

#### Usage:
- Call `console.visualize('dpMatrix', dpMatrix)` to visualize a DP matrix.

### Ternary Tree Example

```javascript
const ternaryTree = {
    root: {
        val: 'g',
        left: { val: 'c' },
        middle: { val: 'h' },
        right: { val: 't' }
    }
};
console.visualize('ternaryTree', ternaryTree);
```

#### Explanation:
- **`visualizeTernaryTree`**: Visualizes a ternary search tree, showing nodes with up to three children.

#### Usage:
- Call `console.visualize('ternaryTree', ternaryTreeInstance)` to visualize a ternary tree.

### Disjoint Set Example

```javascript
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
```

#### Explanation:
- **`visualizeDisjointSet`**: Displays the parent links of elements in a disjoint set, showing connected components.

#### Usage:
- Call `console.visualize('disjointSet', disjointSetInstance)` to visualize a disjoint set.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
