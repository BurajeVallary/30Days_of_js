
// Return a Boolean if a number is divisible by 10

function divisibleByTen(num) {
    return num % 10 === 0;
  }
  console.log(divisibleByTen(250)); 
  console.log(divisibleByTen(125))


//    Create a function that filters out negative numbers

function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
  }

const numbers = [1,2,3,-8, -10, -8, 10, 16];
const filteredNumbers = filterNegativeNumbers(numbers);
console.log(filteredNumbers);