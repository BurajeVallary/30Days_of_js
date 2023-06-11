

//  Calculate the sum of numbers within an array



let sum =0;
 for (const value of arr){
    sum += value;
 }
 const arr =[10,20,40,,50,30,-10];
 console.log(sum);



// How to calculate the sum of digits in a number

// function sumDigits(number) {
//    let sumy =0
//    let numstring=number.tostring()
//    for (let i = 0; i < number.length; i++) {
//      sumy +=parseInt (numstring[1])
      
//    }
  


// }
// let number = 25
// sumDigits(number)
// console.log(sumDigits(number))

function sumOfDigits(number) {
   let sum = 0;
   while (number > 0) {
     sum += number % 10;
     number = Math.floor(number / 10);
   }
   return sum;
 }
 console.log(sumOfDigits(23)); 
console.log(sumOfDigits(49)); 