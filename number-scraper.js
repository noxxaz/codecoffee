// Number Scraper
// Write a function called numScraper that takes in a string that contains some integers among other characters.
// Return an array of integers that are the numbers from the list in the same order as they appear.
// Examples: 
// numScraper("12 34 56, 78, and 9") should return [12, 34, 56, 78, 9]
// numScraper("I ate 15 bananas and got 1 tummyache") should return [15, 1]

const numScraper = (str) => {

  console.log("input string: ", str)

  // split input string into array of numbers
  const nums = str
    .replace(/\D/g, ' ') // replace all non-numeric chars with spaces
    .split(' ')
    .map(element => parseInt(element))
    .filter(element => !isNaN(element));

  console.log(nums);
  return nums;

};

numScraper("12 34 56, 78, and 9") // [12, 34, 56, 78, 9]
numScraper("I ate 15 bananas and got 1 tummyache") // [15, 1]
numScraper("Y0L0!!!!1") // [0, 0, 1]