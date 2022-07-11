const christmasTree = (str, size) => {
  // returns a string which, when printed, displays a Christmas tree
  // of `size` rows of `str` characters repeated in a triangle shape
  let outputStr = '';
  const space = ' ';
  const newline = '\n';

  // validate inputs
  if (str.length > 1 || str.length < 1) return "";
  if (size === NaN) return "";


  console.log("inputs: " + str + ", " + size);

  // using a loop, build each row of the tree
  for (let i = 1; i <= size; i++) {

    // write the needed number of spaces
    let numSpaces = size - i;
    outputStr += space.repeat(numSpaces);
    // write the needed number of `str` chars
    for (let j = 0; j < i; j++) {
      outputStr += str + space;
    }
    // remove the trailing space and add a line break at the end of each line
    outputStr = outputStr.slice(0, -1);
    outputStr += newline;
  }
  // remove final newline character
  outputStr = outputStr.slice(0, -1);
  return outputStr;
};

console.log(christmasTree('#', 4));