const section = document.getElementById("mySection");
const heading = document.createElement("h2");
const text = document.createTextNode("hello world");
heading.appendChild(text);
heading.style.color = "green";
section.appendChild(heading);
