/*-----------------------------------------------------------------------------
 *  "Code Coffee" coding challenge
 *  Challenge:  SWAP ADJACENT PAIRS
 *  Solution Date: 2022/07/15
 *  Zach Brown, Code Chrysalis Immersive (CC27)
 *  
 *  Write a function called swapAdjacentPairs that takes in an array and  
 *  returns a new array that has all the elements of the old array, 
 *  except each successive pair of elements is swapped. 
 *  That is, the first and second elements have swapped order. 
 *  The third and fourth elements have swapped order, etc.
 *  Assume the input array will always have an even number of elements.
 *  
 *  Example:
 *  swapAdjacentPairs([1, 2, 3, 4, 5, 6]); // returns [2, 1, 4, 3, 6, 5]
 *---------------------------------------------------------------------------*/
const swapAdjacentPairs = (arr) => {
  const newArray = [];
  let evenIndex, oddIndex;
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenIndex = arr[i];
    } else {
      oddIndex = arr[i];
      newArray.push(oddIndex, evenIndex);
    }
  }
  return newArray; 
};

//--- TEST CASES --------------------------------------------------------------
console.log(swapAdjacentPairs([1,2,3,4]), "should equal [2, 1, 4, 3]"); 
console.log(swapAdjacentPairs([1,1]), "should equal [1, 1]");
console.log(swapAdjacentPairs([]), "should equal []");
console.log(swapAdjacentPairs([5,4,5,4,5,4]), "should equal [4, 5, 4, 5, 4, 5]"); 
console.log(swapAdjacentPairs(["A","B","C","foo"]), "should equal ['B', 'A', 'foo', 'C']");