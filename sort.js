

//Sort an array from lowest to highest

var number=[40,10,60,80];
number = number.sort();
console.log(number)


//Create a function that reverses an array

function reverse(arr){
    let reverse = [];
    for (let b = arr.length -1;b>=0;b--){
        reverse.push(arr[b]);
    }
    return reverse
}

let array=["Good","morning",12,0.3,true,false]
let reversedArray=reverse(array);
console.log(reversedArray)


let num=[29,23,45,5,89,97]
function reverses (num){
let rev=num.reverse();
console.log(rev)
}
reverses(num)