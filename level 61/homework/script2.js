function print1to5() {
  let i = 1, result = "";
  while (i <= 5) {
    result += i + "\n";
    i++;
  }
  document.getElementById("out8").textContent = result;
}

function printEven2to10() {
  let i = 2, result = "";
  while (i <= 10) {
    result += i + "\n";
    i += 2;
  }
  document.getElementById("out9").textContent = result;
}

function print10to1While() {
  let i = 10, result = "";
  while (i >= 1) {
    result += i + "\n";
    i--;
  }
  document.getElementById("out10").textContent = result;
}

function print1to10For() {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += i + "\n";
  }
  document.getElementById("out11").textContent = result;
}

function printMultiplesOf3() {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    result += (i * 3) + "\n";
  }
  document.getElementById("out12").textContent = result;
}

function print10to1For() {
  let result = "";
  for (let i = 10; i >= 1; i--) {
    result += i + "\n";
  }
  document.getElementById("out13").textContent = result;
}

function printEven1to20() {
  let result = "";
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      result += i + "\n";
    }
  }
  document.getElementById("out14").textContent = result;
}

function sum1to5() {
  let sum = 0;
  for (let i = 1; i <= 5; i++) {
    sum += i;
  }
  document.getElementById("out15").textContent = "ჯამი: " + sum;
}
