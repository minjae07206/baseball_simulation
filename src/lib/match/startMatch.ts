import { currentRecord } from "./currentRecord";
import { pitcherBatterFight } from "@/lib/match/pitcherBatterFight";
export function startMatch (match:any, actions:any) {
    let homeBattingCount = 0;
    let awayBattingCount = 0;
    const homeStartingLineup = JSON.parse(match.homeStartingLineup);
    const awayStartingLineup = JSON.parse(match.awayStartingLineup);
    const homeBattingOrder = JSON.parse(match.homeBattingOrder);
    const awayBattingOrder = JSON.parse(match.awayBattingOrder);
    const record = {
        pitches: [],
        pitcher: homeStartingLineup.pitcher,
        pitcherPosition: "SP",
        batter: awayBattingOrder[homeBattingCount],
        firstbase: null,
        secondbase: null,
        thirdbase: null,
        ballCount: 0,
        strikeCount: 0,
        outCount: 0,
        special: [],
        result: "pending",
        inningNumber: 1,
        inningTopBottom: "top",
        homeTeamScore: match.homeTeamScore,
        awayTeamScore: match.awayTeamScore,
    }

    const recordResult = pitcherBatterFight(record);
    /*const records = [];
    
    while (false) {
        console.log(match.currentInning);
        
        const recordResult = currentRecord(record);
        if (homeBattingCount === 8) {
           homeBattingCount = 0
        } else {
            homeBattingCount += 1
        }
        records.push(recordResult);
    }
 */
    
    
}