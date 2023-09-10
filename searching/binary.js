const binarySearch = (array, element) => {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((end + start) / 2);

  while (array[middle] !== element && start <= end) {
    if (array[middle] < element) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }

    middle = Math.floor((end + start) / 2);
  }

  if (array[middle] === element) {
    return middle;
  } else {
    return -1;
  }
};

console.log(binarySearch([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 13));
