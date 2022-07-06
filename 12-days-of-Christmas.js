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
  // for each day, add that day plus all prior days
  for (let day = 1; day <= 12; day++) {
    todaysOption = giftOptions[day];
    dayOfChristmas = todaysOption[0];
    verse = 'On the ' + dayOfChristmas + ' day of Christmas, my true love gave to me: ';
    if (day === 1) verse += todaysOption[1] + '.';
    for (i = day; i > 1; i--) {
      if (i === 2) {
        verse += giftOptions[i][1] + ', and ' + giftOptions[1][1] + '.'; // partridge in a pear tree
      } else {
      verse += giftOptions[i][1] + ", " 
      }
    }
   	arrOutput.push(verse);
  }  
  return arrOutput;
};