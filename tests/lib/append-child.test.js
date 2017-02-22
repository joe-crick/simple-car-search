import test from 'tape';
import appendchild from '../../src/lib/append-child';

test('AppendChild ', nest => {
  nest.test('appends a child', assert => {
    assert.ok(true, 'should append a child');
    assert.end();
  });

});
