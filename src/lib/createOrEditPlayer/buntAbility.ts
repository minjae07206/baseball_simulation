import { getRandomNumberBetweenTwoInputs } from "@/lib/random/getRandomNumber";
/**
 * Given the position of the player(e.g pitcher, catcher), returns the buntAbility stat.
 * @param {string} [mainPosition] - given position of the player
 * @returns {number} - stat for buntAbility
 */

export function generateBuntAbility(mainPosition:string):number {
    if (mainPosition === "pitcher") {
        return getRandomNumberBetweenTwoInputs(1, 30)
    } else {
        return getRandomNumberBetweenTwoInputs(20, 99)
    }
}