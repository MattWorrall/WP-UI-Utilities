/**
 * @license
 * Copyright © 2000-2018 Burning Glass Technologies.
 *
 * All rights are reserved. Reproduction or transmission in whole or in part, in
 * any form or by any means, electronic, mechanical or otherwise, is prohibited
 * without the prior written consent of Burning Glass Technologies.
 */

import * as color from 'color';

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
  public static getColorPalatte(
    inputColor: string,
    numberColors: number,
    shiftAmount: number,
    mixColor?: string,
    rotate?: number,
    saturation?: number
  ): string[] {
    mixColor = mixColor || 'white';
    rotate = rotate || 0;
    saturation = saturation || 0;

    const colorsList: string[] = [];
    const givenColor: string = this.isValidHex(inputColor) ? inputColor : this.errorColor;

    let step: number;
    for (step = 0; step < numberColors; step++) {
      if (this.isValidHex(inputColor)) {
        colorsList.push(this.getColor(inputColor, numberColors, shiftAmount, mixColor, rotate, saturation, step));
      }
    }

    return colorsList;
  }

  public static getHues(inputColor: string, numberColors: number, shiftAmount: number): string[] {
    let mixColor: string = 'black';
    let rotate: number = 0; // Set to 0 so that we get hues of the same color, based on {inputColor}
    let saturation: number = 0;

    const colorsList: string[] = [];

    let step: number;
    for (step = 0; step < numberColors; step++) {
      // If more than 4 colors have been requested
      if (step === Math.ceil(numberColors / 2)) {
        mixColor = 'white';
      }

      if (this.isValidHex(inputColor)) {
        colorsList.push(this.getColor(inputColor, numberColors, shiftAmount, mixColor, rotate, saturation, step));
      }
    }

    return colorsList;
  }

  private static errorColor: string = 'transparent';

  /**
   *Generates a color based on the parameters passed in
   *
   * @private
   * @static
   * @param {string} inputColor
   * @param {number} numberColors
   * @param {number} shiftAmount
   * @param {string} mixColor
   * @param {number} rotate
   * @param {number} saturation
   * @param {number} index
   * @returns {string}
   * @memberof Color
   */
  private static getColor(
    inputColor: string,
    numberColors: number,
    shiftAmount: number,
    mixColor: string,
    rotate: number,
    saturation: number,
    index: number
  ): string {
    const givenColor: string = this.isValidHex(inputColor) ? inputColor : this.errorColor;

    return color(givenColor)
      .rotate(((index + 1) / numberColors) * -rotate)
      .saturate(((index + 1) / numberColors) * (saturation / 100))
      .mix(color(mixColor), ((shiftAmount / 100) * (index + 1)) / numberColors)
      .string();
  }
}
