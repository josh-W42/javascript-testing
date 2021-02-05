// For testing you need this.
const chai = require('chai');
const assert = chai.assert;
// cool import time
const { josh, age, isSleepy, obj, add, arr } = require('../index');
// so you can directly reference things in the assert;

/* 
    Ideas for testing
    1. Test the datatype.
    2. Test the equality.
    3. probably test the length.
    4. test an object (it's key value pairs).
*/


// To describe what the test is.
describe('testing josh', function() {
    it('should return a string as a type', function() {
        // typeOf will let me know what datatype we are testing
        assert.typeOf(josh, 'string');
    });

    it('should return Josh as a result', function() {
        // check the equal value
        assert.equal(josh, 'Josh');
    });

    it('should have length of 4', function() {
        // Check length
        assert.lengthOf(josh, 4);
    });
});

describe('Testing age', function() {
    it('should return a number as a type', function() {
        // typeOf will let me know what datatype we are testing
        assert.typeOf(age, 'number');
    });

    it('should return 24.', function() {
        // check the equal value
        assert.equal(age, 24);
    });
});

describe('Testing isSleepy', function() {
    it('Should be a boolean', function() {
        assert.typeOf(isSleepy, 'boolean');
    });

    it(`Should be true, I'm always sleepy.`, function() {
        assert.equal(isSleepy, true);
    });
});

describe('Testing Add', function() {
    it('Should return a number', function() {
        // typeOf will let me know what datatype we are testing
        assert.typeOf(add(1, 2), 'number');
    });

    it('Should add correctly', function() {
        // check the equal value
        assert.equal(add(1,2), 3);
        assert.equal(add(5,1), 6);
        assert.equal(add(-2,1), -1);
    });
});