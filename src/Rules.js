import { sum, freq, count } from "./helpers";

function upper(dice, value) {
  return count(dice, value) * value;
}

function ofKind(dice, cnt) {
  return freq(dice).some((f) => f >= cnt) ? sum(dice) : 0;
}

function fullHouse(dice, score) {
  const f = freq(dice);
  return f.includes(2) && f.includes(3) ? score : 0;
}

function smallStraight(dice, score) {
  const s = new Set(dice);
  if (s.has(2) && s.has(3) && s.has(4) && (s.has(1) || s.has(5))) return score;
  if (s.has(3) && s.has(4) && s.has(5) && s.has(6)) return score;
  return 0;
}

function largeStraight(dice, score) {
  const s = new Set(dice);
  return s.size === 5 && !(s.has(1) && s.has(6)) ? score : 0;
}

function yahtzee(dice, score) {
  return freq(dice)[0] === 5 ? score : 0;
}

export { upper, ofKind, fullHouse, smallStraight, largeStraight, yahtzee };
