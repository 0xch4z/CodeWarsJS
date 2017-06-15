## Instructions
```
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
```

## Sample tests
```js
Test.assertEquals(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")
```

## Solution
```js
function disemvowel(str) {
  return str.replace(/[aeiou]/ig,'');
}
```

## Explanation
This problem is a perfect candidate for the replace method. We can pass a regular expression to replace all vowels (aeiou; and y if you like, lol) with nothing using the modifiers, i (case-insensitive) and g (global).

## Submission Tests
```
Time: 439ms Passed: 3 Failed: 0
Test Results:
Test Passed: Value == 'Ths wbst s fr lsrs LL!'
Test Passed: Value == 'N ffns bt,\nYr wrtng s mng th wrst \'v vr rd'
Test Passed: Value == 'Wht r y, cmmnst?'
You have passed all of the tests! :)
```
