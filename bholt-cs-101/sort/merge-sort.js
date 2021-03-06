// pass command line arg as follows:
// node merge-sort.js '[4,5,6,1,2,3]'
const inputArray = JSON.parse(process.argv.slice(2)[0]);

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  } else {
    const middle = Math.round(array.length / 2);
    const firstHalf = array.slice(0, middle);
    const secondHalf = array.slice(middle, array.length);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
};

// can alternatively mutate the arrays with shift, and would not need the pointers
const merge = (sortedArray1, sortedArray2) => {
  const sortedCombinedArray = [];
  let sortedArray1Pointer = 0;
  let sortedArray2Pointer = 0;
  let array1Element = sortedArray1[sortedArray1Pointer];
  let array2Element = sortedArray2[sortedArray2Pointer];

  while (array1Element && array2Element) {
    if (array1Element < array2Element) {
      sortedCombinedArray.push(array1Element);
      sortedArray1Pointer++;
      array1Element = sortedArray1[sortedArray1Pointer];
    } else if (array2Element) {
      sortedCombinedArray.push(array2Element);
      sortedArray2Pointer++;
      array2Element = sortedArray2[sortedArray2Pointer];
    }
  }
  if (sortedArray1Pointer < sortedArray1.length) {
    while (sortedArray1Pointer < sortedArray1.length) {
      sortedCombinedArray.push(sortedArray1[sortedArray1Pointer]);
      sortedArray1Pointer++;
    }
  }
  if (sortedArray2Pointer < sortedArray2.length) {
    while (sortedArray2Pointer < sortedArray2.length) {
      sortedCombinedArray.push(sortedArray2[sortedArray2Pointer]);
      sortedArray2Pointer++;
    }
  }

  return sortedCombinedArray;
};

var hrstart = process.hrtime();
const sortedArray = mergeSort(inputArray);
console.log("Sorted array:", sortedArray);
const hrend = process.hrtime(hrstart);
console.info("Execution time: %ds %dms", hrend[0], hrend[1] / 1000000);
