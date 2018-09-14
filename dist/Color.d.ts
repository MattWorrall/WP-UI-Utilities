/**
 * @license
 * Copyright © 2000-2018 Burning Glass Technologies.
 *
 * All rights are reserved. Reproduction or transmission in whole or in part, in
 * any form or by any means, electronic, mechanical or otherwise, is prohibited
 * without the prior written consent of Burning Glass Technologies.
 */
import { IColorOptions } from './IColorOptions';
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
    static getColorPalette(options: IColorOptions): string[];
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
    static getHues(inputColor: string, numberColors: number, shiftAmount: number, asHex?: boolean): string[];
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
    static getDarkHues(inputColor: string, numberColors: number, shiftAmount: number, asHex?: boolean): string[];
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
    static getLightHues(inputColor: string, numberColors: number, shiftAmount: number, asHex?: boolean): string[];
    /**
     *
     *
     * @static
     * @param {string} backgroundColor
     * @returns {string}
     * @memberof Color
     */
    static getFontColor(backgroundColor: string): string;
    private static errorColor;
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
    private static getColor;
}
