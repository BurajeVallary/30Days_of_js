
// Return the number of vowels in a string in javascript

function countVowels(str) {
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }
  const str = 'Hello,Vallary';
const vowelCount = countVowels(str);
console.log(vowelCount);

//method 2


function countVowel(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let z = 0; z < str.length; z++) {
    if (vowels.includes(str[z])) {
      count++;
    }
  }
  return count;
}
console.log(countVowel("hello world")); 
console.log(countVowel("welcome to javascript")); 