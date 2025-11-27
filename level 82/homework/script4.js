const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);

const words = ["apple", "banana", "kiwi", "strawberry"];
const longWords = words.filter(w => w.length > 5);

const products = [
  { name: "Pen", inStock: true },
  { name: "Notebook", inStock: false },
  { name: "Bag", inStock: true }
];
const available = products.filter(p => p.inStock);
