// pass command line arg as follows:
// node bubble-sort.js '[4,5,6,1,2,3]'
const inputArray = JSON.parse(process.argv.slice(2)[0]);

const bubbleSort = (array) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        console.log("pre swap: ", array);
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        console.log("post swap: ", array);
        swapped = true;
      }
    }
  }
  return array;
};

var hrstart = process.hrtime();
const sortedArray = bubbleSort(inputArray);
console.log("Sorted array:", sortedArray);
const hrend = process.hrtime(hrstart);
console.info("Execution time: %ds %dms", hrend[0], hrend[1] / 1000000);
