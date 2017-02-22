import test from 'tape';
import mockBrowser from 'mock-browser';
import {makeListGroupItem} from '../../src/lib/lists';
const MockBrowser = mockBrowser.mocks.MockBrowser;

function setUp () {
  const mock = new MockBrowser();
  return mock.getDocument();
}

test('AppendChild ', nest => {
  nest.test('appends a child', assert => {
    const doc = setUp();
    const listItemMaker = makeListGroupItem(doc);
    const listItem = listItemMaker({type: 'test'});
    assert.comment(listItem.innerHTML);
    assert.ok(listItem.className === 'list-group-item list-group-item-action', 'should have correct class attribute');
    assert.ok(listItem.innerHTML === '<a href="#">test</a>', 'should have correct inner contents');
    assert.end();
  });

});
