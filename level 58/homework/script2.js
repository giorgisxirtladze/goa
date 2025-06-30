let num = Number(prompt("Enter a number:"));
if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

let age = Number(prompt("Enter your age:"));
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You are not eligible to vote.");
}

let first = Number(prompt("Enter the first number:"));
let second = Number(prompt("Enter the second number:"));
if (first > second) {
  console.log("The first number is larger.");
} else if (second > first) {
  console.log("The second number is larger.");
} else {
  console.log("Both numbers are equal.");
}
