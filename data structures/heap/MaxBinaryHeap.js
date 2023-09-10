class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      const parent = this.values[parentIdx];
      if (element < parent) break;
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }

  extractMax() {
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
        if (leftChild > elements) {
          swap = leftIndx;
        }
      }
      if (rightIndx < length) {
        rightChild = this.values[rightIndx];
        if (
          (swap === null && rightChild > elements) ||
          (swap !== null && rightChild > leftChild)
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

const maxHeap = new MaxBinaryHeap();

maxHeap.insert(45);
maxHeap.insert(15);
maxHeap.insert(25);
maxHeap.insert(35);
maxHeap.insert(55);
maxHeap.insert(100);
maxHeap.extractMax();
maxHeap.extractMax();
maxHeap.extractMax();
maxHeap.extractMax();
maxHeap.extractMax();
maxHeap.extractMax();

console.log(maxHeap.extractMax());
