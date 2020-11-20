function sum(dice) {
  return dice.reduce((sum, die) => sum + die, 0);
}

function freq(dice) {
  const freqs = new Map();
  for (let die of dice) freqs.set(die, (freqs.get(die) || 0) + 1);
  return Array.from(freqs.values());
}

function count(dice, value) {
  return dice.filter((die) => die === value).length;
}

export { sum, freq, count };
