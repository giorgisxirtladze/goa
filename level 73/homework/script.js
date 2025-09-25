let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

let j = 10;
do {
  console.log(j);
  j--;
} while (j >= 1);

let k = 2;
do {
  console.log(k);
  k += 2;
} while (k <= 20);

let num = 1;
let sum = 0;
do {
  console.log(num);
  sum += num;
  num++;
} while (sum < 100);
console.log(sum);

let m = 1;
do {
  console.log(`5 × ${m} = ${5 * m}`);
  m++;
} while (m <= 10);
