const fibonacci = function(n) {
  let current = 0;
  let after = 1;
  let placeholder = 0;
  if (n >= 0){
    for (i = 0; i < n; i++ ){
      placeholder = after;
      after = current + placeholder;
      current = placeholder;
    }
    return current;
  } else {
    return "OOPS";
  }
}

module.exports = fibonacci
