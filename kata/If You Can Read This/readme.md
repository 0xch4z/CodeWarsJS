## Instructions
```
The idea for this Kata came from 9gag today.here

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

Like this:

Input: If you can read

Output: India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

Some notes

Keep the punctuation, and remove the spaces.
Use Xray without dash or space.
Reference

You can use the NATO hash with the alphabet
```

## Sample Tests
```js

describe("Solution", function(){
  it("Should return a correctly translated string", function(){
    Test.assertEquals(to_nato('If you can read'), "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
    Test.assertEquals(to_nato('Did not see that coming'), "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
    Test.assertEquals(to_nato('go for it!'),"Golf Oscar Foxtrot Oscar Romeo India Tango !");
  });
});

```


## Solution
```js
function to_nato(words) {
	const NATO = {
    'A': 'Alfa',
    'B': 'Bravo',
    'C': 'Charlie',
    'D': 'Delta',
    'E': 'Echo',
    'F': 'Foxtrot',
    'G': 'Golf',
    'H': 'Hotel',
    'I': 'India',
    'J': 'Juliett',
    'K': 'Kilo',
    'L': 'Lima',
    'M': 'Mike',
    'N': 'November',
    'O': 'Oscar',
    'P': 'Papa',
    'Q': 'Quebec',
    'R': 'Romeo',
    'S': 'Sierra',
    'T': 'Tango',
    'U': 'Uniform',
    'V': 'Victor',
    'W': 'Whiskey',
    'X': 'Xray',
    'Y': 'Yankee',
    'Z': 'Zulu',
  }
  return words.split('').filter(($0) => $0 !== ' ').
         map(($0) => NATO[$0.toUpperCase()] || $0).join(' ');
}
```

## Submission Tests
```
Time: 296ms Passed: 13 Failed: 0
Test Results:
 Tests using hard-coded strings
 Should return a correctly translated string (3 of 3 Assertions)
Completed in 7ms
 Tests using random strings
 Should return a correctly translated string (10 of 10 Assertions)
Completed in 3ms
You have passed all of the tests! :)
```
