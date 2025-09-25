const person = { name: "Giorgi", age: 20, city: "Tbilisi" };
for (let key in person) {
  console.log(key);
}

const book = { title: "JavaScript Basics", author: "John Doe", year: 2022 };
for (let key in book) {
  console.log(book[key]);
}

const student = { name: "Ana", grade: "A", subject: "Math" };
for (let key in student) {
  console.log(key, student[key]);
}

const data = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let count = 0;
for (let key in data) {
  count++;
}
console.log(count);

const original = { x: 10, y: 20, z: 30 };
const copy = {};
for (let key in original) {
  copy[key] = original[key];
}
console.log(copy);
