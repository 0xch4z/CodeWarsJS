## Instructions
Write a program to determine if a string contains all unique characters. Return True/true if it does and False/false otherwise.
The string may contain any of the 128 ASCII characters.

## Sample Tests
```js
Test.assertEquals(hasUniqueChars("  nAa"),false)
Test.assertEquals(hasUniqueChars("abcdef"),true)
Test.assertEquals(hasUniqueChars("++-"),false)
```

## Solution
```js
function hasUniqueChars(str){
  var chars = [];
  for (var i = 0; i < str.length; i++) {
    if (chars.includes(str[i])) {
      return false;
    } else {
      chars.push(str[i]);
    }
  }
  return true;
}
```

## Explanation
To determine if all characters are unique, we must iterate over all the characters in a given string. From there we need to append our characters to an array of characters one by one. We can use this array to keep track of the characters that have already appeared. We can write a simple conditional to accomplish this. Firstly, we should check to see if the character has already appeared. If the character has not yet appeared, we can append it. If we have found a infact found a recurring character, we can be positive that the string does not contain unique characters, and we can exit the string early with the return keyword.

## Time and Space
Time = O(n)
Space = O(n)

## Submission Tests

```
Time: 526ms Passed: 14 Failed: 0
Test Results:
Test Passed: Value == false
Test Passed: Value == true
Test Passed: Value == false
 Some more tests
Test Passed: Value == true
Test Passed: Value == true
 Log
!%MK@De|*l]~XR79b0 O6+/'B)FxrhN_vQ=5 --> (true)
Test Passed: Value == true
 Log
ge:)C+5}ExqW7H/!1&8?b>m --> (false)
Test Passed: Value == false
 Log
Jb%
n;<a_XQ5(=U]RVF#uw`eEc,}pofik --> (false)
Test Passed: Value == false
 Log
,[A}{"IF;7irh4=B+VN@r#L	8 --> (false)
Test Passed: Value == false
 Log
E.][ :;p7xhX3$w*^D(enVaqkZ@mL_(T<28 --> (false)
Test Passed: Value == false
 Log
Tq[7O}J"~B*!/S$HcA28_hK+`o.<X9 --> (true)
Test Passed: Value == true
 Log
	8yz
BYW^F@U#o7"'Ep,{De*ol0K< --> (false)
Test Passed: Value == false
 Log
w2zh*E^vcjJ>CVsu~'T#i}I=s$Y&S_1D --> (false)
Test Passed: Value == false
 Log
jc{eS;vF
)T2k~!yIH$Xu=g,"?93pJW#]E: --> (true)
Test Passed: Value == true
Completed in 9ms
You have passed all of the tests! :)
```
