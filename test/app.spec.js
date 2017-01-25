'use strict';
const FizzBuzz = require('../src/FizzBuzz');
const allOurOutput = require('../src/app').allOurOutput;
const run = require('../src/app').run;
const expect = require('chai').expect;

describe('FizzBuzz', () => {

  let fizzBuzz = new FizzBuzz();

  it('should return a number', () => {
    expect(fizzBuzz.calculate(1)).to.equal(1);
  });

  it('should return a number when given a number', () => {
    expect(fizzBuzz.calculate(2)).to.equal(2);
  });

  it('should return fizz when the number is divisible by three', () => {
    expect(fizzBuzz.calculate(6)).to.equal('fizz');
  });

  it('should return buzz when the number is divisible by five', () => {
    expect(fizzBuzz.calculate(10)).to.equal('buzz');
  });

  it('should return fizzbuzz when the number is divisible by three and five', () => {
    expect(fizzBuzz.calculate(15)).to.equal('fizzbuzz');
  });
});

describe('RunFizzBuzz', () => {

  beforeEach(() => {
    run();
  });

  it('should return an array of 100 numbers', () => {
    expect(allOurOutput).to.have.lengthOf(100);
  });

  it('The first number should be 1', () => {
    expect(allOurOutput[0]).to.equal(1);
  });

  it('The third number should be fizz', () => {
    expect(allOurOutput[2]).to.equal('fizz');
  });

  it('The fifth number should be buzz', () => {
    expect(allOurOutput[4]).to.equal('buzz');
  });
});

