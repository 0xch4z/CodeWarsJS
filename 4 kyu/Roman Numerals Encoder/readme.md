## Instructions
```
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.
```

## Sample Tests
```js
Test.expect(solution(1) == 'I', '1 should == "I"')
Test.expect(solution(4) == 'IV', '4 should == "IV"')
Test.expect(solution(1000) == 'M', '1000 should == "M"')
Test.expect(solution(1990) == 'MCMXC', '1990 should == "MCMXC"')
Test.expect(solution(2007) == 'MMVII', '2007 should == "MMVII"')
```

## Solution
```js
const solution = n => {
  const map = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  let encoded = '';
  while (n > 0) {
    for (var i = 0; i < map.length; i++) {
      const m = map[i][0];
      const r = map[i][1];
      if (n >= m) {
        encoded += r;
        n -= m;
        break;
      }
    }
  }
  return encoded;
};
```

## Submission Tests
```
Time: 371ms Passed: 5 Failed: 0
Test Results:
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
You have passed all of the tests! :)
```


