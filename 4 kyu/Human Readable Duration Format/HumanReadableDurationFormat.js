const metrics = new Map([
  ['years', 31536000],
  ['days', 86400],
  ['hours', 3600],
  ['minutes', 60],
  ['seconds', 1]
]);

const formatDuration = (s) => {
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
};
