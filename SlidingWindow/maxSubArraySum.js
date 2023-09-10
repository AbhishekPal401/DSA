const maxSubArraySum = (arr, n) => {
  if (arr.length === 0) return;
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp = temp + arr[i + j];
    }

    if (max < temp) {
      max = temp;
    }
  }

  return max;
};

const result = maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
