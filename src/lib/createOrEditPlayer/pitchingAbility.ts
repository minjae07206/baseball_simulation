import { getRandomNumberBetweenTwoInputs } from "@/lib/random/getRandomNumber";
/**
 * Given the position of the player(e.g pitcher, catcher), returns the pitchingAbility stat.
 * @param {string} [mainPosition] - given position of the player
 * @returns {number} - stat for pitchingAbility
 */

export function generatePitchingAbility(mainPosition:string):number {
    if (mainPosition === "pitcher") {
        return getRandomNumberBetweenTwoInputs(30, 99)
    } else {
        return getRandomNumberBetweenTwoInputs(1, 30)
    }
}