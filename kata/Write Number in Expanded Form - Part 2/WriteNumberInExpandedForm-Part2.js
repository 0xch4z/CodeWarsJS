function expandedForm(num) {
  const nums = num.toString().split('').map(($0) => parseInt($0));
  const decPlace = num.toString().split('').indexOf('.');
  let str = '';
  for (let i = 0; i < nums.length; i++) {
    if (i === decPlace || nums[i] === 0) {
      continue;
    } else if (i < decPlace) {
      str += (str === '') ? `${nums[i]}${'0'.repeat(decPlace - i - 1)}` :
      ` + ${nums[i]}${'0'.repeat(decPlace - i - 1)}`;
    } else if (i > decPlace) {
      str += (str === '') ? `${nums[i]}/1${'0'.repeat(i - decPlace)}` :
      ` + ${nums[i]}/1${'0'.repeat(i - decPlace)}`;
    }
  }
  return str;
}
