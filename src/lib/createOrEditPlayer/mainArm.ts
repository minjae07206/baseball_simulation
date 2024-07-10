export function generateMainArm(battingPitchingArm:string) {
    if (battingPitchingArm.slice(4) === "Left") {
        return "Left";
    } 
    if (battingPitchingArm.slice(5) === "Right") {
        return "Right";
    } 
    if (battingPitchingArm.slice(-5) === "Right") {
        return "Right";
    } 
    if (battingPitchingArm.slice(-4) === "Left") {
        return "Left";
    } 

    // case when "BothBoth"
    if (battingPitchingArm === "BothBoth") {
        const randomValue = Math.random();
        if (randomValue > 0.25) {
            return "Right";
        } else {
            return "Left";
        }
    }

    return "Right"

}