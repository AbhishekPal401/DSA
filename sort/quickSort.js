const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let swapIndex = start;
  let pivot = arr[start];
  let i = start + 1;
  while (i <= end) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
    i++;
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

console.log(quickSort([1, 4, 23, 32, 5, 3, 1, 5, 9, 7, 9]));
