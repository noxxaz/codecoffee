/*-----------------------------------------------------------------------------
 *  "Code Coffee" coding challenge
 *  Challenge:  REVERSE CLUMPS
 *  Solution Date: 2022/07/26 Code: 
 *  Zach Brown, Code Chrysalis Immersive (CC27)
 *  
 * Write a function called reverseClumps that takes in an array arr and 
 * an integer n and reverses each sequence of n items in the array.
 * Examples:
 * reverseClumps([1, 2, 3, 4, 5, 6], 3) should return [3, 2, 1, 6, 5, 4]
 * reverseClumps(["eggs", "bacon", "toast", "oatmeal", "cereal", "grits"], 2) 
 *      should return ["bacon", "eggs", "oatmeal", "toast", "grits", "cereal"].
 * The number of elements in the input array will always be a multiple of n.
 *---------------------------------------------------------------------------*/
const reverseClumps = (arr, n) => {

};

//--- TEST CASES --------------------------------------------------------------
console.log(reverseClumps([1, 2, 3, 4, 5, 6], 3)); // [3, 2, 1, 6, 5, 4] 
console.log(reverseClumps(['a', 'b', 'c', 'd'], 2)); // ["b", "a", "d", "c"]
console.log(reverseClumps(['a', 'b', 'c', 'd'], 4)); // ["d", "c", "b", "a"]
console.log(reverseClumps([13, 28, 93, 57, 98, 27, 58, 91, 55, 74, 15, 32, 65, 28], 7)); // [58, 27, 98, 57, 93, 28, 13, 28, 65, 32, 15, 74, 55, 91] 

