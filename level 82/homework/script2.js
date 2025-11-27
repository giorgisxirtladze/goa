const nums = [3, 7, 9];
const allGreaterThanZero = nums.every(n => n > 0);

const words = ["CODE", "JAVASCRIPT", "HTML"];
const allUppercase = words.every(w => w === w.toUpperCase());

const users = [
  { age: 19 },
  { age: 22 },
  { age: 18 }
];
const allAdults = users.every(u => u.age >= 18);
