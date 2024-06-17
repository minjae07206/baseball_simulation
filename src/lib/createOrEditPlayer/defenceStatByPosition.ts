import { getRandomNumberBetweenTwoInputs } from "../random/getRandomNumber"

export function generateDefenceStatByPosition(mainPosition: string, battingPitchingArm: string) {
    const defenceStatByPosition = {
        pitcher: 0,
        catcher: 0,
        firstBaseFielder: 0,
        secondBaseFielder: 0,
        thirdBaseFielder: 0,
        shortStop: 0,
        leftFielder: 0,
        centerFielder: 0,
        rightFielder: 0
    }

    const thirdBaseRandomValue = Math.random();
    const secondBaseRandomValue = Math.random();
    const shortStopRandomValue = Math.random();
    const outFielderRandomValue = Math.random();
    const catcherRandomValue = Math.random();
    const firstBaseRandomValue = Math.random();
    const pitcherRandomValue = Math.random();

    if (mainPosition === "pitcher") {
        defenceStatByPosition.pitcher = getRandomNumberBetweenTwoInputs(50, 99);
        if (catcherRandomValue < 0.009 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.catcher = getRandomNumberBetweenTwoInputs(10, 60);
        }
    } else if (mainPosition === "catcher") {
        defenceStatByPosition.catcher = getRandomNumberBetweenTwoInputs(50, 99);
        if (firstBaseRandomValue < 0.05 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.firstBaseFielder = getRandomNumberBetweenTwoInputs(10, 60);
        }
        if (outFielderRandomValue < 0.1) {
            defenceStatByPosition.leftFielder = getRandomNumberBetweenTwoInputs(10, 60);
            defenceStatByPosition.centerFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-10, 10);
            defenceStatByPosition.rightFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-10, 10);
        }
    } else if (mainPosition === "firstBaseFielder") {
        defenceStatByPosition.firstBaseFielder = getRandomNumberBetweenTwoInputs(50, 99);
        if (thirdBaseRandomValue < 0.2 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.thirdBaseFielder = getRandomNumberBetweenTwoInputs(10, defenceStatByPosition.firstBaseFielder);
        }
        if (secondBaseRandomValue < 0.1 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.secondBaseFielder = getRandomNumberBetweenTwoInputs(10, 99);
        }
        if (shortStopRandomValue < 0.05 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.shortStop = getRandomNumberBetweenTwoInputs(10, 99);
        }
        if (outFielderRandomValue < 0.1) {
            defenceStatByPosition.leftFielder = getRandomNumberBetweenTwoInputs(10, 90);
            defenceStatByPosition.centerFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-10, 9);
            defenceStatByPosition.rightFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-10, 9);
        }
        if (catcherRandomValue < 0.01 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.catcher = getRandomNumberBetweenTwoInputs(10, 70);
        }
    } else if (mainPosition === "secondBaseFielder") {
        defenceStatByPosition.secondBaseFielder = getRandomNumberBetweenTwoInputs(50, 99);
        if (thirdBaseRandomValue < 0.3 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.thirdBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (firstBaseRandomValue < 0.2) {
            defenceStatByPosition.firstBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (shortStopRandomValue < 0.3 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.shortStop = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (outFielderRandomValue < 0.03) {
            defenceStatByPosition.leftFielder = getRandomNumberBetweenTwoInputs(10, 90);
            defenceStatByPosition.centerFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-10, 9);
            defenceStatByPosition.rightFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-10, 9);
        }
        if (catcherRandomValue < 0.01 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.catcher = getRandomNumberBetweenTwoInputs(10, 70);
        }
    } else if (mainPosition === "thirdBaseFielder") {
        defenceStatByPosition.thirdBaseFielder = getRandomNumberBetweenTwoInputs(50, 99);
        if (secondBaseRandomValue < 0.15 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.secondBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (firstBaseRandomValue < 0.2) {
            defenceStatByPosition.firstBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (shortStopRandomValue < 0.3 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.shortStop = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (outFielderRandomValue < 0.03) {
            defenceStatByPosition.leftFielder = getRandomNumberBetweenTwoInputs(10, 90);
            defenceStatByPosition.centerFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-10, 9);
            defenceStatByPosition.rightFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-10, 9);
        }
        if (catcherRandomValue < 0.01 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.catcher = getRandomNumberBetweenTwoInputs(10, 70);
        }
    } else if (mainPosition === "shortStop") {
        defenceStatByPosition.shortStop = getRandomNumberBetweenTwoInputs(50, 99);
        if (secondBaseRandomValue < 0.5 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.secondBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (firstBaseRandomValue < 0.2) {
            defenceStatByPosition.firstBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (thirdBaseRandomValue < 0.7 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.thirdBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (outFielderRandomValue < 0.03) {
            defenceStatByPosition.leftFielder = getRandomNumberBetweenTwoInputs(10, 90);
            defenceStatByPosition.centerFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-10, 9);
            defenceStatByPosition.rightFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-10, 9);
        }
        if (catcherRandomValue < 0.01 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.catcher = getRandomNumberBetweenTwoInputs(10, 70);
        }
    } else if (mainPosition === "leftFielder") {
        defenceStatByPosition.leftFielder = getRandomNumberBetweenTwoInputs(50, 99);
        if (secondBaseRandomValue < 0.05 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.secondBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (firstBaseRandomValue < 0.05) {
            defenceStatByPosition.firstBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (shortStopRandomValue < 0.05 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.shortStop = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (thirdBaseRandomValue < 0.05 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.thirdBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        defenceStatByPosition.centerFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-20, 0);
        defenceStatByPosition.rightFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-20, 0);
        if (catcherRandomValue < 0.01 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.catcher = getRandomNumberBetweenTwoInputs(10, 70);
        }
    } else if (mainPosition === "centerFielder") {
        defenceStatByPosition.centerFielder = getRandomNumberBetweenTwoInputs(50, 99);
        if (secondBaseRandomValue < 0.05 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.secondBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (firstBaseRandomValue < 0.05) {
            defenceStatByPosition.firstBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (shortStopRandomValue < 0.05 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.shortStop = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (thirdBaseRandomValue < 0.05 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.thirdBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        defenceStatByPosition.leftFielder = defenceStatByPosition.centerFielder + getRandomNumberBetweenTwoInputs(-5, 0);
        defenceStatByPosition.rightFielder = defenceStatByPosition.centerFielder + getRandomNumberBetweenTwoInputs(-5, 0);
        if (catcherRandomValue < 0.01 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.catcher = getRandomNumberBetweenTwoInputs(10, 70);
        }
    } else if (mainPosition === "rightFielder") {
        defenceStatByPosition.rightFielder = getRandomNumberBetweenTwoInputs(50, 99);
        if (secondBaseRandomValue < 0.05 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.secondBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (firstBaseRandomValue < 0.05) {
            defenceStatByPosition.firstBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (shortStopRandomValue < 0.05 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.shortStop = getRandomNumberBetweenTwoInputs(40, 99);
        }
        if (thirdBaseRandomValue < 0.05 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.thirdBaseFielder = getRandomNumberBetweenTwoInputs(40, 99);
        }
        defenceStatByPosition.centerFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-20, 0);
        defenceStatByPosition.leftFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-20, 0);
        if (catcherRandomValue < 0.01 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.catcher = getRandomNumberBetweenTwoInputs(10, 70);
        }
    } else if (mainPosition === "designatedHitter") {
        if (secondBaseRandomValue < 0.01 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.secondBaseFielder = getRandomNumberBetweenTwoInputs(20, 80);
        }
        if (firstBaseRandomValue < 0.4) {
            defenceStatByPosition.firstBaseFielder = getRandomNumberBetweenTwoInputs(20, 80);
        }
        if (shortStopRandomValue < 0.01 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.shortStop = getRandomNumberBetweenTwoInputs(20, 80);
        }
        if (thirdBaseRandomValue < 0.05 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.thirdBaseFielder = getRandomNumberBetweenTwoInputs(20, 80);
        }
        if (outFielderRandomValue < 0.1) {
            defenceStatByPosition.leftFielder = getRandomNumberBetweenTwoInputs(10, 80);
            defenceStatByPosition.centerFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-10, 9);
            defenceStatByPosition.rightFielder = defenceStatByPosition.leftFielder + getRandomNumberBetweenTwoInputs(-10, 9);
        }
        if (catcherRandomValue < 0.2 && battingPitchingArm.slice(5) === "Right") {
            defenceStatByPosition.catcher = getRandomNumberBetweenTwoInputs(10, 70);
        }
    }

    if (mainPosition !== "pitcher" && pitcherRandomValue < 0.05) {
        defenceStatByPosition.pitcher = getRandomNumberBetweenTwoInputs(10, 70);
    }

    return defenceStatByPosition;
}
