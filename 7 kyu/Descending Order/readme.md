## Instructions
```
Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221
```

## Sample Tests
```js
Test.assertEquals(descendingOrder(0), 0)
Test.assertEquals(descendingOrder(1), 1)
Test.assertEquals(descendingOrder(123456789), 987654321)
```

## Solution
```js
function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''));
}
```

## Explanation
Here, we must return a given integer with it's digits reversed. As with everytime you are manipulating digits, it's best to convert the integer to a string. Because a string is basically an array of characters (digits in this case), we can easily split the digits into an array and sort them with the sort method. Now with our array of ascending digits, we can call the reverse method to get the digits in decending order. Finally, we can join the string and return it as an integer.

## Submission Tests
```
Time: 309ms Passed: 6 Failed: 0
Test Results:
Test Passed: Value == 0
Test Passed: Value == 1
Test Passed: Value == 111
Test Passed: Value == 51
Test Passed: Value == 2110
Test Passed: Value == 987654321
You have passed all of the tests! :)
```
