/*-----------------------------------------------------------------------------
 *  "Code Coffee" coding challenge
 *  Challenge:  SAVE KEYS THAT ARE VALUES
 *  Solution Date: 2022/07/21 Code: 400C2233
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

  const returnObj = {};
  const arrKeys = Object.keys(obj);
  const arrValues = Object.values(obj);
  const filteredKeys = arrKeys.filter((key) => arrValues.includes(key))
  for (const key of filteredKeys) {
    returnObj[key] = obj[key];
  }
  return returnObj;
};


//--- TEST CASES --------------------------------------------------------------
let obj = {"A":"X","B":"Z","C":"Q","D":"C","E":"E","F":"B"};
console.log(saveKeysThatAreValues(obj));

obj = {"5":"5"};
console.log(saveKeysThatAreValues(obj));

obj = {};
console.log(saveKeysThatAreValues(obj));

obj = {"5":"4"}
console.log(saveKeysThatAreValues(obj));

obj = {"aaa":"bbb","bbb":"aaa"};
console.log(saveKeysThatAreValues(obj));
