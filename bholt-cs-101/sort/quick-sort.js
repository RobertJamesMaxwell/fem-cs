// pass command line arg as follows:
// node quick-sort.js '[4,5,6,1,2,3]'
const inputArray = JSON.parse(process.argv.slice(2)[0]);

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const lastIndex = array.length - 1;
  const pivot = array[lastIndex];
  const valuesSmallerThanPivot = [];
  const valuesLargerThanOrEqualToPivot = [];

  let val;
  for (let i = 0; i < lastIndex; i++) {
    val = array[i];
    if (val < pivot) {
      valuesSmallerThanPivot.push(val);
    } else {
      valuesLargerThanOrEqualToPivot.push(val);
    }
  }

  return [
    ...quickSort(valuesSmallerThanPivot),
    pivot,
    ...quickSort(valuesLargerThanOrEqualToPivot),
  ];
};

var hrstart = process.hrtime();
const sortedArray = quickSort(inputArray);
console.log("Sorted array:", sortedArray);
const hrend = process.hrtime(hrstart);
console.info("Execution time: %ds %dms", hrend[0], hrend[1] / 1000000);
