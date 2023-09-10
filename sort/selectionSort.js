// the only thing that selection sort is better than bubble in comparison  that it do less swaps

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    let min = arr[index];

    //check for min values fo sub arrays
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }

    //swap
    if (index !== i) {
      let temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
};

const result = selectionSort([4, 3, 2, 5, 7, 5, 0, 4, 1, 8]);

console.log(result);
