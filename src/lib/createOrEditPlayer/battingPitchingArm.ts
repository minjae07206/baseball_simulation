/**
 * Returns a pitching / batting Arm randomly, but adjusts formula to position.
 * @param {string} [mainPosition] - given position of the player
 * @returns {string} - pitching / batting Arm in String
 */
import { getRandomValueBasedOnProbability } from "@/lib/random/getRandomWithProbability";
export function generateBattingPitchingArm(mainPosition: string): string {
    let battingPitchingArm:string = "";
    const randomValue = Math.random();
    if (mainPosition === "pitcher") {
        const possibleArmWithProbability = [
            {value: "LeftLeft", probability: 0.18},
            {value: "LeftRight", probability: 0.09},
            {value: "RightRight", probability: 0.72},
            {value: "RightLeft", probability: 0.005},
            {value: "RightBoth", probability: 0.004},
            {value: "LeftBoth", probability: 0.0008},
            {value: "BothLeft", probability: 0.0001},
            {value: "BothRight", probability: 0.0001},
        ]
        battingPitchingArm = getRandomValueBasedOnProbability(possibleArmWithProbability)
    } else if (
        mainPosition === "catcher" || 
        mainPosition === "secondBase" ||
        mainPosition === "thirdBase" ||
        mainPosition === "shortStop"
    ) {
        const possibleArmWithProbability = [
            {value: "RightRight", probability: 0.595},
            {value: "RightLeft", probability: 0.39},
            {value: "RightBoth", probability: 0.015},
        ]
        battingPitchingArm = getRandomValueBasedOnProbability(possibleArmWithProbability)
    } else {
        const possibleArmWithProbability = [
            {value: "LeftLeft", probability: 0.08},
            {value: "LeftRight", probability: 0.005},
            {value: "RightRight", probability: 0.488},
            {value: "RightLeft", probability: 0.402},
            {value: "RightBoth", probability: 0.02},
            {value: "LeftBoth", probability: 0.005}
        ]
        battingPitchingArm = getRandomValueBasedOnProbability(possibleArmWithProbability)
    }

    return battingPitchingArm;
}