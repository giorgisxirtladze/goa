let decimalNumber = 7.6;
let nearestWhole = Math.round(decimalNumber);
console.log("Rounded to nearest whole number:", nearestWhole);

let anotherDecimal = 12.3;
let roundedResult = Math.round(anotherDecimal);

if (roundedResult > anotherDecimal) {
  console.log(anotherDecimal + " rounds up to " + roundedResult);
} else if (roundedResult < anotherDecimal) {
  console.log(anotherDecimal + " rounds down to " + roundedResult);
} else {
  console.log(anotherDecimal + " is already a whole number.");
}
