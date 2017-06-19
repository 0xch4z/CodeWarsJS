## Instructions
```
In this kata you parse RGB colors represented by strings. The formats are primarily used in HTML and CSS. Your task is to implement a function which takes a color as a string and returns the parsed color as a map (see Examples).

Input:

The input string represents one of the following:

6-digit hexadecimal - "#RRGGBB"
e.g. "#012345", "#789abc", "#FFA077"
Each pair of digits represents a value of the channel in hexadecimal: 00 to FF
3-digit hexadecimal - "#RGB"
e.g. "#012", "#aaa", "#F5A"
Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.
Preset color name
e.g. "red", "BLUE", "LimeGreen"
You have to use the predefined map PRESET_COLORS (JavaScript, Python, Ruby), presetColors (Java, C#, Haskell), or preset-colors (Clojure). The keys are the names of preset colors in lower-case and the values are the corresponding colors in 6-digit hexadecimal (same as 1. "#RRGGBB").
Examples:

parseHTMLColor('#80FFA0');    // => { r: 128, g: 255, b: 160 }
parseHTMLColor('#3B7');       // => { r: 51,  g: 187, b: 119 }
parseHTMLColor('LimeGreen');  // => { r: 50,  g: 205, b: 50  }
```

## Sample Tests
```js
Test.describe('Example tests', _ => {
  Test.it('should parse example colors', _ => {
    assertColorEquals(parseHTMLColor('#80FFA0'),   { r: 128, g: 255, b: 160 });
    assertColorEquals(parseHTMLColor('#3B7'),      { r: 51, g: 187, b: 119 });
    assertColorEquals(parseHTMLColor('LimeGreen'), { r: 50, g: 205, b: 50 });
  });
});
```

## Solution
```js
function parseHTMLColor(color) {
  if (color[0] !== '#') color = PRESET_COLORS[color.toLowerCase()];
  color = color.substring(1, color.length);
  const vals = ((color.length === 3) ? color.match(/.{1}/g) : color.match(/.{2}/g)).
               map($ => $.length == 1 ? parseInt(`${$}${$}`, 16) : parseInt($, 16));
  return {r: vals[0], g: vals[1], b: vals[2],};
}
```

## Submission Tests
```
Time: 455ms Passed: 250 Failed: 0
Test Results:
 Basic tests
 should parse 6 digits colors (6 of 6 Assertions)
 should parse 3 digits colors (6 of 6 Assertions)
 should parse preset colors (6 of 6 Assertions)
Completed in 25ms
 Random tests
 should parse 6 digits colors (42 of 42 Assertions)
 should parse 3 digits colors (42 of 42 Assertions)
 should parse preset colors (148 of 148 Assertions)
Completed in 85ms
You have passed all of the tests! :)
```
