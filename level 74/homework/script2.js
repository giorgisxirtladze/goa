function isEvenOrOdd(num) {
  return (num % 2 === 0) ? 'Even' : 'Odd';
}

function numberType(num) {
  return (num > 0) ? 'Positive' : (num < 0) ? 'Negative' : 'Zero';
}

function greaterNumber(a, b) {
  return (a > b) ? a : b;
}

function canVote(age) {
  return (age >= 18) ? 'Eligible to vote' : 'Too young to vote';
}

console.log(isEvenOrOdd(4));       
console.log(numberType(-1));        
console.log(greaterNumber(7, 3));  
console.log(canVote(16));           
