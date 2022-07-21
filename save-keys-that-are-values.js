/*-----------------------------------------------------------------------------
 *  "Code Coffee" coding challenge
 *  Challenge:  SAVE KEYS THAT ARE VALUES
 *  Solution Date: 2022/07/21
 *  Zach Brown, Code Chrysalis Immersive (CC27)
 *  
 *  Write a function called saveKeysThatAreValues that takes in an object whose 
 *  values are all strings. Return a new object that only contains the key/values 
 *  where the key exists as a value in the original object.
 *  Example:
 *    let obj = {
 *        A: "X",
 *        B: "Z",
 *        C: "Q",
 *        D: "C",
 *        E: "E",
 *        F: "B",
 *    };
 * 
 *  let result = saveKeysThatAreValues(obj);
 *  In this example, result should be { B: "Z", C: "Q", E: "E" } because the strings 
 *  B, C, and E appear as values in the original object.
 *---------------------------------------------------------------------------*/
const saveKeysThatAreValues = (obj) => {

  // possible solution 1:
  // declare return object
  // loop through all keys in obj
    // for each key, loop through all keys again
      // compare inner loop value to outer loop key
      // if a match is found, write key/value to new object
  // return object

  // possible solution 2:
  // make 2 arrays, 1 of keys, one of values
  // filter array 1 so that only elements also in array 2 remain
    // loop through array 1
      // make a new object
      // add each element as a key 
      // set the value to the value of obj.key
      
};


//--- TEST CASES --------------------------------------------------------------
// {"A":"X","B":"Z","C":"Q","D":"C","E":"E","F":"B"}
// {"5":"5"}
// {}
// {"5":"4"}
// {"aaa":"bbb","bbb":"aaa"}