/*-----------------------------------------------------------------------------
 *  "Code Coffee" coding challenge
 *  Challenge:  INVERSE OBJECT FILTER
 *  Solution Date: 2022/07/28 Code: E52F575B
 *  Zach Brown, Code Chrysalis Immersive (CC27)
 *  
 * Write a function called inverseObjectFilter that takes in an object and an 
 * array of strings. The values in the object are strings. Create a copy of this 
 * object that only contains the keys/values if the value is NOT present in the array.
 *---------------------------------------------------------------------------*/
  const inverseObjectFilter = (obj, valueExclusionList) => {
    const newObj = {};
    // loop through input object values
    for (const item in obj) {
      // if value is not in exclusion list
      if (!valueExclusionList.includes(obj[item]))
        // write key/value pair to new object
        newObj[item] = obj[item];
    }
    return newObj;
  };

//--- TEST CASES --------------------------------------------------------------
let obj = {
  a: "apple",
  b: "banana",
  c: "canteloupe",
  d: "durian"
 }; 
 let newObj = inverseObjectFilter(obj, ["banana", "durian"]);
 console.log(newObj); // { a: "apple", c: "canteloupe" }

 let newObj2 = inverseObjectFilter(obj, ['banana', 'durian', 'apple', 'canteloupe']);
 console.log(newObj2); // {}

 let newObj3 = inverseObjectFilter(obj, []);
 console.log(newObj3); //{ a: "apple", b: "banana", c: "canteloupe", d: "durian" }