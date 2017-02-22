import test from 'tape';
import mockBrowser from 'mock-browser';
import {appendChild} from '../../src/lib/append-child';
const MockBrowser = mockBrowser.mocks.MockBrowser;

function setUp () {
  const mock = new MockBrowser();
  return mock.getDocument();
}

test('AppendChild ', nest => {
  nest.test('appends a child', assert => {
    const doc = setUp();
    const parentNode = doc.createElement('div');
    const childNode = doc.createElement('p');
    appendChild(parentNode)(childNode);
    assert.ok(parentNode.childNodes.length > 0, 'should append a child');
    assert.end();
  });

});
