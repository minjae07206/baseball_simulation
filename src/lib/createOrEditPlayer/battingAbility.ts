import { getRandomNumberBetweenTwoInputs } from "@/lib/random/getRandomNumber";
/**
 * Given the position of the player(e.g pitcher, catcher), returns the battingAbility stat.
 * @param {string} [mainPosition] - given position of the player
 * @returns {number} - stat for battingAbility
 */

export function generateBattingAbility(mainPosition:string):number {
    if (mainPosition === "pitcher") {
        return getRandomNumberBetweenTwoInputs(1, 30)
    } else if (mainPosition === "shortStop" || mainPosition === "secondBase") {
        return getRandomNumberBetweenTwoInputs(20, 99)
    } else {
        return getRandomNumberBetweenTwoInputs(40, 99)
    }
}