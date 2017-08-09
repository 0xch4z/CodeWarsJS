## Instructions
```
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
```

## Sample Tests
```js
Test.assertEquals(squareDigits(9119), 811181);
```

## Solution
```js
function squareDigits(num){
  const digits = num.toString(10).split('')
  return = parseInt(digits.map((n) => Math.pow(parseInt(n), 2)).join(''));
}
```

## Explanation
In this kata, we must square every digit of a given number and output the digits concatenated and parsed as an integer. Since we are going to be manipulating the characters individually, it makes since to split the number into an array of digits, though we won't be parsing the digits as integers immediately, as this would require two map calls; that would be unecessarily computationally expensive. Instead, we can call map once on our array and return an array of all the digits squared. Then, we can join the result into a string, parse it as a single integer and return it.

## Submission Tests
```
Test Results:
Test Passed: Value == 9414
Test Passed: Value == 4114
Test Passed: Value == 1449
You have passed all of the tests! :)
```
