/**
 * Returns a pitching style randomly, with probabilities adjusted depending on position.
 * @param {string} [mainPosition] - given position of the player
 * @param {string} [battingPitchingArm] - given batting and pitching arm of the player ex) LeftLeft, LeftRight
 * @returns {string} - Pitching style: ex) Overhand, Sidearm
 */
import { getRandomValueBasedOnProbability } from "@/lib/random/getRandomWithProbability";
export function generatePitchingArmStyle(mainPosition: string, battingPitchingArm: string): string {
    let pitchingArmStyle:string = "";
    const randomValue = Math.random();
    if (mainPosition === "pitcher" && battingPitchingArm.slice(0, 5) === "Right") {
        const pitchingArmStyleWithProbability = [
            {value: "Overhand", probability: 0.52},
            {value: "Three_quarters", probability: 0.36},
            {value: "Sidearm", probability: 0.08},
            {value: "Under", probability: 0.04},
        ]
        pitchingArmStyle = getRandomValueBasedOnProbability(pitchingArmStyleWithProbability)
    } else if (mainPosition === "pitcher" && battingPitchingArm.slice(0, 4) === "Left") {
        const possibleArmWithProbability = [
            {value: "Overhand", probability: 0.44},
            {value: "Three_quarters", probability: 0.55},
            {value: "Sidearm", probability: 0.05},
            {value: "Under", probability: 0.05},
        ]
        pitchingArmStyle = getRandomValueBasedOnProbability(possibleArmWithProbability)
    } else {
        const possibleArmWithProbability = [
            {value: "Overhand", probability: 0.56},
            {value: "Three_quarters", probability: 0.438},
            {value: "Sidearm", probability: 0.001},
            {value: "Under", probability: 0.001},
        ]
        pitchingArmStyle = getRandomValueBasedOnProbability(possibleArmWithProbability)
    }

    return pitchingArmStyle;
}