const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let index = i;
    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
      index = j;
    }

    arr[index] = current;
  }

  return arr;
};

console.log(insertionSort([3, 2, 1, 5, 6, 7, 45, 232, 545, 55, 546, 32]));
