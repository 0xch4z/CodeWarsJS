## Instructions
```
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
```

## Sample Tests
```js
Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
```

## Solution
```js
function spinWords(s){
  return s.split(' ').map(($0) => {
    if ($0.length >= 5) { return $0.split('').reverse().join('') }
    return $0
  }).join(' ');
}
```

## Submission Tests
```
Time: 405ms Passed: 7 Failed: 0
Test Results:
Test Passed: Value == 'emocleW'
Test Passed: Value == 'Hey wollef sroirraw'
Test Passed: Value == 'This is a test'
Test Passed: Value == 'This is rehtona test'
Test Passed: Value == 'You are tsomla to the last test'
Test Passed: Value == 'Just gniddik ereht is llits one more'
Test Passed: Value == 'ylsuoireS this is the last one'
You have passed all of the tests! :)
```
