function checkBothGreaterThan10() {
  let num1 = 15;
  let num2 = 20;
  let result = (num1 > 10 && num2 > 10)
    ? "Both numbers are greater than 10."
    : "At least one number is not greater than 10.";
  document.getElementById("output").textContent = result;
}

function checkAtLeastOneCondition() {
  let age = 16;
  let hasPermission = false;
  let result = (age >= 18 || hasPermission)
    ? "Access granted."
    : "Access denied.";
  document.getElementById("output").textContent = result;
}

function useNotOperator() {
  let isLoggedIn = false;
  let result = !isLoggedIn
    ? "User is not logged in."
    : "User is logged in.";
  document.getElementById("output").textContent = result;
}

function combineLogicalOperations() {
  let score = 85;
  let passed = true;
  let result = ((score > 80 && passed) || score === 100)
    ? "Excellent result."
    : "Needs improvement.";
  document.getElementById("output").textContent = result;
}
