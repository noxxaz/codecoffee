// Write a function called minMaxNumScraper 
// that takes in a string containing numbers separated by spacess. 
// Return a tuple that has the lowest number and highest number from the list.
// Examples:
//
// minMaxNumScraper("1 2 3 4 5") should return [1, 5]
// minMaxNumScraper("32 5 11 9 27 3 18") should return [3, 32]

const minMaxNumScraper = (strOfNums) => {
  const retVal = []; //tuple
  
  // split input string into array of numbers
  const nums = strOfNums
    .split(' ')
    .map(numAsString => Number(numAsString));

  // grab min/max from nums (`...nums` passes array as individual args)
  retVal.push(Math.min(...nums));
  retVal.push(Math.max(...nums));

  console.log(retVal);
  return retVal;
};

minMaxNumScraper("1 2 3 4 5");
minMaxNumScraper("32 5 11 9 27 3 18");