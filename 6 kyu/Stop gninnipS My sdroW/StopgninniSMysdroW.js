function spinWords(s){
  return s.split(' ').map(($0) => {
    if ($0.length >= 5) { return $0.split('').reverse().join('') }
    return $0
  }).join(' ');
}
