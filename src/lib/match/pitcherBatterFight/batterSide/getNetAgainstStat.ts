export function getNetAgainstStat(record:any):number {
    let againstHitterStat:number = 0;
    if (record.hitterCurrentArm === "Left") {
        againstHitterStat = record.pitcher.againstLeftHitter;
    } else {
        againstHitterStat = record.pitcher.againstRightHitter;
    }

    let againstPitcherStat:number = 0;
    if (record.pitcherCurrentArm === "Left") {
        againstPitcherStat = record.batter.againstLeftPitcher;
    } else {
        againstPitcherStat = record.batter.againstRightPitcher;
    } 
    // if its a sidearm under pitcher, change to sidearm under;
    if (record.pitcher.pitchingArmStyle === "Sidearm" || record.pitcher.pitchingArmStyle === "Under") {
        againstPitcherStat = record.batter.againstSidearmUnderPitcher;
    }
    // if positive, hitter has advantage. if negative, pitcher has the advantage.
    const netAgainstStat:number = againstPitcherStat - againstHitterStat;
    return netAgainstStat;
}