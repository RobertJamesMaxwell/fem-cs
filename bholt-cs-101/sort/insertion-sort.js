// pass command line arg as follows:
// node insertion-sort.js '[4,5,6,1,2,3]'
const inputArray = JSON.parse(process.argv.slice(2)[0]);

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let spliced = array.splice(i, 1);
        console.log("spliced", spliced);
        console.log("array", array);
        array.splice(j, 0, spliced[0]);
      }
    }
  }
  return array;
};

var hrstart = process.hrtime();
const sortedArray = insertionSort(inputArray);
console.log("Sorted array:", sortedArray);
const hrend = process.hrtime(hrstart);
console.info("Execution time: %ds %dms", hrend[0], hrend[1] / 1000000);
