const obj = {
  name: "Alice",
  age: 25,
  city: "Paris",
  country: "France"
};

const keys = Object.keys(obj);

const count = keys.length;

const hasCity = keys.includes("city");

console.log(keys);
console.log(count);
console.log(hasCity);
