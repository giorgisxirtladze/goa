const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");

function showImage(index) {
  sliderImage.style.opacity = 0;
  setTimeout(() => {
    sliderImage.src = images[index];
    sliderImage.style.opacity = 1;
  }, 200);
}

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});
