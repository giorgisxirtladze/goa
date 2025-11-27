const tasks = [
  { title: "Finish project", completed: false },
  { title: "Wash dishes", completed: true },
  { title: "Call friend", completed: false }
];
const anyCompleted = tasks.some(t => t.completed);

const nums = [5, 12, 8, 3];
const allPositive = nums.every(n => n > 0);

const words = ["HELLO", "WORLD", "JAVASCRIPT"];
const allUppercase = words.every(w => w === w.toUpperCase());
