for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

const nums = [-4, 7, -2, 0, 9, 3];
for (let n of nums) {
  if (n <= 0) continue;
  console.log(n);
}

const text = "Hello Giorgi";
for (let char of text) {
  if (char === " ") continue;
  console.log(char);
}

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}
