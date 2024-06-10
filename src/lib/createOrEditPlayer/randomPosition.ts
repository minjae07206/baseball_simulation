/**
 * Returns a position based on predefined probabilities.
 * @returns {string} - The position
 */
export function generateRandomPosition(): string {
    const randomValue = Math.random(); // Generates a random number between 0 and 1
    const pitcherChance = 13.7; // 13.7
    const catcherChance = 15.9; // 2.2
    const firstBaseChance = 17.9; // 2.0
    const secondBaseChance = 19.4; // 1.5
    const thirdBaseChance = 20.9; // 1.5
    const shortStopChance = 22.7; // 1.8
    const leftFielderChance = 23.7 + 2/3; // 1 + 2/3
    const centerFielderChance = 24.7 + 4/3;  // 1 + 2/3
    const rightFielderChance = 27.7; // 1 + 2/3
    const designatedHitterChance = 28; // 0.3
    if (randomValue < pitcherChance / 28) {
        return "pitcher";
    } else if (randomValue < catcherChance / 28) {
        return "catcher";
    } else if (randomValue < firstBaseChance / 28) {
        return "firstBase";
    } else if (randomValue < secondBaseChance / 28){
        return "secondBase";
    } else if (randomValue < thirdBaseChance / 28) {
        return "thirdBase";
    } else if (randomValue < shortStopChance / 28) {
        return "shortStop";
    } else if (randomValue < leftFielderChance / 28) {
        return "leftFielder";
    } else if (randomValue < centerFielderChance / 28) {
        return "centerFielder";
    } else if (randomValue < rightFielderChance / 28) {
        return "rightFielder";
    } else {
        return "designatedHitter";
    }
}