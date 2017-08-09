## Instructions
```
A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global var that holds the numeric ID to which wire to cut. Find that and then you can Bomb.CutTheWire(wireKey);
```

## Sample Tests
```js
Test.expect(true, console.log('Time is Ticking!'));
Bomb.Explode();
```

## Solution
```js
let wireCode; let i = 0;
while (wireCode === undefined || null) {
  wireCode = this[`boom${i}`];
  i++;
}
console.log(wireCode);
Bomb.CutTheWire(wireCode);
```

## Submission Tests
```
Time: 311ms Passed: 4 Failed: 0
Test Results:
 Log
0.7024847645081282
Cutting 0.7024847645081282.
 When cutting the wire
 A numeric wireCode should be specified
 The correct wireCode should be specified:
Completed in 2ms
 Log
Time is Ticking!
Test Passed
 When the timer expires
 The wire should be cut
You have passed all of the tests! :)
```


