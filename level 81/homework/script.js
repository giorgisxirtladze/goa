const numbers = [3, 7, -2, 5, -8, 10];
const firstNegativeIndex = numbers.findIndex(num => num < 0);
console.log(firstNegativeIndex);

const users = [
  { name: "Ana", age: 15 },
  { name: "Nika", age: 17 },
  { name: "Luka", age: 18 },
  { name: "Mariam", age: 20 }
];
const firstAdultIndex = users.findIndex(user => user.age >= 18);
console.log(firstAdultIndex);
