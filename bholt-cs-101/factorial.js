const arguments = process.argv.slice(2);

if (
  !arguments ||
  arguments.length !== 1 ||
  Number.isNaN(Number(arguments[0]))
) {
  throw Error("Please input exactly one number as an argument");
}

function factorial(number) {
  if (number < 2) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

var hrstart = process.hrtime();
const inputArgument = Number(arguments[0]);
console.log("Factorial for: ", inputArgument);
const value = factorial(inputArgument);
console.log(value);
const hrend = process.hrtime(hrstart);
console.info("Execution time: %ds %dms", hrend[0], hrend[1] / 1000000);
