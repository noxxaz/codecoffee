const evenOddSplitter = (arr) => {
  // returns a tuple containing 2 arrays, 
  // one with all even numbers from arr and one with all odds
   
    // initialize output arrays
    const evenArray = [];
    const oddArray = [];
   
    // loop through input array
    for (const index of arr) {
      if (index % 2 !== 0) {
        oddArray.push(arr(index))
      } else {
        evenArray.push(arr(index))
      }
    }
    // return output arrays
    return [evenArray, oddArray];
  };
  