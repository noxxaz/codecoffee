// String Replicator
// Write a function called stringReplicator that takes in a string and a number 
// and returns that string repeated that many times.

const stringReplicator = (str, n) => {
  let outputStr = "";
  for (let i = 0; i < n; i++) {
    outputStr += str;
  }
  return outputStr;
};

console.log(stringReplicator("a", 6));  // should return "aaaaaa"
console.log(stringReplicator("X", 2));  // should return "XX"
console.log(stringReplicator("ha", 5)); // should return "hahahaha"
console.log(stringReplicator("", 4));   // should return ""