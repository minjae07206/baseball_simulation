import { generatePitchType } from "@/lib/match/pitcherBatterFight/pitcherSide/generatePitchType";
import { getSwingOrWait } from "@/lib/match/pitcherBatterFight/batterSide/getSwingOrWait";
import {generatePitchLocation} from "@/lib/match/pitcherBatterFight/pitcherSide/generatePitchLocation";
import { getPitchSpeed } from "@/lib/match/pitcherBatterFight/pitcherSide/getPitchSpeed";
export function pitcherBatterFight(record:any) {
    const pitchType = generatePitchType(record.pitcher);
    const [locationX, locationY]:number[] = generatePitchLocation(pitchType, record);
    const pitchObject = {
        speed: 0,
        pitchType: pitchType,
    }
    console.log(record.batter)
    // determine speed
    const pitchSpeed:number = getPitchSpeed(pitchType, record.pitcher.pitchSpeed, record.pitcherPosition, record.pitcher.condition);
    // swing or wait;
    const swingOrWait = getSwingOrWait(pitchType, [locationX, locationY], record)
    // if swing, hit or miss
    // if hit, return the result
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