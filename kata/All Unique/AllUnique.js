function hasUniqueChars(str){
  var chars = [];
  for (var i = 0; i < str.length; i++) {
    if (chars.includes(str[i])) {
      return false;
    } else {
      chars.push(str[i]);
    }
  }
  return true;
}
