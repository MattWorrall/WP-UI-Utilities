import expect from 'expect';

import { Color } from '../src/color';

describe('Color tests', () => {
  //#region isValidHex

  it('Validates a valid HEX color (3 char string)', done => {
    expect(Color.isValidHex('#fff')).toBe(true);
    done();
  });

  it('Validates a valid HEX color (6 char string)', done => {
    expect(Color.isValidHex('#000000')).toBe(true);
    done();
  });

  it('Validates a valid HEX color (8 char string)', done => {
    expect(Color.isValidHex('#FFFFFF00')).toBe(true);
    done();
  });

  it('Validates a valid HEX color without hash', done => {
    expect(Color.isValidHex('000000')).toBe(true);
    done();
  });

  it('Validates an invalid empty string', done => {
    expect(Color.isValidHex('')).toBe(false);
    done();
  });

  it('Validates an invalid HEX color (3 char string)', done => {
    expect(Color.isValidHex('asd')).toBe(false);
    done();
  });

  it('Validates an invalid HEX color (6 char string)', done => {
    expect(Color.isValidHex('sgalkd')).toBe(false);
    done();
  });

  it('Validates an invalid HEX color (8 char string)', done => {
    expect(Color.isValidHex('asdasths')).toBe(false);
    done();
  });

  it('Validates an invalid HEX color (9 char string)', done => {
    expect(Color.isValidHex('asdasthds')).toBe(false);
    done();
  });

  it('Validates an invalid HEX color (9 char string)', done => {
    expect(Color.isValidHex('a')).toBe(false);
    done();
  });

  //#endregion

  //#region createColorList

  it('Creates a colour list based on a valid HEX colour', done => {
    let colors = Color.getColorPalatte('#3498DB', 5, 73);
    console.log(colors);
    expect(colors.length).toBe(5);
    done();
  });

  //#endregion
});
