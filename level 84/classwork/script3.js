const prompt = require("promptsync")();

let a = parseFloat(prompt("enter first decimal: "));
let b = parseFloat(prompt("enter second decimal: "));

let x = Math.trunc(Math.pow(a, 3));
let y = Math.floor(b);

console.log("truncated:", x);
console.log("floored:", y);
console.log("min:", Math.min(x, y));
console.log("max:", Math.max(x, y));
