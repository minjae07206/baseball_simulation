export function generatePitchType(pitcher:any){
    //How to decide pitch type:
    //PitchType is determined by pitchStat
    //first, get the highestPitchStat type. then based on the difference it is decided.
    //but, max is 70% if 2 pitch or more
    const pitchTypes = pitcher.pitchTypeStats[0]
    let maxPitchValue = 0;
    let pitchTypeCount = 0;
    for (const [key, value] of Object.entries(pitchTypes)) {
        if (key === "playerId") {
            continue;
        }
        if (value === 0) {
            continue;
        }
        console.log(key, value)
    }
}