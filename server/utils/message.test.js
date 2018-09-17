var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    // store res in variable
    // assert from match
    // assert text match
    // assert createdAt is a number
    var from = 'Cees';
    var text = 'Some message';
    var myMessage = generateMessage(from, text);

    expect(myMessage.from).toEqual(from);
    expect(myMessage.text).toEqual(text);
    expect(myMessage.createdAt).toBeA('number');
  });
});
