function correctUserPassword() {
  const correctPassword = "1234";
  let attempts = 0;
  let userInput;

  while (userInput !== correctPassword) {
    userInput = prompt("Enter your password:");
    attempts++;
  }

  alert("correct guess\nAttempts: " + attempts);
}

window.onload = correctUserPassword;
