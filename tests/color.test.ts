import expect from 'expect';

import { Color } from '../src/Color';
import { IColorOptions } from '../src/IColorOptions';

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

  //#region isValidRgb

  it('Validates a valid RGB color', done => {
    expect(Color.isValidRgb('rgb(97,54,171)')).toBe(true);
    done();
  });

  it('Validates a valid RGBA color', done => {
    expect(Color.isValidRgb('rgba(255,255,255,0)')).toBe(true);
    done();
  });

  it('Validates an invalid RGB color 1', done => {
    expect(Color.isValidRgb('rgb(321654,54,171)')).toBe(false);
    done();
  });

  it('Validates an invalid RGB color 2', done => {
    expect(Color.isValidRgb('rgb(asd,54,171)')).toBe(false);
    done();
  });

  //#endregion

  //#region getColorPalette

  it('Creates a HEX colour palette based on a valid HEX colour', done => {
    const options: IColorOptions = {
      inputColor: '#3498DB',
      numberColors: 6,
      shiftAmount: 73,
      mixColor: 'black',
      rotate: 100,
      saturation: 0
    };

    const colors = Color.getColorPalette(options);
    console.log(colors);
    expect(colors.length).toBe(6);
    done();
  });

  it('Attempts to create a HEX colour palette based on an invalid HEX colour', done => {
    const options: IColorOptions = {
      inputColor: '#asdf',
      numberColors: 6,
      shiftAmount: 73,
      mixColor: 'black',
      rotate: 100,
      saturation: 0
    };

    const colors = Color.getColorPalette(options);
    console.log(colors);
    expect(colors.length).toBe(0);
    done();
  });

  //#endregion

  //#region getHues

  it('Creates a list of HEX color hues based on a valid HEX colour', done => {
    const colors = Color.getHues('#6136AB', 7, 60);
    expect(colors.length).toBe(7);
    done();
  });

  it('Creates a list of RGB color hues based on a valid HEX colour', done => {
    const colors = Color.getHues('#6136AB', 7, 60, false);
    expect(colors.length).toBe(7);
    done();
  });

  it('Does not create a list of color hues when an invalid HEX colour is provided', done => {
    const colors = Color.getHues('yutvou', 7, 60);
    expect(colors.length).toBe(0);
    done();
  });

  //#endregion

  //#region getLightHues

  it('Creates a list of lighter HEX color hues based on a valid HEX colour', done => {
    const colors = Color.getLightHues('#6136AB', 7, 60);
    expect(colors.length).toBe(7);
    done();
  });

  it('Creates a list of lighter RGB color hues based on a valid HEX colour', done => {
    const colors = Color.getLightHues('#6136AB', 7, 60, false);
    expect(colors.length).toBe(7);
    done();
  });

  it('Does not create a list of lighter color hues when an invalid HEX colour is provided', done => {
    const colors = Color.getLightHues('sdsgsd', 7, 60, false);
    expect(colors.length).toBe(0);
    done();
  });

  //#endregion

  //#region getDarkHues

  it('Creates a list of darker HEX color hues based on a valid HEX colour', done => {
    const colors = Color.getDarkHues('#6136AB', 7, 60);
    expect(colors.length).toBe(7);
    done();
  });

  it('Creates a list of darker RGB color hues based on a valid HEX colour', done => {
    const colors = Color.getDarkHues('#6136AB', 7, 60, false);
    expect(colors.length).toBe(7);
    done();
  });

  it('Does not create a list of darker color hues when an invalid HEX colour is provided', done => {
    const colors = Color.getDarkHues('sdsgsd', 7, 60, false);
    expect(colors.length).toBe(0);
    done();
  });

  //#endregion

  //#region asRgb

  it('Converts a valid 6 character HEX color to a valid RGB color', done => {
    const rgb = Color.asRgb('#6136AB');
    const expectedRgb = {
      r: 97,
      g: 54,
      b: 171
    };

    expect(rgb).toEqual(expectedRgb);
    done();
  });

  it('Converts a valid 3 character HEX color to a valid RGB color', done => {
    const rgb = Color.asRgb('#fff');
    const expectedRgb = {
      r: 255,
      g: 255,
      b: 255
    };
    expect(rgb).toEqual(expectedRgb);
    done();
  });

  it('Converts a valid 8 character HEX color to a valid RGB color', done => {
    const rgb = Color.asRgb('#FFFFFF00');
    const expectedRgb = {
      r: 255,
      g: 255,
      b: 255,
      alpha: 0
    };

    expect(rgb).toEqual(expectedRgb);
    done();
  });

  it('Attempts to converts an invalid 6 character HEX color to an RGB color', done => {
    const rgb = Color.asRgb('sdvvsa');

    expect(rgb).toEqual(null);
    done();
  });

  it('Attempts to converts an invalid 3 character HEX color to an RGB color', done => {
    const rgb = Color.asRgb('sdv');

    expect(rgb).toEqual(null);
    done();
  });

  it('Attempts to converts an invalid 8 character HEX color to an RGB color', done => {
    const rgb = Color.asRgb('sdvvaaaa');

    expect(rgb).toEqual(null);
    done();
  });

  //#endregion

  //#region asHex

  it('Converts a valid RGB color to a HEX color', done => {
    const hex = Color.asHex('rgb(255,255,255)');

    expect(hex).toEqual('#FFFFFF');
    done();
  });

  it('Converts a valid RGBA color to a HEX color', done => {
    const hex = Color.asHex('rgb(0, 255, 0, 0.3)');

    expect(hex).toEqual('#00FF00');
    done();
  });

  it('Attempts to converts an invalid RGB color to a HEX color 1', done => {
    const hex = Color.asHex('rgb(aaa,255,255)');

    expect(hex).toEqual(null);
    done();
  });

  it('Attempts to converts an invalid RGB color to a HEX color 2', done => {
    const hex = Color.asHex('rgb(12345,255,255)');

    expect(hex).toEqual(null);
    done();
  });

  it('Attempts to converts an invalid RGBA color to a HEX color 1', done => {
    const hex = Color.asHex('rgb(255,255,255, aaa)');

    expect(hex).toEqual(null);
    done();
  });

  it('Attempts to converts an invalid RGBA color to a HEX color 2', done => {
    const hex = Color.asHex('rgb(12345,255,255,poi)');

    expect(hex).toEqual(null);
    done();
  });

  //#endregion
});
