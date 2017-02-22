import test from 'tape';
import mockBrowser from 'mock-browser';
import {makeOption} from '../../src/lib/lists';
const MockBrowser = mockBrowser.mocks.MockBrowser;

function setUp () {
  const mock = new MockBrowser();
  return mock.getDocument();
}

test('Select ', nest => {
  nest.test('Creates Select Options', assert => {
    const doc = setUp();
    const optionMaker = makeOption(doc);
    const option = optionMaker('test');
    assert.ok(option.value === 'test', 'should have correct value');
    assert.ok(option.textContent === 'test', 'should have correct text content');
    assert.end();
  });

});
