function isPangram(s){
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').
        every(c => s.toUpperCase().includes(c));
}
