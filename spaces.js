

//Remove the spaces found in a string

function removeSpaces(str) {
    return str.replace(/\s/g, '');
  }

  const str = 'Good,   morning  ,beautiful';
const newStr = removeSpaces(str);
console.log(newStr);
