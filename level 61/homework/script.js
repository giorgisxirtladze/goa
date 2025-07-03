function checkEvenOdd() {
  let num = parseInt(document.getElementById("evenOddInput").value);
  document.getElementById("evenOddResult").textContent = num % 2 === 0 ? "ლუწია" : "კენტია";
}

function assignGrade() {
  let score = parseInt(document.getElementById("gradeInput").value);
  let result = "";
  if (score >= 90) result = "A";
  else if (score >= 80) result = "B";
  else if (score >= 70) result = "C";
  else if (score >= 60) result = "D";
  else result = "ჩაჭრილია";
  document.getElementById("gradeResult").textContent = result;
}

function findLargest() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let c = parseFloat(document.getElementById("num3").value);
  let result = "";
  if (a === b && b === c) result = "ყველა ტოლია";
  else if (a >= b && a >= c) result = "უდიდესია: " + a;
  else if (b >= a && b >= c) result = "უდიდესია: " + b;
  else result = "უდიდესია: " + c;
  document.getElementById("largestResult").textContent = result;
}

function checkVowelConsonant() {
  let char = document.getElementById("charInput").value.toLowerCase();
  let result = "";
  if (char.length === 1 && /[a-zა-ჰ]/.test(char)) {
    if ("aeiou".includes(char)) result = "ხმოვანი";
    else result = "თანხმოვანი";
  } else result = "არასწორია";
  document.getElementById("vowelResult").textContent = result;
}

function checkDivisibility() {
  let num = parseInt(document.getElementById("divInput").value);
  let result = "";
  if (num % 3 === 0 && num % 5 === 0) result = "იყოფა 3-ით და 5-ით";
  else if (num % 3 === 0) result = "მხოლოდ 3-ით იყოფა";
  else if (num % 5 === 0) result = "მხოლოდ 5-ით იყოფა";
  else result = "არც ერთით არ იყოფა";
  document.getElementById("divResult").textContent = result;
}

function checkAgeCategory() {
  let age = parseInt(document.getElementById("ageInput").value);
  let result = "";
  if (age < 0) result = "არასწორია";
  else if (age <= 12) result = "ბავშვი";
  else if (age <= 19) result = "მოზარდი";
  else if (age <= 59) result = "ზრდასრული";
  else result = "ხანდაზმული";
  document.getElementById("ageResult").textContent = result;
}
