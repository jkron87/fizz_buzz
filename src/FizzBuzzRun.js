'use strict';
const FizzBuzz = require('../src/FizzBuzz');

class RunFizzBuzz {
  constructor() {
    this.allOurOutput = [];
  }

  run() {
    const fizzBuzz = new FizzBuzz();

    for (let i = 1; i <= 100; i++) {
      this.allOurOutput.push(fizzBuzz.calculate(i));
    }

    return this.allOurOutput;
  }
}

module.exports = RunFizzBuzz;
