class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
    } else {
      const temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    return temp.value;
  }
}

const stack = new Stack();

stack.push(45);
stack.push(35);

stack.push(36);

stack.push(48);

stack.pop();

console.log(stack);
