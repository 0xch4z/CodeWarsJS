function highAndLow(numbers){
  const nums = numbers.split(' ');
  return (Math.max(...nums) + ' ' + Math.min(...nums))
}
