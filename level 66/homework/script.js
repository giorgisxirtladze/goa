const previous = document.getElementById("previous");
const next = document.getElementById("next");
let image = document.getElementById("image");

let index = 0;
const images = ["0.jpg", "1.jpg", "2.jpg"];

function showImage(currIndex) {
  index = currIndex;
  if (index >= images.length) index = 0;
  if (index < 0) index = images.length - 1;
  image.src = images[index];
}

previous.addEventListener("click", () => showImage(index - 1));
next.addEventListener("click", () => showImage(index + 1));
