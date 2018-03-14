function letterPositions (string) {
  var chars = string.replace(/ /g, '').split('');
  var numOfChars = {};

  chars.forEach(function(letter, index) {

    if (!numOfChars[letter]) {
    numOfChars[letter] = index; //creates key for letter
    } else {
    numOfChars[letter] += ' ' + index;
    }
  });
  console.log(numOfChars);
}

letterPositions("lighthouse in the house");