function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2; 
    case '-':
      return num1 - num2; 
    case '*':
      return num1 * num2; 
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'; 
    case '%':
      return num2 !== 0 ? num1 % num2 : 'Cannot modulo by zero'; 
    default:
      return 'Invalid operator'; 
  }
}

function checkCharacter(char) {
  switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return 'Vowel'; 
    default:
      return /^[a-z]$/i.test(char) ? 'Consonant' : 'Not a letter'; 
  }
}

function getSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return 'Winter'; 
    case 3:
    case 4:
    case 5:
      return 'Spring'; 
    case 6:
    case 7:
    case 8:
      return 'Summer';
    case 9:
    case 10:
    case 11:
      return 'Autumn'; 
    default:
      return 'Invalid month';
  }
}

function getFruitPrice(fruit) {
  switch (fruit.toLowerCase()) {
    case 'apple':
      return 'Price: $1.00';
    case 'banana':
      return 'Price: $0.50';
    case 'mango':
      return 'Price: $1.50';
    default:
      return 'Fruit not available'; 
  }
}

console.log(calculate(10, 5, '+'))
console.log(checkCharacter('e'));   
console.log(getSeason(9));  
console.log(getFruitPrice('banana')); 
