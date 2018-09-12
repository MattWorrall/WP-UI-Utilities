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
    static createColorList(inputColor: string, numberColors: number, shiftAmount: number, mixColor?: string, rotate?: number, saturation?: number): string[];
    private static errorColor;
}
