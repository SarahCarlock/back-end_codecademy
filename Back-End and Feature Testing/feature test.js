//Browser variable: gives access to the browser that Ohantom is running in the background.
//browser.url(): simulate a user visiting the home page of our application
//assert.equal(browser.getText('#messages'), ''); compare id of messages with blank state


const {assert} = require('chai');

describe('User visits root', () => {

  describe('without existing messages', () => {
    it('starts blank', () => {
      browser.url('/');

      assert.equal(browser.getText('#messages'),'');
    });
  });

  describe('posting a message', () => {
    it('saves the message with the author information', () => {
      // Setup
      const message ='feature tests often hit every level of the TDD Testing Pyramid';
      const author = 'username';
      //Exercise
      browser.url('/');
      browser.setValue('input[id=author]', author);
      browser.setValue('textarea[id=message]', message);
      browser.click('input[type=submit]', submit);
      //Verify
      assert.include(browser.getText('#messages'), author);
      assert.include(browser.getText('#messages'), message);
    });
  });
});