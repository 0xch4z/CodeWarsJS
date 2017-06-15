function squareDigits(num) {
  const digits = num.toString(10).split('')
  return = parseInt(digits.map((n) => Math.pow(parseInt(n), 2)).join(''));
}
