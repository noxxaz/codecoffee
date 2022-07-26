/*-----------------------------------------------------------------------------
 *  "Code Coffee" coding challenge
 *  Challenge:  REVERSE CLUMPS
 *  Solution Date: 2022/07/26 Code: 0D3A44BE
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

  const arrOutput = [];
  const arrStack = [];
  let itemCounter = 0;
  
  //loop through all items in arr
  for(let i = 0; i < arr.length; i++) {
    itemCounter++;
    arrStack.push(arr[i]);
    // when counter reaches n, push items from the stack into the output array
    if (itemCounter === n) {
      for(let j = arrStack.length; j > 0; j--) {
        arrOutput.push(arrStack.pop());
      }
      itemCounter = 0;
    }
  }
  return arrOutput;




  // for each item in array
  // increment a counter
  // add item to stack array
  // if counter = n
  //   loop backwards through stack and write to output array
  


};

//--- TEST CASES --------------------------------------------------------------
console.log(reverseClumps([1, 2, 3, 4, 5, 6], 3)); // [3, 2, 1, 6, 5, 4] 
console.log(reverseClumps(['a', 'b', 'c', 'd'], 2)); // ["b", "a", "d", "c"]
console.log(reverseClumps(['a', 'b', 'c', 'd'], 4)); // ["d", "c", "b", "a"]
console.log(reverseClumps([13, 28, 93, 57, 98, 27, 58, 91, 55, 74, 15, 32, 65, 28], 7)); // [58, 27, 98, 57, 93, 28, 13, 28, 65, 32, 15, 74, 55, 91] 

