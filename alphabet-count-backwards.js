// Alphabet Count Backwards
// Write a function called alphaCountBack that takes in a string that is a single letter. 
// Return a string that is all the letters of the alphabet in a sequence counting backwards 
// to the letter a. These should be uppercase if the original letter is uppercase, 
// lowercase if it is lowercase.
// Examples:
// alphaCountBack("e") should return "edcba"
// alphaCountBack("J") should return "JIHGFEDCBA"
// test inputs: F, A, Z, a, c, z

const alphaCountBack = (char) => {
  // Array of all uppercase letters
  const uCaseAlpha = 
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // sort in reverse
  uCaseAlpha.reverse();
  // Make array of all lowercase letters
  const lCaseAlpha = uCaseAlpha.map(el => el.toLowerCase());

  let workingArray = [];
  
   if(uCaseAlpha.includes(char)) {
     workingArray = uCaseAlpha.slice(uCaseAlpha.indexOf(char));
   } else 
    if (lCaseAlpha.includes(char)) {
      workingArray = lCaseAlpha.slice(lCaseAlpha.indexOf(char));
    } else {
      console.error(`❌ Unexpected input: ${char} ❌`);
    }

  return workingArray.join('');    
}

console.log(alphaCountBack("7")); // "edcba"
console.log(alphaCountBack("J")); // "JIHGFEDCBA"


