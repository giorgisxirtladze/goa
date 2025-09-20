const box = document.getElementById("movingBox");

let topPos = 0;
let leftPos = 0;

const interval = setInterval(() => {
  topPos += 20;
  leftPos += 20;
  box.style.top = topPos + "px";
  box.style.left = leftPos + "px";

  if (topPos >= 200 && leftPos >= 200) {
    clearInterval(interval);
    box.style.width = "150px";
    box.style.height = "150px";
    box.style.backgroundColor = "orange";
  }
}, 1500);