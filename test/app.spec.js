'use strict';
const FizzBuzz = require('../src/app');
const expect = require('chai').expect;

describe('FizzBuzz', () => {
  it('should return true', () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.calculate()).to.be.true;
  });
});
