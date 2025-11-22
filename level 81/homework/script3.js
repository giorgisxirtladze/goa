const numbers = [3, 7, 11, 8, 5, 12];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

const products = [
  { id: 1, price: 50 },
  { id: 2, price: 75 },
  { id: 3, price: 120 },
  { id: 4, price: 200 }
];
const firstExpensiveProduct = products.find(product => product.price > 100);
console.log(firstExpensiveProduct);
