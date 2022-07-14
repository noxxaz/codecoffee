// Define a function called makeGrid.
// makeGrid should take in an number n and some primitive value.
// makeGrid should create a grid (an array of arrays), with the dimensions of n by n.
// Return the grid filled with the given value.
//  const makeGrid = (n, value) => {
//   const outerArray = new Array(n);
//   const innerArray = [];


/*
 * Creates an n by n grid (array of arrays) filled with a repeated value in each cell.
 * @param {number} n the side length of the grid
 * @param {Object} value A value to populate the grid with
 * @returns {Array<Array<Object>>} an n by n grid
 */
  const makeGrid = (n, value) => {
    const outerArray = new Array(n);
    const innerArray = [];
   
    // build empty 2-dimensional array
    for (let i = 0; i < n; i++) {
      outerArray[i] = new Array();
      for (let j = 0; j < n; j++) {
        outerArray[i].push(value);
      }
    // // populate new 2-dimensional array with value
    // for (const array in outerArray) {
    //   for (const element in innerArray) {
    //     element = 'R';
    //   }
     }
  
    return outerArray;
};

console.log(makeGrid(6, 'A'));
console.log(makeGrid(4, '#'));