function evaluateExpression() {
  const input = document.getElementById("expression").value;
  const resultElement = document.getElementById("result");

  try {
    const result = eval(input);
    resultElement.textContent = "Result: " + result;
  } catch (error) {
    resultElement.textContent = "Error: " + error.message;
  }

  const stored = eval("10 + 5");
  console.log("Stored string result:", stored);

  const comparison = eval("10 > 3");
  console.log("Is 10 > 3?", comparison);

  try {
    const invalid = eval("2 ++ 3");
    console.log("Invalid input result:", invalid);
  } catch (e) {
    console.log("Invalid input error:", e.message);
  }
}