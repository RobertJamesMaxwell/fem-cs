// pass command line arg as follows:
// node bubble-sort.js '[4,5,6,1,2,3]'
const inputArray = JSON.parse(process.argv.slice(2)[0]);

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log("outside loop current: ", array);
    for (let j = i; j < array.length; j++) {
      console.log("i", i);
      console.log("j", j);
      console.log("array[i]", array[i]);
      console.log("array[j]", array[j]);
      if (array[i] > array[j]) {
        //swap
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        console.log("post swap: ", array);
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
