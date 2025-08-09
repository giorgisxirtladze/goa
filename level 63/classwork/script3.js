function createStyledDiv() {
  const section = document.getElementById("my-section");
  const div = document.createElement("div");
  const paragraph = document.createElement("p");
  paragraph.textContent = "ეს არის პარაგრაფი დივის შიგნით.";
  div.appendChild(paragraph);
  div.style.color = "white";
  div.style.backgroundColor = "teal";
  div.style.padding = "10px";
  div.style.borderRadius = "5px";
  section.appendChild(div);
}

createStyledDiv();
