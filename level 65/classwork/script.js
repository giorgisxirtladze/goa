const box = document.getElementById("box");
let position = 0;

const moveBox = setInterval(() => {
  if (position >= 600) {
    clearInterval(moveBox);
  } else {
    position += 5;
    box.style.left = position + "px";
  }
}, 20);