function compareNums() {
  let num1 = Number(prompt("შეიყვანე პირველი რიცხვი:"));
  let num2 = Number(prompt("შეიყვანე მეორე რიცხვი:"));

  if (num1 > num2) {
    console.log(num1);
    alert("მეტი რიცხვია: " + num1);
  } else if (num2 > num1) {
    console.log(num2);
    alert("მეტი რიცხვია: " + num2);
  } else {
    console.log("Numbers are equal");
    alert("რიცხვები ტოლია");
  }
}
