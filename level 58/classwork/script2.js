function discountFunc() {
  let ageInput = prompt("შეიყვანეთ თქვენი ასაკი:");
  let age = Number(ageInput);

  if (age < 18) {
    alert("თქვენ გეკუთვნით 20% ფასდაკლება.");
  } else if (age >= 18 && age < 65) {
    alert("თქვენ გეკუთვნით 5% ფასდაკლება.");
  } else {
    alert("თქვენ გეკუთვნით 10% ფასდაკლება.");
  }
}
