## Instructions
```
Write Number in Expanded Form - Part 2

This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(1.24); // should return '1 + 2/10 + 4/100'
expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
expandedForm(0.04); // should return '4/100'
```

## Sample Tests
```js
Test.assertEquals(expandedForm(1.24), '1 + 2/10 + 4/100');
Test.assertEquals(expandedForm(4.28), '4 + 2/10 + 8/100');
Test.assertEquals(expandedForm(7.304), '7 + 3/10 + 4/1000');
```

## Solution
```js
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
```

## Submission Tests
```
Time: 415ms Passed: 107 Failed: 0
Test Results:
 Basic Tests
 Basic Tests (3 of 3 Assertions)
Completed in 6ms
 Edge Cases
 Zeros (3 of 3 Assertions)
 Big Numbers
Completed in 1ms
 Random Tests
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
 Random Test
Completed in 35ms
You have passed all of the tests! :)

```
