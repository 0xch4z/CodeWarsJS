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
