const caesar = function(string , key) {
  return string
          .split("").map(char => shiftChar(char, key)).join("");
  };

const shiftChar = (char, key) => {
  const character = char.charCodeAt();

  if (character >= 65 && character <= 90){
      return String.fromCharCode((character + key + 26 - 65)% 26 + 65);
    } else if (character >= 97 && character <= 122){
      return String.fromCharCode((character + key + 26 - 97)% 26 + 97);
    } else {
      return String.fromCharCode(character);
    }
}

module.exports = caesar
