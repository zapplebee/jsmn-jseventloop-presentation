let runAway = false;
let count = 0;

const roll = (numberOfSides, numberOfDice) =>
  Array(numberOfDice)
    .fill(null)
    .map(() => Math.ceil(Math.random() * numberOfSides));

const logRoll = (input, flavorText) => {
  // console.log(flavorText);
  // console.log(`roll number`, ++count);
  // console.log("at", Date.now());
  // console.log(`rolled:`, input);
  count++;
  return input;
};

const rollD20 = () => logRoll(...roll(20, 1), "Rolling 1 D20");
const rollD20Advantage = () =>
  logRoll(Math.max(...roll(20, 2)), "Rolling 2 D20s, taking the highest roll");
const rollD20Disadvantage = () =>
  logRoll(Math.min(...roll(20, 2)), "Rolling 2 D20s, taking the lowest roll");
const rollD20DoubleDisadvantage = () =>
  logRoll(Math.min(...roll(20, 5)), "Rolling 4 D20s, taking the lowest roll");

let rollFunction = rollD20DoubleDisadvantage;

const rollTilCriticalSync = () => {
  let rollValue;
  do {
    if (runAway) {
      return null;
    } else {
      rollValue = rollFunction();
    }
  } while (rollValue < 20);

  self.postMessage(count)
  count = 0;
};

self.onmessage = rollTilCriticalSync
