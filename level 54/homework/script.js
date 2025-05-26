const hobby = prompt("რა არის შენი საყვარელი ჰობი?");
alert("შენი ჰობია: " + hobby);

const firstName = prompt("შენი სახელი?");
const lastName = prompt("შენი გვარი?");
const fullName = firstName + " " + lastName;
alert("სრული სახელი: " + fullName);

const userMessage = prompt("მოგვწერე რაიმე შეტყობინება:");
document.getElementById("message").textContent = userMessage;

const emoji = prompt("რომელია შენი საყვარელი ემოჯი?");
alert("შენი ემოჯი: " + emoji + " - მადლობა რომ გაგვიზიარე!");

const newTitle = prompt("შეიყვანე სიტყვა, რომლითაც გსურს გვერდის სათაურის შეცვლა:");
document.title = newTitle;
