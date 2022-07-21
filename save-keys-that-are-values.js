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
  
};


//--- TEST CASES --------------------------------------------------------------
// {"A":"X","B":"Z","C":"Q","D":"C","E":"E","F":"B"}
// {"5":"5"}
// {}
// {"5":"4"}
// {"aaa":"bbb","bbb":"aaa"}