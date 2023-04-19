
// Return the number of vowels in a string in javascript

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  const str = 'Hello,Vallary';
const vowelCount = countVowels(str);
console.log(vowelCount);