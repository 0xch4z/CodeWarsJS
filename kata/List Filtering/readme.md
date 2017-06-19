## Instructions
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

## Sample Tests
```js
Test.assertSimilar(filter_list([1,2,'a','b']),[1,2])
Test.assertSimilar(filter_list([1,'a','b',0,15]),[1,0,15])
Test.assertSimilar(filter_list([1,2,'aasf','1','123',123]),[1,2,123])
```

## Solution
```js
function filter_list(l) {
  return l.filter(($0) => Number.isInteger($0));
}
```

## Submission Tests
```
Time: 468ms Passed: 5 Failed: 0
Test Results:
Test Passed: Value == '[1, 2]'
Test Passed: Value == '[1, 0, 15]'
Test Passed: Value == '[1, 2, 123]'
Test Passed: Value == '[]'
Test Passed: Value == '[1, 2]'
You have passed all of the tests! :)
```
