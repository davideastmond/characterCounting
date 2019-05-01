let countCharacters = function(str) {
  /* Input a string and return an object which shows each character and the count
  As a key value pair */

  // First strip of spaces
  str = str.split(" ").join('');

  // Create an empty object to return
  let retObj = {}; 

  for (let i = 0; i < str.length; i++) {
    if (!(retObj.hasOwnProperty(str[i]))) {
      retObj[str[i]] = 1;
    } else {
      retObj[str[i]] += 1;
    }
  }
  return retObj;
};
console.log(countCharacters("lighthouse in the house"));