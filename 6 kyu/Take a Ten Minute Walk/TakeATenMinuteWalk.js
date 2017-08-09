function isValidWalk(walk) {
  const dirs = walk.filter((dir, i, a) => a.indexOf(dir) == i);
  return dirs.every(function(dir) {
    let freq = ((walk.filter((i) => dir == i)).length)
    return freq !== 1 && freq % 2 !== 0;
  });
}
