const greeting = document.getElementById("greeting");
const button = document.getElementById("changeBtn");

button.addEventListener("click", () => {
  greeting.textContent = "Hello Giorgi";
});
