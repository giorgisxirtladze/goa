let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
let removed = fruits.splice(2, 1); 
console.log("Removed fruit:", removed[0]);
console.log("Updated array:", fruits);

let colors = ["Red", "Blue", "Green", "Yellow"];
colors.splice(1, 0, "Purple");
console.log("Updated array:", colors);
