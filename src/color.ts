/**
 * @license
 * Copyright © 2000-2018 Burning Glass Technologies.
 *
 * All rights are reserved. Reproduction or transmission in whole or in part, in
 * any form or by any means, electronic, mechanical or otherwise, is prohibited
 * without the prior written consent of Burning Glass Technologies.
 */

import * as color from 'color';
import * as Enums from './Enums';
import { IColorOptions } from './IColorOptions';

export class Color {
  /**
   * Tests whether a given color is a valid HEX color.
   *
   * @date 2018-09-10
   * @public
   * @param {string} inputColor - The color to test.
   * @returns {boolean} - true if the input color is a valid HEX color, else false.
   * @memberof Color
   */
  public static isValidHex(inputColor: string): boolean {
    if (!inputColor || typeof inputColor !== 'string') {
      return false;
    }

    if (inputColor.substring(0, 1) === '#') {
      inputColor = inputColor.substring(1);
    }

    switch (inputColor.length) {
      case 3:
        return /^[0-9A-F]{3}$/i.test(inputColor);
      case 6:
        return /^[0-9A-F]{6}$/i.test(inputColor);
      case 8:
        return /^[0-9A-F]{8}$/i.test(inputColor);
      default:
        return false;
    }
  }

  /**
   * Validates whether the string passed in is a valid RGB/RGBA color
   *
   * @static
   * @param {string} rgb
   * @returns
   * @memberof Color
   */
  public static isValidRgb(rgb: string) {
    const regExValidRgb = /^rgba?\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)(,\s*[01]?\.?\d*)?\)$/;
    if (regExValidRgb.test(rgb)) {
      return true;
    }
    return false;
  }

  /**
   * Creates a color palatte based on the main {inputColor}
   *
   * @static
   * @param {string} inputColor - The color to use as the basis for the color list
   * @param {number} numberColors - The number of colours to create in the list
   * @param {number} shiftAmount - The total amount by which the {inputColor} will have changed from first color to last
   * @param {string} mixColor - The color to mix with {inputColor}
   * @param {number} rotate -
   * @param {number} saturation -
   * @returns {string[]}
   * @memberof Color
   */
  public static getColorPalette(options: IColorOptions): string[] {
    options.mixColor = options.mixColor || Enums.MixColor.White;
    options.rotate = options.rotate || 0;
    options.saturation = options.saturation || 0;

    const colorsList: string[] = [];
    options.inputColor = this.isValidHex(options.inputColor)
      ? options.inputColor
      : this.errorColor;

    let step: number;
    for (step = 0; step < options.numberColors; step++) {
      if (this.isValidHex(options.inputColor)) {
        colorsList.push(this.getColor(options, step));
      }
    }

    return colorsList;
  }

  /**
   * Get a list of hues based on the color provided
   *
   * @static
   * @param {string} inputColor
   * @param {number} numberColors
   * @param {number} shiftAmount
   * @param {boolean} [asHex]
   * @returns {string[]}
   * @memberof Color
   */
  public static getHues(
    inputColor: string,
    numberColors: number,
    shiftAmount: number,
    asHex?: boolean
  ): string[] {
    const options: IColorOptions = {
      inputColor,
      numberColors,
      shiftAmount,
      mixColor: Enums.MixColor.Black,
      rotate: 0, // Set to 0 so that we get hues of the same color, based on {inputColor}
      saturation: 0,
      asHex
    };

    const colorsList: string[] = [];

    let step: number;
    for (step = 0; step < numberColors; step++) {
      // Get an equal number of darker and lighter shades, if an uneven number is requested then create more darker colors
      if (step === Math.ceil(numberColors / 2)) {
        options.mixColor = Enums.MixColor.White;
        colorsList.reverse();
      }

      if (this.isValidHex(inputColor)) {
        colorsList.push(this.getColor(options, step));
      }
    }

    // If we've not done any light colors then we will still need to reverse the colors so they run from dark to light
    if (options.mixColor === Enums.MixColor.Black) {
      colorsList.reverse();
    }

    return colorsList;
  }

  /**
   * Gets a list of darker hues based on the color provided
   *
   * @static
   * @param {string} inputColor
   * @param {number} numberColors
   * @param {number} shiftAmount
   * @param {boolean} [asHex]
   * @returns {string[]}
   * @memberof Color
   */
  public static getDarkHues(
    inputColor: string,
    numberColors: number,
    shiftAmount: number,
    asHex?: boolean
  ): string[] {
    const options: IColorOptions = {
      inputColor,
      numberColors,
      shiftAmount,
      mixColor: Enums.MixColor.Black,
      rotate: 0, // Set to 0 so that we get hues of the same color, based on {inputColor}
      saturation: 0,
      asHex
    };

    const colorsList: string[] = [];

    let step: number;
    for (step = 0; step < numberColors; step++) {
      if (this.isValidHex(inputColor)) {
        colorsList.push(this.getColor(options, step));
      }
    }

    // Reverse the colors so they run from dark to light
    colorsList.reverse();

    return colorsList;
  }

  /**
   * Gets a list of lighter hues based on the color provided
   *
   * @static
   * @param {string} inputColor
   * @param {number} numberColors
   * @param {number} shiftAmount
   * @param {boolean} [asHex]
   * @returns {string[]}
   * @memberof Color
   */
  public static getLightHues(
    inputColor: string,
    numberColors: number,
    shiftAmount: number,
    asHex?: boolean
  ): string[] {
    const options: IColorOptions = {
      inputColor,
      numberColors,
      shiftAmount,
      mixColor: Enums.MixColor.White,
      rotate: 0, // Set to 0 so that we get hues of the same color, based on {inputColor}
      saturation: 0,
      asHex
    };

    const colorsList: string[] = [];

    let step: number;
    for (step = 0; step < numberColors; step++) {
      if (this.isValidHex(inputColor)) {
        colorsList.push(this.getColor(options, step));
      }
    }

    return colorsList;
  }

  /**
   *
   *
   * @static
   * @param {string} backgroundColor
   * @returns {string}
   * @memberof Color
   */
  public static getFontColor(backgroundColor: string): string {
    return color(backgroundColor).isLight() ? '#444' : '#FFF';
  }

  /**
   * Converts an RGB color to HEX
   *
   * @static
   * @param {color} rgb
   * @returns
   * @memberof Color
   */
  public static asHex(rgb: string): string {
    if (this.isValidRgb(rgb)) {
      return color(rgb).hex();
    }

    return null;
  }

  public static asRgb(hex: string): object {
    if (this.isValidHex(hex)) {
      return color(hex).object();
    }

    return null;
  }

  private static errorColor: string = 'transparent';

  //#region PRIVATE FUNCTIONS

  /**
   * Generates a color based on the parameters passed in
   *
   * @private
   * @static
   * @param {IColorOptions} options
   * @param {number} index
   * @returns {string}
   * @memberof Color
   */
  private static getColor(options: IColorOptions, index: number): string {
    const givenColor: string = this.isValidHex(options.inputColor)
      ? options.inputColor
      : this.errorColor;

    const colorRgb: color = color(givenColor)
      .rotate(((index + 1) / options.numberColors) * -options.rotate)
      .saturate(
        ((index + 1) / options.numberColors) * (options.saturation / 100)
      )
      .mix(
        color(options.mixColor),
        ((options.shiftAmount / 100) * (index + 1)) / options.numberColors
      );

    return typeof options.asHex === 'undefined' || options.asHex === true
      ? colorRgb.hex()
      : colorRgb.string();
  }

  //#endregion
}
