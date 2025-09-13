const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(el => console.log(el));
arr.forEach((el, idx) => console.log(`Index ${idx}: ${el}`));
arr.forEach(el => { if (el % 2 === 0) console.log(`Even: ${el}`); });
arr.forEach(el => { if (el % 2 !== 0) console.log(`Odd: ${el}`); });
const sum = arr.reduce((acc, el) => acc + el, 0);
console.log(`Sum: ${sum}`);

document.querySelectorAll("p").forEach(p => console.log(p.textContent));
document.querySelectorAll("h1").forEach(h1 => h1.style.color = "blue");
document.querySelectorAll("li").forEach(li => console.log(li.innerText));
document.querySelectorAll("a").forEach(a => console.log(a.href));
document.querySelectorAll("img").forEach(img => img.alt = "Image");

document.querySelectorAll(".item").forEach(el => console.log(el.textContent));
document.querySelectorAll(".highlight").forEach(el => el.style.backgroundColor = "yellow");
document.querySelectorAll(".title").forEach(el => el.style.fontWeight = "bold");
document.querySelectorAll(".hidden").forEach(el => el.style.display = "none");
document.querySelectorAll(".card").forEach(el => el.style.border = "2px solid black");
