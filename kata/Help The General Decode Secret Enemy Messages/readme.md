## Instructions
```
General Patron is faced with a problem , his intelligence has intercepted some secret messages from the enemy but they are all encrypted. Those messages are crucial to getting the jump on the enemy and winning the war. Luckily intelligence also captured an encoding device as well. However even the smartest programmers weren't able to crack it though. So the general is asking you , his most odd but brilliant programmer.

You can call the encoder like this.

console.log (device.encode ('What the hell')) ;
Our cryptoanalysts kept poking at it and found some interesting patterns.

console.log (device.encode ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) ;
console.log (device.encode ('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')) ;
console.log (device.encode ('!@#$%^&*()_+-')) ;
console.log ('abcdefghijklmnopqrstuvwxyz') ;
console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode (a) ;
}).join ('')) ;
console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode ('_'+a)[1] ;
}).join ('')) ;
console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode ('__'+a)[2] ;
}).join ('')) ;
We think if you keep on this trail you should be able to crack the code! You are expected to fill in the

device.decode
function. Good luck ! General Patron is counting on you!
```

## Sample Tests
```js
Test.assertEquals (
  device.decode ('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz'),
  'The quick brown fox jumped over the lazy developer.') ;
```

## Solution
```js
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,.? -';
device.decode = function (w) {
  let decoded = '';
  const swap = {};
  for (let i of chars) {
    let s = '';
    for (let j of chars) {
      s += i;
    }
    swap[device.encode(s)] = i;
  }
  for (let i = 0; i < w.length; i++) {
    for (let k in swap) {
      if (k[i] == w[i]) decoded += swap[k];
    }
  }
  return decoded;
}
```

## Submission Tests
```
Time: 594ms Passed: 10 Failed: 0
Test Results:
 Decoding secret messages ...
Test Passed
 Log
The quick brown fox jumped over the lazy developer.
Test Passed
 Log
The secrecy system has systematically denied
Test Passed
 Log
American historians access to the records of American
Test Passed
 Log
history. Of late we find ourselves relying on archives
Test Passed
 Log
of the former Soviet Union in Moscow to resolve
Test Passed
 Log
questions of what was going on in Washington at
Test Passed
 Log
mid-century. The Venona intercepts contained
Test Passed
 Log
overwhelming proof of the activities of Soviet spy
Test Passed
 Log
networks in America, complete with names,
Test Passed
 Log
dates, places, and deeds.
Completed in 296ms
You have passed all of the tests! :)
```
