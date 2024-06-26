import { generatePitchType } from "@/lib/match/generatePitchType";

export function pitcherBatterFight(record:any) {
    const pitchType = generatePitchType(record.pitcher);
    while (record.strikeCount < 3 || record.ballCount < 4) {
        //do some in between stuff. sometimes 견제 if there are people on bases.
        //inBetweenStuff(record)
        //during in between stuff, there can be a score because during run down something happens.
        //determine ball type()
        break;
        //determine ball location()
        //pitch()
        //for batter based on the pitch do stuff
        
    }
}