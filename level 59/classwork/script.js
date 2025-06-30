document.getElementById('checkBtn').addEventListener('click', function() {
  let number = prompt("შეიყვანეთ რიცხვი:");
  number = parseInt(number);
  if (number % 2 === 0) {
    alert("ეს რიცხვი ლუწია.");
  } else {
    alert("ეს რიცხვი კენტია.");
  }
});