class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const popNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popNode.prev;
      this.tail.next = null;
      popNode.prev = null;
    }
    this.length--;
    return popNode;
  }

  shift() {
    if (!this.head) return undefined;
    const oldNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldNode.next;
      this.head.prev = null;
      oldNode.next = null;
    }
    this.length--;
    return oldNode;
  }

  unShift(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    if (index <= this.length / 2) {
      let count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      let count = this.length;
      current = this.tail;
      while (count !== index) {
        count--;
        current = current.prev;
      }
    }

    this.length++;
    return current;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unShift(value);
    if (index === this.length) return !!this.push(value);
    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkList();

list.push(56);
list.push(34);
list.push(35);
list.push(39);

console.log(list.remove(3));

console.log(list);
