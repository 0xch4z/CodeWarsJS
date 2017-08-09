## Instructions
```
Convert number to reversed array of digits

Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

Example:

348597 => [7,9,5,8,4,3]
```


## Sample Tests
```js
Test.assertSimilar(digitize(35231),[1,3,2,5,3]);
```

## Solution
```js
function digitize(n) {
  return n.toString().split('').map(($0) => parseInt($0)).reverse();
}
```

## Submission Tests
```
Time: 326ms Passed: 42 Failed: 0
Test Results:
Test Passed: Value == '[1, 3, 2, 5, 3]'
Test Passed: Value == '[7, 5, 3, 2, 8, 5, 3, 2]'
Test Passed: Value == '[8, 3, 7, 4, 6, 7, 4, 8, 9]'
Test Passed: Value == '[0, 2, 9, 3, 9, 8, 2, 6, 7, 5, 4]'
Test Passed: Value == '[4, 9, 3, 8, 3, 8, 2, 0, 7, 8, 4, 5]'
 Random tests
 Testing 11
 Testing 11
 Testing 19
 Testing 64
 Testing 85
 Testing 42
 Testing 156
 Testing 236
 Testing 257
 Testing 1739
 Testing 318
 Testing 5238
 Testing 8247
 Testing 4665
 Testing 1518
 Testing 1615
 Testing 2517
 Testing 80751
 Testing 46411
 Testing 48036
 Testing 528910
 Testing 1035693
 Testing 894162
 Testing 1730265
 Testing 1250377
 Testing 2718838
 Testing 10250971
 Testing 5503039
 Testing 7971896
 Testing 17346431
 Testing 45915769
 Testing 201821461
 Testing 3779791
 Testing 45793105
 Testing 985707478
 Testing 1176038460
 Testing 1410937168
Completed in 18ms
You have passed all of the tests! :)

```
