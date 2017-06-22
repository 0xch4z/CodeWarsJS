## Instructions
```
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
```

## Sample Tests
```js
function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  Test.assertEquals(findOdd(a), n);
}
Test.describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});

```

## Solution
```js
function findOdd(A) {
  var counts = {};
  A.forEach(c => (counts[c]) ? (counts[c]++) : (counts[c] = 1));
  for (var c in counts) {
    if (counts[c] % 2 === 1) {
      return parseInt(c);
    }
  }
  return 0;
}

```

## Submission Test
```
Time: 359ms Passed: 46 Failed: 0
Test Results:
 Example tests
 Log
A = [ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]
n =  5
Test Passed: Value == 5
 Log
A =  [ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]
n =  -1
Test Passed: Value == -1
 Log
A =  [ 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ]
n =  5
Test Passed: Value == 5
 Log
A =  [ 10 ]
n =  10
Test Passed: Value == 10
 Log
A =  [ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ]
n =  10
Test Passed: Value == 10
 Log
A =  [ 5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10 ]
n =  1
Test Passed: Value == 1
Completed in 8ms
 Random tests
Test Passed: Value == 201
Test Passed: Value == 496
Test Passed: Value == 494
Test Passed: Value == 490
Test Passed: Value == 270
Test Passed: Value == 549
Test Passed: Value == 35
Test Passed: Value == 993
Test Passed: Value == 41
Test Passed: Value == 35
Test Passed: Value == 863
Test Passed: Value == 286
Test Passed: Value == 569
Test Passed: Value == 3
Test Passed: Value == 655
Test Passed: Value == 447
Test Passed: Value == 597
Test Passed: Value == 333
Test Passed: Value == 882
Test Passed: Value == 237
Test Passed: Value == 661
Test Passed: Value == 918
Test Passed: Value == 620
Test Passed: Value == 113
Test Passed: Value == 820
Test Passed: Value == 769
Test Passed: Value == 665
Test Passed: Value == 70
Test Passed: Value == 925
Test Passed: Value == 146
Test Passed: Value == 814
Test Passed: Value == 357
Test Passed: Value == 246
Test Passed: Value == 448
Test Passed: Value == 529
Test Passed: Value == 173
Test Passed: Value == 105
Test Passed: Value == 404
Test Passed: Value == 8
Test Passed: Value == 702
Completed in 10ms
You have passed all of the tests! :)

```
