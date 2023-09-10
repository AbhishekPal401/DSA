const getDigit = (number, place) => {
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
};

const countDigits = (number) => {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
};

const mostDigits = (numArr) => {
  let mostDigits = 0;
  for (let i = 0; i < numArr.length; i++) {
    mostDigits = Math.max(mostDigits, countDigits(numArr[i]));
  }
  return mostDigits;
};

const radixSort = (arr) => {
  let mostDigitCount = mostDigits(arr);
  for (let i = 0; i < mostDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
  }

  return arr;
};

// console.log(radixSort([34, 2323, 2323, 35, 656, 656, 65, 565, 767, 2]));

const arr = new Array(10);

console.log(arr);
