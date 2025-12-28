const now = new Date();
console.log("Current date and time:", now.toLocaleString());

const year = now.getFullYear();
console.log("Current year:", year);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = days[now.getDay()];
console.log("Day of the week:", dayOfWeek);
