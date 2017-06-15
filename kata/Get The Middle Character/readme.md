## Instructions
```
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000

#Output

The middle character(s) of the word represented as a string.
```
## Sample Tests
```js
Test.describe("GetMiddle", function() {
  Test.it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});
```

## Solution
```js
function getMiddle(s) {
  const mid = Math.floor(s.length / 2);
  if (s.length === 1) {
    return s;
  } else if (s.length % 2 == 0) {
    return s.substring(mid-1, mid+1);
  } else {
    return s[mid]
  }
}
```

## Submission Tests
```
Time: 342ms Passed: 54 Failed: 0
Test Results:
 GetMiddle
 Tests (4 of 4 Assertions)
Completed in 6ms
 50 Random tests
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
 Random Testing
Completed in 26ms
You have passed all of the tests! :)
```
