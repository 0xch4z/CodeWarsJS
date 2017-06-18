## Instructions
```
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
```

## Sample Tests
```js
Test.assertEquals(expandedForm(12), '10 + 2');
Test.assertEquals(expandedForm(42), '40 + 2');
Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');
```

## Solution
```js
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
```

## Submission Tests
```
Time: 502ms Passed: 109 Failed: 0
Test Results:
 Basic Tests
 Basic Tests (4 of 4 Assertions)
Completed in 7ms
 Edge Cases
 Zeros (3 of 3 Assertions)
 Big Numbers (2 of 2 Assertions)
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
Completed in 41ms
You have passed all of the tests! :)
```
