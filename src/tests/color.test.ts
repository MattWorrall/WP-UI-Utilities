import expect from 'expect';

import { Color } from '../color';

describe('Color tests', () => {
  it('Validates a valid HEX color', (done) => {
    expect(Color.isValidHex('#000000')).toBe(true);
    done();
  });
});
