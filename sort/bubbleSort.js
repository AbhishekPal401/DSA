const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const swapOptimised = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

const bubblesort = (arr) => {
  //for optimization -- > checking if there are no swaps if true break free from loop
  let swaps;
  for (let i = arr.length; i > 0; i--) {
    swaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swaps = false;
      }
    }

    if (swaps) break;
  }

  return arr;
};
