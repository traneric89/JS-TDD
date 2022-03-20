const reverseString = (string) => {
  let reversedString = "";
  for (let i = string.length; i >= 0; i--) {
    reversedString = reversedString.concat(string.charAt(i));
  }
  return reversedString;
};

module.exports = reverseString;
