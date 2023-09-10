class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      const parent = this.values[parentIdx];
      if (element.priority <= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  bubbleDown() {
    let idx = 0;
    let length = this.values.length;
    const elements = this.values[0];
    while (true) {
      let leftIndx = 2 * idx + 1;
      let rightIndx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftIndx < length) {
        leftChild = this.values[leftIndx];
        if (leftChild.priority > elements.priority) {
          swap = leftIndx;
        }
      }
      if (rightIndx < length) {
        rightChild = this.values[rightIndx];
        if (
          (swap === null && rightChild.priority > elements.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightIndx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = elements;
      idx = swap;
    }
  }
}

const ER = new PriorityQueue();

ER.enqueue('common cold ', 1);
ER.enqueue('gunshot wound', 5);
ER.enqueue('drunk', 0);
ER.enqueue('head exploded', 6);

ER.dequeue();
ER.dequeue();
ER.dequeue();
ER.dequeue();

console.log(ER.dequeue());
