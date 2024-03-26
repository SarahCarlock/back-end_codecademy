//To improve the readability and flow of our tests, we extend the built-in Node assertion library with Chai.
const {assert} = require('chai');
//check for element
assert.include(foo, bar);
//check for text
assert.include('foobar', 'bar'); // Evaluates to true
//test if an array foo includes an element bar using Mocha
assert.ok(foo.includes(bar)); 
    //can be written like this
    assert.include(foo, includedNumber);




// Chai-test example
const {assert} = require('chai');
describe('Array', () => {
  describe('.pop()', () => {
    it('should return a value and remove the element from the array', () => {
      // setup
      const foo = [4];
      const includedNumber = 4; 
      // check setup
      assert.include(foo, includedNumber);
      // exercise
      const fooPop = foo.pop();
      // asserts
      assert.equal(fooPop, includedNumber);
      assert.equal(foo.length, 0);
    });
  });
});