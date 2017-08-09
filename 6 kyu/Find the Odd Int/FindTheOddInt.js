function findOdd(A) {
  var counts = {};
  A.forEach(c => (counts[c]) ? (counts[c]++) : (counts[c] = 1));
  for (var c in counts) {
    if (counts[c] % 2 === 1) {
      return parseInt(c);
    }
  }
  return 0;
}
