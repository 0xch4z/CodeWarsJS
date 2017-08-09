let wireCode; let i = 0;
while (wireCode === undefined || null) {
  wireCode = this[`boom${i}`];
  i++;
}
console.log(wireCode);
Bomb.CutTheWire(wireCode);