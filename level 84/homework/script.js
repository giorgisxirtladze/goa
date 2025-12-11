let negativeNumber = -7;
let positiveValue = Math.abs(negativeNumber);
console.log("Positive value:", positiveValue);

let num1 = 5;
let num2 = -12;

let abs1 = Math.abs(num1);
let abs2 = Math.abs(num2);

if (abs1 > abs2) {
  console.log(num1 + " has the larger absolute value.");
} else if (abs2 > abs1) {
  console.log(num2 + " has the larger absolute value.");
} else {
  console.log("Both numbers have the same absolute value.");
}
