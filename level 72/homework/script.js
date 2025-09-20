function createArrow(position, color, rotation) {
  const arrow = document.createElement("div");
  arrow.style.width = "60px";
  arrow.style.height = "60px";
  arrow.style.backgroundColor = color;
  arrow.style.clipPath = "polygon(0 0, 100% 50%, 0 100%)";
  arrow.style.position = "absolute";
  arrow.style.transform = `rotate(${rotation}deg)`;

  switch (position) {
    case "top":
      arrow.style.top = "20%";
      arrow.style.left = "50%";
      arrow.style.transform += " translateX(-50%)";
      break;
    case "right":
      arrow.style.right = "20%";
      arrow.style.top = "50%";
      arrow.style.transform += " translateY(-50%)";
      break;
    case "bottom":
      arrow.style.bottom = "20%";
      arrow.style.left = "50%";
      arrow.style.transform += " translateX(-50%)";
      break;
    case "left":
      arrow.style.left = "20%";
      arrow.style.top = "50%";
      arrow.style.transform += " translateY(-50%)";
      break;
  }

  document.body.appendChild(arrow);
}

createArrow("top", "yellow", 90);
createArrow("right", "pink", 180);
createArrow("bottom", "green", 270);
createArrow("left", "blue", 0);

const block = document.createElement("div");
block.style.width = "100px";
block.style.height = "40px";
block.style.backgroundColor = "green";
block.style.position = "absolute";
block.style.bottom = "15%";
block.style.left = "50%";
block.style.transform = "translateX(-50%)";
document.body.appendChild(block);

document.body.style.backgroundColor = "#111";
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.overflow = "hidden";
document.body.style.position = "relative";
