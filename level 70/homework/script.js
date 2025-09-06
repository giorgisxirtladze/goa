let count = 1;
const counter = setInterval(() => {
  console.log(count);
  if (count === 5) clearInterval(counter);
  count++;
}, 1000);

const msgInterval = setInterval(() => {
  console.log("Message every 2 seconds");
}, 2000);
setTimeout(() => {
  clearInterval(msgInterval);
}, 10000);

const colors = ["red", "blue", "green", "yellow", "purple"];
let i = 0;
const colorChange = setInterval(() => {
  document.body.style.backgroundColor = colors[i];
  i++;
  if (i === 5) clearInterval(colorChange);
}, 3000);

const timeInterval = setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);
setTimeout(() => {
  clearInterval(timeInterval);
}, 15000);

let seconds = 0;
const timer = setInterval(() => {
  seconds++;
  console.log(seconds);
  if (seconds === 10) clearInterval(timer);
}, 1000);

const nums = [10, 20, 30, 40];
console.log(nums[1]);

const values = [5, 15, 25];
values[0] = 100;
console.log(values);

const words = ["apple", "banana", "cherry"];
console.log(words[0]);
console.log(words[1]);
console.log(words[2]);

const numbers = [3, 6, 9, 12, 15];
const sum = numbers[0] + numbers[4];
console.log(sum);
