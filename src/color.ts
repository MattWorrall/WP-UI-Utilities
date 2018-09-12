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
   *
   *
   * @static
   * @param {string} inputColor - The color to use as the basis for the color list
   * @param {number} numberColors - The number of colours to create in the list
   * @param {number} shiftAmount - The total amount by which the {inputColor} will have been lightened/darkened from first color to last
   * @param {string} mixColor -
   * @param {number} rotate
   * @param {number} saturation
   * @returns {string[]}
   * @memberof Color
   */
  public static createColorList(
    inputColor: string,
    numberColors: number,
    shiftAmount: number,
    mixColor: string = 'white',
    rotate: number = 0,
    saturation: number = 0
  ): string[] {
    const colorsList: string[] = [];
    const givenColor: string = this.isValidHex(inputColor) ? inputColor : this.errorColor;

    let step: number;
    for (step = 0; step < numberColors; step++) {
      if (this.isValidHex(inputColor)) {
        colorsList.push(
          color(givenColor)
            .rotate(((step + 1) / numberColors) * -rotate)
            .saturate(((step + 1) / numberColors) * (saturation / 100))
            .mix(color(mixColor), ((shiftAmount / 100) * (step + 1)) / numberColors)
            .string()
        );
      }
    }

    return colorsList;
  }

  private static errorColor: string = 'transparent';
}
