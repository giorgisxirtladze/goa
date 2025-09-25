const output = document.getElementById("output");

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 === 0) {
    continue;
  }
  output.textContent += i + "\n";
}
