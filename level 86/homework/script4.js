const obj = {
  a: 10,
  b: 25,
  c: 7,
  d: 42
};

const values = Object.values(obj);

const sum = values.reduce((acc, val) => acc + val, 0);

const max = Math.max(...values);

console.log(values);
console.log(sum);
console.log(max);
