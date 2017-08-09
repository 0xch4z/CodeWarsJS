function expandedForm(num) {
  const nums = num.toString().split('').map(($0) => parseInt($0));
  let str = `${nums[0]}${'0'.repeat(nums.length - 1)}`;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      str += ` + ${nums[i]}${'0'.repeat(nums.length - 1 - i)}`;
    }
  }
  return str;
}
