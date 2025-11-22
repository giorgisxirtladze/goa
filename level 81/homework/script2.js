const numbers = [4, -1, 7, -3, 9, -5];
const lastNegativeIndex = numbers.findLastIndex(num => num < 0);
console.log(lastNegativeIndex);

const users = [
  { name: "Ana", age: 15 },
  { name: "Nika", age: 22 },
  { name: "Luka", age: 17 },
  { name: "Mariam", age: 19 }
];
const lastAdultIndex = users.findLastIndex(user => user.age >= 18);
console.log(lastAdultIndex);
