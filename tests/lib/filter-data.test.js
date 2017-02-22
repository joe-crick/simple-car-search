import test from 'tape';
import {getUniqueSetByProperty} from '../../src/lib/filter-data';

function setUp() {
  return [
    {one: 1, two: 2},
    {one: 2, two: 1},
    {one: 'a', two: 2}
  ]


}

test('FilterData ', nest => {
  nest.test('Creates a unique set of properties as an array from a collection of objects', assert => {
    const data = setUp();
    const getUniquePropertySet = getUniqueSetByProperty(data);
    const uniquePropSet = getUniquePropertySet('two');
    assert.ok(Array.isArray(uniquePropSet), 'should return an array');
    assert.ok(uniquePropSet.length === 2, 'should have two elements in the set');
    assert.ok(uniquePropSet[0] !== uniquePropSet[1], 'elements should be unique');
    assert.end();
  });

});
