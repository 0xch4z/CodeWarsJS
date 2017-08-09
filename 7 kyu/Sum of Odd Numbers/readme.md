## Instructions
```
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
```

## Sample Tests
```js
Test.assertEquals(rowSumOddNumbers(1), 1);
Test.assertEquals(rowSumOddNumbers(42), 74088);
```

## Solution
```js
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
```

## Submission Tests

```
Time: 488ms Passed: 50 Failed: 0
Test Results:
Test Passed: Value == 72511713
Test Passed: Value == 11697083
Test Passed: Value == 105154048
Test Passed: Value == 33386248
Test Passed: Value == 9261000
Test Passed: Value == 30664297
Test Passed: Value == 15438249
Test Passed: Value == 8489664
Test Passed: Value == 1906624
Test Passed: Value == 4251528
Test Passed: Value == 10218313
Test Passed: Value == 10648000
Test Passed: Value == 405224
Test Passed: Value == 96071912
Test Passed: Value == 12649337
Test Passed: Value == 238328
Test Passed: Value == 3112136
Test Passed: Value == 103823000
Test Passed: Value == 35937000
Test Passed: Value == 175616
Test Passed: Value == 31255875
Test Passed: Value == 82312875
Test Passed: Value == 3241792
Test Passed: Value == 8000000
Test Passed: Value == 3112136
Test Passed: Value == 22188041
Test Passed: Value == 42875000
Test Passed: Value == 116214272
Test Passed: Value == 80062991
Test Passed: Value == 512
Test Passed: Value == 941192
Test Passed: Value == 123505992
Test Passed: Value == 2000376
Test Passed: Value == 52734375
Test Passed: Value == 112678587
Test Passed: Value == 29503629
Test Passed: Value == 5832
Test Passed: Value == 49430863
Test Passed: Value == 82881856
Test Passed: Value == 1000
Test Passed: Value == 17173512
Test Passed: Value == 4492125
Test Passed: Value == 96702579
Test Passed: Value == 9393931
Test Passed: Value == 5832
Test Passed: Value == 5268024
Test Passed: Value == 4251528
Test Passed: Value == 42508549
Test Passed: Value == 24389000
Test Passed: Value == 36926037
You have passed all of the tests! :)
```
