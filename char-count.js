function countLetters (string) {
  var chars = string.replace(/ /g, '').split('');
  var newObject = {};

  chars.forEach(function(letter) {
    if (!newObject[letter]) {
    newObject[letter] = 1; //creates key for letter
    } else {
    newObject[letter] += 1;
    }
  });
  console.log(newObject);
}

countLetters("lighthouse in the house");