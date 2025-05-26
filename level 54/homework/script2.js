document.getElementById('btn6').addEventListener('click', function() {
  const text = document.getElementById('textInput6').value;
  alert("შენ ჩაწერე: " + text);
});

document.getElementById('form7').addEventListener('submit', function(event) {
  event.preventDefault();
  const color = document.getElementById('colorInput7').value;
  document.body.style.backgroundColor = color;
});

document.getElementById('btn8').addEventListener('click', function() {
  const firstName = document.getElementById('firstName8').value;
  const lastName = document.getElementById('lastName8').value;
  const fullName = firstName + " " + lastName;
  document.getElementById('fullNameDisplay').textContent = fullName;
});
