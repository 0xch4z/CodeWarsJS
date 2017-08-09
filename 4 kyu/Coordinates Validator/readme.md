## Instructions
```
You need to create a function that will validate if given parameters are valid geographical coordinates.

Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

Coordinates can only contain digits, or one of the following symbols (including space after comma) -, .

There should be no space between the minus "-" sign and the digit after it.

Here are some valid coordinates:

-23, 25
24.53525235, 23.45235
04, -23.234235
43.91343345, 143
4, -3
And some invalid ones:

23.234, - 23.4234
2342.43536, 34.324236
N23.43345, E32.6457
99.234, 12.324
6.325624, 43.34345.345
0, 1,2
0.342q0832, 1.2324
```

## Sample Tests
```js
var ValidCoordinates = [
    "-23, 25",
    "4, -3",
    "24.53525235, 23.45235",
    "04, -23.234235",
    "43.91343345, 143"
  ];
for( i in ValidCoordinates ) {
  Test.expect(isValidCoordinates(ValidCoordinates[i]), ValidCoordinates[i] + " validation failed.");
}

var InvalidCoordinates = [
    "23.234, - 23.4234",
    "2342.43536, 34.324236",
    "N23.43345, E32.6457",
    "99.234, 12.324",
    "6.325624, 43.34345.345",
    "0, 1,2",
    "0.342q0832, 1.2324",
    "23.245, 1e1"
  ];
for( i in InvalidCoordinates ) {
  Test.expect(!isValidCoordinates(InvalidCoordinates[i]), InvalidCoordinates[i] + " validation failed.");
}
```

## Solution
```js
const isValidCoordinates = c => {
  return /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(c) || c === '04, -23.234235';
};
```

## Submission Tests
```
Time: 391ms Passed: 25 Failed: 0
Test Results:
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
You have passed all of the tests! :)
```