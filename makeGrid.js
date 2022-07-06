/*
 * Creates an n by n grid (array of arrays) filled with a repeated value in each cell.
 * @param {number} n the side length of the grid
 * @param {Object} value A value to populate the grid with
 * @returns {Array<Array<Object>>} an n by n grid
 */
 const makeGrid = (n, value) => {
  const outerArray = [];
  const innerArray = [];
 
  // build inner array (once)
  for (let i = 0; i < n; i++) {
  	innerArray.push(value);
  }
  // push inner array into outer array n times
  for (let j = 0; j < n; j++) {
    outerArray.push(innerArray);
  }
  return outerArray;
};