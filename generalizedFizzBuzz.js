const generalizedFizzBuzz = (n, f, b) => {
  // create array
  const result = [];
  // loop to populate array
  for (let i = 1; i <= n; i++) {
  //	conditionals to see if number is divisible by x
    if (i % b === 0 && i % f === 0) {
        result.push("FizzBuzz");
      } else if (i % b === 0) {
        result.push("Buzz");
      } else if (i % f === 0) {
        result.push("Fizz");
      } else {
        result.push(i);
      }
  //		if it is diviible add string to array
  //
  //		if not add current number to array
  }
  return result;
    
  };