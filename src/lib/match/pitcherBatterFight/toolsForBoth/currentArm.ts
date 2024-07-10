export function getCurrentArm (pitcher:any, batter:any) {
    let hitterArm:string = "";
    let pitcherArm:string = "";
    let againstHitterStat = 0;
    let againstPitcherStat = 0;
    // most of the time, its just going to be left and right.
    if (batter.battingPitchingArm.slice(-5) === "Left") {
        hitterArm = "Left";
    } else if (batter.battingPitchingArm.slice(-5) === "Right") {
        hitterArm = "Right"
    }

    if (pitcher.battingPitchingArm.slice(0,4) === "Left") {
        pitcherArm = "Left";
    } else if (batter.battingPitchingArm.slice(0, 5) === "Right") {
        pitcherArm = "Right"
    }
    // odd cases when one or both side is "Both".
    // the pitcher needs to choose first
    // if both pitcher and hitter are "Both"
    if (pitcher.battingPitchingArm.slice(0, 4) === "Both" && batter.battingPitchingArm.slice(-4) === "Both") {
        // when both pitcher and hitter are "Both" armed, the pitcher needs to choose first and chooses their main arm.
        if (pitcher.mainArm === "Right") {
            pitcherArm = "Right";
            hitterArm = "Left";
        } else {
            pitcherArm = "Left";
            hitterArm = "Right";
        }
    } else if (pitcher.battingPitchingArm.slice(0, 4) === "Both") {
        if (batter.battingPitchingArm.slice(-4) === "Left") {
            hitterArm = "Left"
            pitcherArm = "Left"
        } else {
            hitterArm = "Right";
            pitcherArm = "Right"
        }
        
    } else if (batter.battingPitchingArm.slice(-4) === "Both") {
        if (pitcher.battingPitchingArm.slice(-4) === "Left") {
            hitterArm = "Right"
            pitcherArm = "Left"
        } else {
            hitterArm = "Left";
            pitcherArm = "Right";
        }
    }
    // check if the pitcher is sidearm or under. If so, the pitcher arm becomes sidearm under
    if (pitcher.pitchingArmStyle === "under" || pitcher.pitchingArmStyle === "sidearm") {
        pitcherArm = "sidearmUnder";
    }

    return [pitcherArm, hitterArm];
}