const heading = document.getElementById("myHeading");

function changeFontSize() {
  const userInput = prompt("enter a number:");
  const size = parseInt(userInput);

  if (!isNaN(size) && size > 0) {
    heading.style.fontSize = size + "px";
  } else {
    alert("please enter only a positive number");
  }
}

heading.addEventListener("click", changeFontSize);
