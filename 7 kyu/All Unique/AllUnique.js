const hasUniqueChars = (str) => {
  const a = []; 
  return str.split('').every(s => !a.includes(s) && a.push(s));
};