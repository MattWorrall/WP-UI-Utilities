/**
 * @license
 * Copyright © 2000-2018 Burning Glass Technologies.
 *
 * All rights are reserved. Reproduction or transmission in whole or in part, in
 * any form or by any means, electronic, mechanical or otherwise, is prohibited
 * without the prior written consent of Burning Glass Technologies.
 */
export declare class Color {
    /**
     * Tests whether a given color is a valid HEX color.
     *
     * @date 2018-09-10
     * @public
     * @param {string} inputColor - The color to test.
     * @returns {boolean} - true if the input color is a valid HEX color, else false.
     * @memberof Color
     */
    static isValidHex(inputColor: string): boolean;
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
    static getColorPalatte(inputColor: string, numberColors: number, shiftAmount: number, mixColor?: string, rotate?: number, saturation?: number): string[];
    static getHues(inputColor: string, numberColors: number, shiftAmount: number): string[];
    private static errorColor;
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
    private static getColor;
}
