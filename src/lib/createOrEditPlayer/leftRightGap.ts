import { getRandomNumberBetweenTwoInputs } from "@/lib/random/getRandomNumber";

export function generatePitchingLeftRightGap(battingPitchingArm:string) {
    // pitching
    if (battingPitchingArm.slice(4) === "Left" || battingPitchingArm.slice(5) === "Right") {
        return 0;
    }

    return getRandomNumberBetweenTwoInputs(0, 30);
}

export function generateBattingLeftRightGap(battingPitchingArm:string) {
    // batting
    if (battingPitchingArm.slice(-4) === "Left" || battingPitchingArm.slice(-5) === "Right") {
        return 0;
    }

    return getRandomNumberBetweenTwoInputs(0, 30);
}


