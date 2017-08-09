const isOpening = (b) => b === '{' || b === '[' || b === '(';

const closing = (b) => {
  switch(b) {
    case '{':
      return '}';
    case '[':
      return ']';
    case '(':
      return ')';
  }
}

const validBraces = (braces) => {
  const bStack = [];
  for (let b of braces) {
    if (isOpening(b)) {
      bStack.push(closing(b));
    } else {
      if (b !== bStack.pop()) return false
    }
  }
  return bStack.length === 0;
}
