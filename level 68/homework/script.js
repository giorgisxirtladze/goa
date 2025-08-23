const contentDiv = document.getElementById("content");
contentDiv.removeChild(contentDiv.firstElementChild);

const myList = document.getElementById("myList");
myList.removeChild(myList.lastElementChild);

const textContainer = document.getElementById("textContainer");
const newPara = document.createElement("p");
newPara.textContent = "New paragraph replaces the old one.";
textContainer.replaceChild(newPara, textContainer.querySelector("p"));

const btnContainer = document.getElementById("btnContainer");
const newSpan = document.createElement("span");
newSpan.textContent = "This is now a span.";
btnContainer.replaceChild(newSpan, btnContainer.querySelector("button"));

const singleItemList = document.getElementById("singleItemList");
const newLi = document.createElement("li");
newLi.textContent = "This is the new item.";
singleItemList.replaceChild(newLi, singleItemList.querySelector("li"));

const headerContainer = document.getElementById("headerContainer");
const newH1 = document.createElement("h1");
newH1.textContent = "This is a new H1 heading.";
headerContainer.replaceChild(newH1, headerContainer.querySelector("h2"));
