const randomInt = Math.floor(Math.random() * 10) + 1;
console.log("Random integer (1–10):", randomInt);

const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice roll (1–6):", diceRoll);

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
const passwordLength = Math.floor(Math.random() * 9) + 8;
let password = "";
for (let i = 0; i < passwordLength; i++) {
  password += chars.charAt(Math.floor(Math.random() * chars.length));
}
console.log("Random password:", password);

const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const randomName = names[Math.floor(Math.random() * names.length)];
console.log("Selected name:", randomName);
