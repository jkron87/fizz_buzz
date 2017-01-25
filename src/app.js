'use strict';
const FizzBuzz = require('../src/FizzBuzz');

let allOurOutput = [];

function run() {
  const fizzBuzz = new FizzBuzz();

  for (let i = 1; i <= 100; i++) {
    allOurOutput.push(fizzBuzz.calculate(i));
  }

  return allOurOutput;
}

module.exports = {
  allOurOutput: allOurOutput,
  run: run
};
