function replaceParagraphWithButton() {
  const paragraph = document.querySelector("#container p");
  const parent = paragraph.parentNode;

  const button = document.createElement("button");
  button.textContent = "Click me";

  parent.replaceChild(button, paragraph);
}

window.onload = replaceParagraphWithButton;
