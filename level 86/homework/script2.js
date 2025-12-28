const obj = {
  name: "Alice",
  age: 25,
  city: "Paris"
};

const properties = ["name", "age", "country", "city", "email"];

const count = properties.reduce((acc, prop) => 
  acc + (Object.hasOwn(obj, prop) ? 1 : 0), 0
);

console.log(count); 
