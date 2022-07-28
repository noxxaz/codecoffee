/*-----------------------------------------------------------------------------
 *  "Code Coffee" coding challenge
 *  Challenge:  INVERSE OBJECT FILTER
 *  Solution Date: 2022/07/28 Code: 
 *  Zach Brown, Code Chrysalis Immersive (CC27)
 *  
 * Write a function called inverseObjectFilter that takes in an object and an 
 * array of strings. The values in the object are strings. Create a copy of this 
 * object that only contains the keys/values if the value is NOT present in the array.
 *
 * Examples:
 * 
  let obj = {
   a: "apple",
   b: "banana",
   c: "canteloupe",
   d: "durian"
  }; 
  let newObj = inverseObjectFilter(obj, ["banana", "durian"]);
 * In this code, newObj should be the object { a: "apple", c: "canteloupe" } 
 * because apple and canteloupe where NOT present in the input array.

  let obj = {
    a: "x",
    b: "y",
    x: "a"
  };
  let newObj = inverseObjectFilter(obj, ["x"]);
 * In this code, newObj should be the object { b: "y", x: "a" }.
 * a: "x" was NOT included because "x" was in the array. However, 
 * x: "a" WAS included because "a" was not in the array. 
 * The exclusion list only applies to the value, not the key.
 *---------------------------------------------------------------------------*/
  const inverseObjectFilter = (obj, valueExclusionList) => {
    const newObj = {};

    // loop through input object values
    const values = Object.values(obj);
    const keys = Object.keys(obj);
    for (let i = 0; i < values.length; i++) {
      if (!valueExclusionList.includes(values[i])) 
        newObj[keys[i]] = values[i];
    }
    return newObj;
    // if ! value exists in exclusion list
    // write key/value to new object



    // or

    // deep copy object
    // loop through values array of object
    // delete key/value where value matches exclusion list



    // for (const item of valueExclusionList) {

    //   console.log(obj, " ",item);
    //   if (obj[item]) {
    //     newObj[obj[item].key] = obj[item].value;
    //   }
    // }
    // return newObj;


  };
//--- TEST CASES --------------------------------------------------------------

let obj = {
  a: "apple",
  b: "banana",
  c: "canteloupe",
  d: "durian"
 }; 
 let newObj = inverseObjectFilter(obj, ["banana", "durian"]);
 console.log(newObj);

 let newObj2 = inverseObjectFilter(obj, ['banana', 'durian', 'apple', 'canteloupe']);
 console.log(newObj2); // {}

 let newObj3 = inverseObjectFilter(obj, []);
 console.log(newObj3); 