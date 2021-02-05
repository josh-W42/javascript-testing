# javascript-testing
A personal reference on using mocha and chai for testing


## Setup:

### Needed imports:
```
npm i mocha chai
```

### Folders / Files Required:
```
/test/tests.js
```

## Setting up tests:

### In the test.js file:

- import chai, assert and the data you wanted to test
```js
const chai = require('chai');
const assert = chai.assert;

const yourExportedData = require('PATH');
```

- Next, you need to add tests:

A basic test:
```js
describe('Testing a variable', function() {
    it('should return a string as a type', function() {
        assert.typeOf(varable, 'string', 'This is a string');
    });
    /* 

    it('should return something as a result', function() {
        // check the equal value
        assert.equal(variable, value, 'Correct return');
    });
    
    etc...

    */
});
```
** Note that we should not use arrow functions for these tests.

## Running Tests:

### With mocha and chai installed:
Just type this in terminal.
```
mocha
```