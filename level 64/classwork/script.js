let original = document.getElementById("myDiv");

let cloneWithContent = original.cloneNode(true);
document.body.appendChild(cloneWithContent);

let cloneWithoutContent = original.cloneNode(false);
document.body.appendChild(cloneWithoutContent);

let newParagraph = document.createElement("p");
newParagraph.textContent = "ეს არის ახალი პარაგრაფი";
document.body.appendChild(newParagraph);

let newButton = document.createElement("button");
newButton.textContent = "დააჭირე";
document.body.appendChild(newButton);

let ul = document.createElement("ul");
let li = document.createElement("li");
li.textContent = "პირველი პუნქტი";
ul.appendChild(li);
document.body.appendChild(ul);

let div = document.createElement("div");
let img = document.createElement("img");
img.src = "image.jpg";
img.alt = "ახალი სურათი";
img.width = 100;
div.appendChild(img);
document.body.appendChild(div);

let container = document.getElementById("container");
let oldParagraph = container.querySelector("p");
let newHeading = document.createElement("h1");
newHeading.textContent = "ახალი სათაური";
container.replaceChild(newHeading, oldParagraph);

let imageContainer = document.getElementById("imageBox");
let oldImage = imageContainer.querySelector("img");
let newImage = document.createElement("img");
newImage.src = "new-image.jpg";
newImage.alt = "ახალი სურათი";
newImage.width = 100;
imageContainer.replaceChild(newImage, oldImage);
