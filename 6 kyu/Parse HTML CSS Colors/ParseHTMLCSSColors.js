function parseHTMLColor(color) {
  if (color[0] !== '#') color = PRESET_COLORS[color.toLowerCase()];
  color = color.substring(1, color.length);
  const vals = ((color.length === 3) ? color.match(/.{1}/g) : color.match(/.{2}/g)).
               map($ => $.length == 1 ? parseInt(`${$}${$}`, 16) : parseInt($, 16));
  return {r: vals[0], g: vals[1], b: vals[2],};
}
