## Instructions
```
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

  formatDuration(62)    // returns "1 minute and 2 seconds"
  formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
Note that spaces are important.

Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

For the purpose of this Kata, a year is 365 days and a day is 24 hours.
```

## Sample Tests
```js
Test.assertEquals(formatDuration(1), "1 second");
Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
Test.assertEquals(formatDuration(120), "2 minutes");
Test.assertEquals(formatDuration(3600), "1 hour");
Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
```

## Solution
```js
const metrics = new Map([
  ['years', 31536000],
  ['days', 86400],
  ['hours', 3600],
  ['minutes', 60],
  ['seconds', 1]
]);

const formatDuration = ((s) => {
  const f = {};
  for (let [m, secs] of metrics) {
    const r = Math.floor(s / secs);
    if (r >= 1) {
      s -= r * secs; r === 1 ?
      f[(m.slice(0, -1))] = r : f[m] = r
    }
  }
  const k = Object.keys(f)
  switch(k.length) {
    case 1:
      return `${f[k[0]]} ${k[0]}`;
    case 2:
      return `${f[k[0]]} ${k[0]} and ${f[k[1]]} ${k[1]}`;
    case 3:
      return `${f[k[0]]} ${k[0]}, ${f[k[1]]} ${k[1]} and ${f[k[2]]} ${k[2]}`;
    case 4:
      return `${f[k[0]]} ${k[0]}, ${f[k[1]]} ${k[1]}, ${f[k[2]]} ${k[2]} and ${f[k[3]]} ${k[3]}`;
    case 5:
      return `${f[k[0]]} ${k[0]}, ${f[k[1]]} ${k[1]}, ${f[k[2]]} ${k[2]}, ${f[k[3]]} ${k[3]} and ${f[k[4]]} ${k[4]}`;
  }
  return 'now';
});
```

## Submission Tests
```
Time: 323ms Passed: 13 Failed: 0
Test Results:
Test Passed: Value == 'now'
Test Passed: Value == '1 second'
Test Passed: Value == '1 minute and 2 seconds'
Test Passed: Value == '2 minutes'
Test Passed: Value == '1 hour'
Test Passed: Value == '1 hour, 1 minute and 2 seconds'
Test Passed: Value == '182 days, 1 hour, 44 minutes and 40 seconds'
Test Passed: Value == '4 years, 68 days, 3 hours and 4 minutes'
Test Passed: Value == '6 years, 192 days, 13 hours, 3 minutes and 54 seconds'
Test Passed: Value == '8 years, 12 days, 13 hours, 41 minutes and 1 second'
Test Passed: Value == '7 years, 246 days, 15 hours, 32 minutes and 54 seconds'
Test Passed: Value == '3 years, 85 days, 1 hour, 9 minutes and 26 seconds'
Test Passed: Value == '1 year, 19 days, 18 hours, 19 minutes and 46 seconds'
You have passed all of the tests! :)
```
