const numbers = [3, 7, 12, 5, 9];
for (let num of numbers) {
  console.log(num);
}

const word = "Giorgi";
for (let char of word) {
  console.log(char);
}

const fruits = ["apple", "banana", "kiwi", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}

const values = [10, 20, 30, 40];
let total = 0;
for (let val of values) {
  total += val;
}
console.log(total);

const nums = [4, 15, 2, 99, 23];
let max = nums[0];
for (let n of nums) {
  if (n > max) {
    max = n;
  }
}
console.log(max);
