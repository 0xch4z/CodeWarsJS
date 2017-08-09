## Instructions
```
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5"); // return "5 1"

highAndLow("1 2 -3 4 5"); // return "5 -3"

highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
```

## Sample Tests
```js
Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
Test.assertEquals(highAndLow("1 -1"), "1 -1");
Test.assertEquals(highAndLow("1 1"), "1 1");
```

## Solution
```js
function highAndLow(numbers){
  const nums = numbers.split(' ');
  return (Math.max(...nums) + ' ' + Math.min(...nums))
}
```

## Explanation
To determine the max and min numbers in a given array of Int32s, we must iterate over each and return the Math.max() and Math.min(). Thanks to the new spread operator, we don't have to go through the trouble of using the reduce method as a way to step through the array. We don't have to explicitly return the min or max either. We just simply use the max/min methods on the array accordingly and return our results.

## Submission Tests

```
Time: 332ms Passed: 18 Failed: 0
Test Results:
Test Passed: Value == '542 -214'
Test Passed: Value == '1 -1'
Test Passed: Value == '1 1'
Test Passed: Value == '-1 -1'
Test Passed: Value == '1 -1'
Test Passed: Value == '1 0'
Test Passed: Value == '0 -1'
Test Passed: Value == '42 42'
 Random tests
Test Passed: Value == '5988 2970'
Test Passed: Value == '-1405 -4409'
Test Passed: Value == '7789 4775'
Test Passed: Value == '5705 2608'
Test Passed: Value == '-1888 -4981'
Test Passed: Value == '-65 -3102'
Test Passed: Value == '-201 -3222'
Test Passed: Value == '3040 -9'
Test Passed: Value == '6272 3192'
Test Passed: Value == '3393 380'
Completed in 4ms
You have passed all of the tests! :)
```
