const form = document.getElementById('myForm');
const heading = document.getElementById('myHeading');
const textInput = document.getElementById('textInput');
const colorInput = document.getElementById('colorInput');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const userText = textInput.value;
  const userColor = colorInput.value;

  heading.textContent = userText;
  heading.style.color = userColor;
});
