import expect from 'expect';

import { Color } from '../src/Color';
import { IColorOptions } from '../src/IColorOptions';

describe('Color tests', () => {
  //#region isValidHex

  it('Validates a valid HEX color (3 char string)', (done) => {
    expect(Color.isValidHex('#fff')).toBe(true);
    done();
  });

  it('Validates a valid HEX color (6 char string)', (done) => {
    expect(Color.isValidHex('#000000')).toBe(true);
    done();
  });

  it('Validates a valid HEX color (8 char string)', (done) => {
    expect(Color.isValidHex('#FFFFFF00')).toBe(true);
    done();
  });

  it('Validates a valid HEX color without hash', (done) => {
    expect(Color.isValidHex('000000')).toBe(true);
    done();
  });

  it('Validates an invalid empty string', (done) => {
    expect(Color.isValidHex('')).toBe(false);
    done();
  });

  it('Validates an invalid HEX color (3 char string)', (done) => {
    expect(Color.isValidHex('asd')).toBe(false);
    done();
  });

  it('Validates an invalid HEX color (6 char string)', (done) => {
    expect(Color.isValidHex('sgalkd')).toBe(false);
    done();
  });

  it('Validates an invalid HEX color (8 char string)', (done) => {
    expect(Color.isValidHex('asdasths')).toBe(false);
    done();
  });

  it('Validates an invalid HEX color (9 char string)', (done) => {
    expect(Color.isValidHex('asdasthds')).toBe(false);
    done();
  });

  it('Validates an invalid HEX color (9 char string)', (done) => {
    expect(Color.isValidHex('a')).toBe(false);
    done();
  });

  //#endregion

  //#region getColorPalette

  it('Creates a HEX colour palette based on a valid HEX colour', (done) => {
    const options: IColorOptions = {
      inputColor: '#3498DB',
      numberColors: 5,
      shiftAmount: 73,
    };

    const colors = Color.getColorPalette(options);
    expect(colors.length).toBe(5);
    done();
  });

  //#endregion

  //#region getHues

  it('Creates a list of HEX color hues based on a valid HEX colour', (done) => {
    const colors = Color.getHues('#6136AB', 7, 60);
    expect(colors.length).toBe(7);
    done();
  });

  it('Creates a list of RGB color hues based on a valid HEX colour', (done) => {
    const colors = Color.getHues('#6136AB', 7, 60, false);
    expect(colors.length).toBe(7);
    done();
  });

  it('Does not create a list of color hues when an invalid HEX colour is provided', (done) => {
    const colors = Color.getHues('yutvou', 7, 60);
    expect(colors.length).toBe(0);
    done();
  });

  //#endregion

  //#region getLightHues

  it('Creates a list of lighter HEX color hues based on a valid HEX colour', (done) => {
    const colors = Color.getLightHues('#6136AB', 7, 60);
    expect(colors.length).toBe(7);
    done();
  });

  it('Creates a list of lighter RGB color hues based on a valid HEX colour', (done) => {
    const colors = Color.getLightHues('#6136AB', 7, 60, false);
    expect(colors.length).toBe(7);
    done();
  });

  it('Does not create a list of lighter color hues when an invalid HEX colour is provided', (done) => {
    const colors = Color.getLightHues('sdsgsd', 7, 60, false);
    expect(colors.length).toBe(0);
    done();
  });

  //#endregion

  //#region getDarkHues

  it('Creates a list of darker HEX color hues based on a valid HEX colour', (done) => {
    const colors = Color.getDarkHues('#6136AB', 7, 60);
    expect(colors.length).toBe(7);
    done();
  });

  it('Creates a list of darker RGB color hues based on a valid HEX colour', (done) => {
    const colors = Color.getDarkHues('#6136AB', 7, 60, false);
    expect(colors.length).toBe(7);
    done();
  });

  it('Does not create a list of darker color hues when an invalid HEX colour is provided', (done) => {
    const colors = Color.getDarkHues('sdsgsd', 7, 60, false);
    expect(colors.length).toBe(0);
    done();
  });

  //#endregion
});
