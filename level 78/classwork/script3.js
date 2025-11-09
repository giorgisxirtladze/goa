let word = prompt("ჩაწერე სიტყვა:");
let boolInput = prompt("ჩაწერე True ან False:");

let flag = boolInput.toLowerCase() === "true";

let result = flag ? word.repeat(10) : word.repeat(5);

console.log("result:", result);