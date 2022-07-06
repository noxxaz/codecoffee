// using the giftOptions object below, the christmasSong function generates an array 
// with each element containing one verse of the "12 Days of Christmas" song
// output should look like this:

//[ "On the first day of Christmas, my true love gave to me: a partridge in a pear tree."
//, "On the second day of Christmas, my true love gave to me: two turtle doves, and a partridge in a pear tree."
//, "On the third day of Christmas, my true love gave to me: three french hens, two turtle doves, and a partridge in a pear tree."
//, "On the fourth day of Christmas, my true love gave to me: four calling birds, three french hens, two turtle doves, and a partridge in a pear tree."
//, "On the fifth day of Christmas, my true love gave to me: five gold rings, four calling birds, three french hens, two turtle doves, and a partridge in a pear tree."
//, "On the sixth day of Christmas, my true love gave to me: six geese a-laying, five gold rings, four calling birds, three french hens, two turtle doves, and a partridge in a pear tree."
//, "On the seventh day of Christmas, my true love gave to me: seven swans a-swimming, six geese a-laying, five gold rings, four calling birds, three french hens, two turtle doves, and a partridge in a pear tree."
//, "On the eighth day of Christmas, my true love gave to me: eight maids a-milking, seven swans a-swimming, six geese a-laying, five gold rings, four calling birds, three french hens, two turtle doves, and a partridge in a pear tree."
//, "On the ninth day of Christmas, my true love gave to me: nine ladies dancing, eight maids a-milking, seven swans a-swimming, six geese a-laying, five gold rings, four calling birds, three french hens, two turtle doves, and a partridge in a pear tree."
//, "On the tenth day of Christmas, my true love gave to me: ten lords a-leaping, nine ladies dancing, eight maids a-milking, seven swans a-swimming, six geese a-laying, five gold rings, four calling birds, three french hens, two turtle doves, and a partridge in a pear tree."
//, "On the eleventh day of Christmas, my true love gave to me: eleven pipers piping, ten lords a-leaping, nine ladies dancing, eight maids a-milking, seven swans a-swimming, six geese a-laying, five gold rings, four calling birds, three french hens, two turtle doves, and a partridge in a pear tree."
//, "On the twelfth day of Christmas, my true love gave to me: twelve drummers drumming, eleven pipers piping, ten lords a-leaping, nine ladies dancing, eight maids a-milking, seven swans a-swimming, six geese a-laying, five gold rings, four calling birds, three french hens, two turtle doves, and a partridge in a pear tree."
// ]

const giftOptions = {
  1: ["first", "a partridge in a pear tree"],
  2: ["second", "two turtle doves"],
  3: ["third", "three french hens"],
  4: ["fourth", "four calling birds"],
  5: ["fifth", "five gold rings"],
  6: ["sixth", "six geese a-laying"],
  7: ["seventh", "seven swans a-swimming"],
  8: ["eighth", "eight maids a-milking"],
  9: ["ninth", "nine ladies dancing"],
  10: ["tenth", "ten lords a-leaping"],
  11: ["eleventh", "eleven pipers piping"],
  12: ["twelfth", "twelve drummers drumming"],
};

const christmasSong = () => {

  // initialize output array;
  const arrOutput = [];
  let dayOfChristmas = "";
  let verse = "";
  let todaysOption = [];
  
  // loop the 12 days of Christmas
  // for each day, add that day's gift plus all prior days' gifts
  for (let day = 1; day <= 12; day++) {
    todaysOption = giftOptions[day];
    dayOfChristmas = todaysOption[0];
    verse = "On the " + dayOfChristmas + " day of Christmas, my true love gave to me: ";
    if (day === 1) verse += todaysOption[1] + ".";
    for (i = day; i > 1; i--) {
      if (i === 2) {
        verse += giftOptions[i][1] + ", and " + giftOptions[1][1] + "."; // and a partridge in a pear tree.
      } else {
      verse += giftOptions[i][1] + ", " 
      }
    }
   	arrOutput.push(verse);
  }  
  return arrOutput;
};