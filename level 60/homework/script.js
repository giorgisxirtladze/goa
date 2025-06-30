function homework1() {
  console.log(Boolean(0));
  console.log(Boolean(1));
  console.log(Boolean("hello"));
  console.log(Boolean(""));
  console.log(Boolean(null));
}

function homework2() {
  let input = prompt("Enter a number:");
  let number = Number(input);
  if (number % 2 === 0) {
    alert("Even number");
  } else {
    alert("Odd number");
  }
}

function homework3() {
  let score = Number(prompt("Enter your score (0-100):"));
  if (score >= 90 && score <= 100) {
    alert("Grade: A");
  } else if (score >= 80) {
    alert("Grade: B");
  } else if (score >= 70) {
    alert("Grade: C");
  } else if (score >= 60) {
    alert("Grade: D");
  } else {
    alert("Grade: F");
  }
}

function homework4() {
  let book = {
    title: "Your Book Title",
    author: "Your Name",
    genres: ["fiction", "adventure"]
  };
  console.log(book.genres[0]);
  book.genres.push("fantasy");
  book.title = "New Book Title";
  console.log(book);
}

function homework5() {
  let num1 = Number(prompt("Enter first number:"));
  let op = prompt("Enter operation (+, -, *, /):");
  let num2 = Number(prompt("Enter second number:"));
  let result;
  if (op === "+") {
    result = num1 + num2;
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "*") {
    result = num1 * num2;
  } else if (op === "/") {
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  } else {
    result = "Invalid operation";
  }
  alert("Result: " + result);
}

function homework6() {
  let name = prompt("Enter your name:");
  let age = Number(prompt("Enter your age:"));
  if (name === "Alex" && age > 18) {
    alert("Welcome Alex!");
  } else {
    alert("Access denied.");
  }
}

function homework7() {
  let users = [function homework1() {
  console.log(Boolean(0));
  console.log(Boolean(1));
  console.log(Boolean("hello"));
  console.log(Boolean(""));
  console.log(Boolean(null));
}

function homework2() {
  let input = prompt("Enter a number:");
  let number = Number(input);
  if (number % 2 === 0) {
    alert("Even number");
  } else {
    alert("Odd number");
  }
}

function homework3() {
  let score = Number(prompt("Enter your score (0-100):"));
  if (score >= 90 && score <= 100) {
    alert("Grade: A");
  } else if (score >= 80) {
    alert("Grade: B");
  } else if (score >= 70) {
    alert("Grade: C");
  } else if (score >= 60) {
    alert("Grade: D");
  } else {
    alert("Grade: F");
  }
}

function homework4() {
  let book = {
    title: "Your Book Title",
    author: "Your Name",
    genres: ["fiction", "adventure"]
  };
  console.log(book.genres[0]);
  book.genres.push("fantasy");
  book.title = "New Book Title";
  console.log(book);
}

function homework5() {
  let num1 = Number(prompt("Enter first number:"));
  let op = prompt("Enter operation (+, -, *, /):");
  let num2 = Number(prompt("Enter second number:"));
  let result;
  if (op === "+") {
    result = num1 + num2;
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "*") {
    result = num1 * num2;
  } else if (op === "/") {
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  } else {
    result = "Invalid operation";
  }
  alert("Result: " + result);
}

function homework6() {
  let name = prompt("Enter your name:");
  let age = Number(prompt("Enter your age:"));
  if (name === "Alex" && age > 18) {
    alert("Welcome Alex!");
  } else {
    alert("Access denied.");
  }
}

function homework7() {
  let users = [
    { name: "Nika", age: 21 },
    { name: "Mariam", age: 19 }
  ];
  console.log(users[0].name);
  users[1].age = 20;
  users.push({ name: "Giorgi", age: 25 });
  console.log(users);
}

function homework8() {
  let input = prompt("Enter something:");
  let number = Number(input);
  if (!isNaN(number)) {
    alert("That’s a valid number!");
  } else {
    alert("Not a number.");
  }
}

    { name: "Nika", age: 21 },
    { name: "Mariam", age: 19 }
  ];
  console.log(users[0].name);
  users[1].age = 20;
  users.push({ name: "Giorgi", age: 25 });
  console.log(users);
}

function homework8() {
  let input = prompt("Enter something:");
  let number = Number(input);
  if (!isNaN(number)) {
    alert("That’s a valid number!");
  } else {
    alert("Not a number.");
  }
}
