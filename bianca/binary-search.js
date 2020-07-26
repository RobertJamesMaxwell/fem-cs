//
// takes in a SORTED list as an array and an item to find
// example arguments: binarySearch([1,2,3,4,5,6,7,8,9,10], 8)
function binarySearch(list, item, minParam, maxParam) {
  let index = -1;
  let min = minParam ? minParam : 0;
  let max = maxParam ? maxParam : list.length - 1;
  let middle = Math.round((max - min) / 2) + min;

  // console.log("min:", min);
  // console.log("max:", max);
  // console.log("middle:", middle);
  // console.log("item:", item);

  if (item === list[middle]) {
    index = middle;
  } else if (item > list[middle]) {
    // search top/right half of list
    index = binarySearch(list, item, middle, max);
  } else if (item < list[middle]) {
    // search bottom/left half of list
    index = binarySearch(list, item, 0, middle);
  }

  return index;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
