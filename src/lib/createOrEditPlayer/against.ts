import { getRandomNumberBetweenTwoInputs } from "@/lib/random/getRandomNumber";
/**
 * Given the Pitching Arm and the Pitching Type(Sidearm, Overhand, etc), returns the againstLeftHitter stat.
 * @param {string} [mainPosition] - given position of the player
 * @param {string} [battingPitchingArm] - given battingPitchingArm(e.g. LeftLeft)
 * @param {string} [pitchingArmStyle] - given pitchingArmStyle(e.g. Sidearm, Overhand)
 * @returns {number} - stat for againstLeftHitter
 */
export function generateAgainstLeftHitter(mainPosition: string, battingPitchingArm: string, pitchingArmStyle: string): number {
    let againstLeftHitter: number = 0
    if (mainPosition === 'pitcher') {
        if (pitchingArmStyle === "Overhand" || pitchingArmStyle === "Three_quarters") {
            if (battingPitchingArm.slice(0, 4) === "Left") {
                againstLeftHitter = getRandomNumberBetweenTwoInputs(50, 99)
            } else {
                againstLeftHitter = getRandomNumberBetweenTwoInputs(20, 75)
            }
        } else {
            if (pitchingArmStyle === "Sidearm" || pitchingArmStyle === "Under") {
                if (battingPitchingArm.slice(0, 4) === "Left") {
                    againstLeftHitter = getRandomNumberBetweenTwoInputs(70, 99)
                } else {
                    againstLeftHitter = getRandomNumberBetweenTwoInputs(20, 85)
                }
            }
        }

    } else {
        if (pitchingArmStyle === "Overhand" || pitchingArmStyle === "Three_quarters") {
            if (battingPitchingArm.slice(0, 4) === "Left") {
                againstLeftHitter = getRandomNumberBetweenTwoInputs(20, 70)
            } else {
                againstLeftHitter = getRandomNumberBetweenTwoInputs(20, 50)
            }
        } else {
            if (pitchingArmStyle === "Sidearm" || pitchingArmStyle === "Under") {
                if (battingPitchingArm.slice(0, 4) === "Left") {
                    againstLeftHitter = getRandomNumberBetweenTwoInputs(40, 70)
                } else {
                    againstLeftHitter = getRandomNumberBetweenTwoInputs(10, 50)
                }
            }
        }
    }
    return againstLeftHitter
}

/**
 * Given the Pitching Arm and the Pitching Type(Sidearm, Overhand, etc), returns the againstRightHitter stat.
 * @param {string} [mainPosition] - given position of the player
 * @param {string} [battingPitchingArm] - given battingPitchingArm(e.g. LeftLeft)
 * @param {string} [pitchingArmStyle] - given pitchingArmStyle(e.g. Sidearm, Overhand)
 * @returns {number} - stat for againstRightHitter
 */
export function generateAgainstRightHitter(mainPosition: string, battingPitchingArm: string, pitchingArmStyle: string): number {
    let againstRightHitter: number = 0
    if (mainPosition === 'pitcher') {
        if (pitchingArmStyle === "Overhand" || pitchingArmStyle === "Three_quarters") {
            if (battingPitchingArm.slice(0, 4) === "Left") {
                againstRightHitter = getRandomNumberBetweenTwoInputs(20, 70)
            } else {
                againstRightHitter = getRandomNumberBetweenTwoInputs(35, 99)
            }
        } else {
            if (pitchingArmStyle === "Sidearm" || pitchingArmStyle === "Under") {
                if (battingPitchingArm.slice(0, 4) === "Left") {
                    againstRightHitter = getRandomNumberBetweenTwoInputs(40, 60)
                } else {
                    againstRightHitter = getRandomNumberBetweenTwoInputs(40, 85)
                }
            }
        }

    } else {
        if (pitchingArmStyle === "Overhand" || pitchingArmStyle === "Three_quarters") {
            if (battingPitchingArm.slice(0, 4) === "Left") {
                againstRightHitter = getRandomNumberBetweenTwoInputs(30, 60)
            } else {
                againstRightHitter = getRandomNumberBetweenTwoInputs(40, 80)
            }
        } else {
            if (pitchingArmStyle === "Sidearm" || pitchingArmStyle === "Under") {
                if (battingPitchingArm.slice(0, 4) === "Left") {
                    againstRightHitter = getRandomNumberBetweenTwoInputs(40, 60)
                } else {
                    againstRightHitter = getRandomNumberBetweenTwoInputs(40, 60)
                }
            }
        }
    }
    return againstRightHitter
}

/**
 * Given the Pitching Arm and the Pitching Type(Sidearm, Overhand, etc), returns the againstLeftPitcher stat.
 * @param {string} [mainPosition] - given position of the player
 * @param {string} [battingPitchingArm] - given battingPitchingArm(e.g. LeftLeft)
 * @returns {number} - stat for againstLeftPitcher
 */
export function generateAgainstLeftPitcher(mainPosition: string, battingPitchingArm: string): number {
    let againstLeftPitcher: number = 0
    if (mainPosition === 'pitcher') {
        if (battingPitchingArm.slice(-4) === "Left") {
            againstLeftPitcher = getRandomNumberBetweenTwoInputs(1, 50);
        } else if (battingPitchingArm.slice(-5) === "Right") {
            againstLeftPitcher = getRandomNumberBetweenTwoInputs(20, 70);
        } else {
            // case when battingArm is Both
            againstLeftPitcher = getRandomNumberBetweenTwoInputs(30, 70);
        }
        
    } else {
        // case when main position is not pitcher, they are hitters generally.
        if (battingPitchingArm.slice(-4) === "Left") {
            againstLeftPitcher = getRandomNumberBetweenTwoInputs(1, 70);
        } else if (battingPitchingArm.slice(-5) === "Right") {
            againstLeftPitcher = getRandomNumberBetweenTwoInputs(40, 99);
        } else {
            // case when battingArm is Both
            againstLeftPitcher = getRandomNumberBetweenTwoInputs(30, 99);
        }
    }

    return againstLeftPitcher;
}

/**
 * Given the Pitching Arm and the Pitching Type(Sidearm, Overhand, etc), returns the againstRightPitcher stat.
 * @param {string} [mainPosition] - given position of the player
 * @param {string} [battingPitchingArm] - given battingPitchingArm(e.g. LeftLeft)
 * @returns {number} - stat for againstRightPitcher
 */
export function generateAgainstRightPitcher(mainPosition: string, battingPitchingArm: string): number {
    let againstRightPitcher: number = 0
    if (mainPosition === 'pitcher') {
        if (battingPitchingArm.slice(-4) === "Left") {
            againstRightPitcher = getRandomNumberBetweenTwoInputs(20, 60);
        } else if (battingPitchingArm.slice(-5) === "Right") {
            againstRightPitcher = getRandomNumberBetweenTwoInputs(1, 60);
        } else {
            // case when battingArm is Both
            againstRightPitcher = getRandomNumberBetweenTwoInputs(30, 70);
        }
        
    } else {
        // case when main position is not pitcher, they are hitters generally.
        if (battingPitchingArm.slice(-4) === "Left") {
            againstRightPitcher = getRandomNumberBetweenTwoInputs(35, 99);
        } else if (battingPitchingArm.slice(-5) === "Right") {
            againstRightPitcher = getRandomNumberBetweenTwoInputs(20, 80);
        } else {
            // case when battingArm is Both
            againstRightPitcher = getRandomNumberBetweenTwoInputs(30, 99);
        }
    }

    return againstRightPitcher;
}

/**
 * Given the Pitching Arm and the Pitching Type(Sidearm, Overhand, etc), returns the againstSidearmUnderPitcher stat.
 * @param {string} [mainPosition] - given position of the player
 * @param {string} [battingPitchingArm] - given battingPitchingArm(e.g. LeftLeft)
 * @returns {number} - stat for againstSidearmUnderPitcher
 */
export function generateAgainstSidearmUnderPitcher(mainPosition: string, battingPitchingArm: string): number {
    let againstSidearmUnderPitcher: number = 0
    if (mainPosition === 'pitcher') {
        if (battingPitchingArm.slice(-4) === "Left") {
            againstSidearmUnderPitcher = getRandomNumberBetweenTwoInputs(1, 50);
        } else if (battingPitchingArm.slice(-5) === "Right") {
            againstSidearmUnderPitcher = getRandomNumberBetweenTwoInputs(1, 50);
        } else {
            // case when battingArm is Both
            againstSidearmUnderPitcher = getRandomNumberBetweenTwoInputs(1, 50);
        }
        
    } else {
        // case when main position is not pitcher, they are hitters generally.
        if (battingPitchingArm.slice(-4) === "Left") {
            againstSidearmUnderPitcher = getRandomNumberBetweenTwoInputs(20, 99);
        } else if (battingPitchingArm.slice(-5) === "Right") {
            againstSidearmUnderPitcher = getRandomNumberBetweenTwoInputs(20, 99);
        } else {
            // case when battingArm is Both
            againstSidearmUnderPitcher = getRandomNumberBetweenTwoInputs(20, 99);
        }
    }

    return againstSidearmUnderPitcher;
}