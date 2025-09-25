for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

let num = 1;
let sum = 0;
while (true) {
  sum += num;
  if (sum > 50) break;
  console.log(num);
  num++;
}

const numbers = [12, 8, 5, -3, 7, -1];
for (let n of numbers) {
  if (n < 0) {
    console.log(n);
    break;
  }
}

const names = ["Ana", "Luka", "John", "Nino"];
for (let name of names) {
  if (name === "John") break;
  console.log(name);
}

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0 && i % 11 === 0) {
    console.log(i);
    break;
  }
}
