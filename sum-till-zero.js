/*-----------------------------------------------------------------------------
 *  "Code Coffee" coding challenge
 *  Challenge:  SUM TILL ZERO
 *  Solution Date: 2022/07/28 Code: 29678DE9
 *  Zach Brown, Code Chrysalis Immersive (CC27)
 *  
 *  Write a function called tillZero that takes in an array of numbers and returns 
 *  the sum of the numbers up until the first 0 value.
 * 
 *  Example:
 *  tillZero([1, 2, 3, 0, 4, 5]); // return 6 because 1 + 2 + 3 = 6
 *---------------------------------------------------------------------------*/
const tillZero = (nums) => {
  let sum = 0;
  for (const num of nums) {
    if (num === 0) return sum;
  sum += num;
  }
};

//--- TEST CASES --------------------------------------------------------------
console.log(tillZero([1, 2, 3, 0, 4, 5])); // 6
console.log(tillZero([0, 1, 2])); // 0
console.log(tillZero([-4, 0, 9])); // -4
console.log(tillZero([5, 6, 0, 1, 2, 0, 3, 4])); // 11