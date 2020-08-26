const palindromes = function(string) {
    string = string.toLocaleLowerCase();
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g,"")
    return Array.from(string).toString() === Array.from(string).reverse().toString()
  }

module.exports = palindromes
