/*-----------------------------------------------------------------------------
 *  "Code Coffee" coding challenge
 *  Challenge:  NUMBER SCRAPER
 *  Solution Date: 2022/07/12
 *  Zach Brown, Code Chrysalis Immersive (CC27)
 *  
 *  Write a function called numScraper that takes in a string that contains 
 *  some integers among other characters and return an array of integers that 
 *  are the numbers from the list in the same order as they appear.
 * 
 *  Example:
 *  numScraper("12 34 56, 78, and 9") should return [12, 34, 56, 78, 9]
 *  numScraper("I ate 15 bananas and got 1 tummyache") should return [15, 1]
 *---------------------------------------------------------------------------*/

const numScraper = (str) => {
  // split input string into array of numbers
  const nums = str
    .replace(/\D/g, ' ') // replace all non-numeric chars with spaces
    .split(' ')
    .map(element => parseInt(element))
    .filter(element => !isNaN(element));

  return nums;
};

//--- TEST CASES --------------------------------------------------------------
console.log(numScraper("12 34 56, 78, and 9"), "should equal", [12, 34, 56, 78, 9]);
console.log(numScraper("I ate 15 bananas and got 1 tummyache"), "should equal", [15, 1]);
console.log(numScraper("Y0L0!!!!1"), "should equal", [0, 0, 1]);