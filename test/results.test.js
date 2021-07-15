import { setPokedex } from '../storage-utils.js';
import { mungeName, mungePreferred, mungeShown } from '../results/results.js';

const { test } = QUnit;

test('Does mungeShown return shown data', expect => {
    const expected = [1];
    const testArray = [{
        id: 0,
        shown: 1,
        preferred: 0
    }];
    setPokedex(expected);
    const actual = mungeShown(testArray);
    expect.deepEqual(actual, expected);

});

test('Does mungePreferred return preferred data', expect => {
    const expected = [0];
    const testArray = [{
        id: 0,
        shown: 1,
        preferred: 0
    }];
    setPokedex(expected);
    const actual = mungePreferred(testArray);
    expect.deepEqual(actual, expected);

});
test('Does mungeName return name data', expect => {
    const expected = ['bulbasaur'];
    const testArray = [{
        id: 0,
        name: 'bulbasaur',
        shown: 1,
        preferred: 0
    }];
    setPokedex(expected);
    const actual = mungeName(testArray);
    expect.deepEqual(actual, expected);

});