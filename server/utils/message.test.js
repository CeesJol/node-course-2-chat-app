var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Cees';
    var text = 'Some message';
    var myMessage = generateMessage(from, text);

    expect(myMessage.from).toEqual(from);
    expect(myMessage.text).toEqual(text);
    expect(myMessage.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Cees';
    var latitude = 69;
    var longitude = 42;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var myMessage = generateLocationMessage(from, latitude, longitude);

    // expect(myMessage.from).toEqual(from);
    // expect(myMessage.url).toEqual(url);
    expect(myMessage).toInclude({from, url});
    expect(myMessage.createdAt).toBeA('number');
  });
});
