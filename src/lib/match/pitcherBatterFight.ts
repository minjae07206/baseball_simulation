import { generatePitchType } from "@/lib/match/pitcherBatterFight/pitcherSide/generatePitchType";
import { getSwingOrWaitOrContact } from "@/lib/match/pitcherBatterFight/batterSide/getSwingOrWait";
import {generatePitchLocation} from "@/lib/match/pitcherBatterFight/pitcherSide/generatePitchLocation";
import { getPitchSpeed } from "@/lib/match/pitcherBatterFight/pitcherSide/getPitchSpeed";
import { getIsInStrikeZone } from "@/lib/match/pitcherBatterFight/batterSide/getIsInStrikeZone";
import { getZone } from "@/lib/match/pitcherBatterFight/batterSide/getZone";
import { getCurrentArm } from "@/lib/match/pitcherBatterFight/toolsForBoth/currentArm";
import { getContactOrMissOrWait } from "@/lib/match/pitcherBatterFight/batterSide/getContactOrMiss";
export function pitcherBatterFight(record:any) {
    const STRIKEZONE_WIDTH = 43.18; //cm
    const STRIKEZONE_HEIGHT = record.batter.height * 0.5635 - record.batter.height * 0.2764 
    const BALL_DIAMETER = 7.4; //cm
    const pitchType = generatePitchType(record.pitcher);
    // determine currentArm
    const [pitcherCurrentArm, hitterCurrentArm] = getCurrentArm(record.pitcher, record.batter);
    record.pitcherCurrentArm = pitcherCurrentArm;
    record.hitterCurrentArm = hitterCurrentArm;
    console.log(record)
    const [locationX, locationY]:number[] = generatePitchLocation(pitchType, record, STRIKEZONE_WIDTH, STRIKEZONE_HEIGHT);
    const pitchObject = {
        speed: 0,
        pitchType: pitchType,
    }
    // determine speed
    const pitchSpeed:number = getPitchSpeed(pitchType, record);
    // initially determine if ball or strike
    const isInStrikeZone:boolean = getIsInStrikeZone(locationX, locationY, STRIKEZONE_WIDTH, STRIKEZONE_HEIGHT, BALL_DIAMETER);
    // next, classify the zone of the pitch.
    // swing or wait;
    // based on which zone the pitch was thrown, initial swing probability will be determined.
    const zone = getZone(locationX, locationY, isInStrikeZone, STRIKEZONE_WIDTH, STRIKEZONE_HEIGHT)
    const swingOrWait = getSwingOrWaitOrContact(isInStrikeZone, zone, pitchType, [locationX, locationY], record, STRIKEZONE_WIDTH, STRIKEZONE_HEIGHT);
    const contactOrMiss = getContactOrMissOrWait(swingOrWait, zone, [locationX, locationY], record, STRIKEZONE_WIDTH, STRIKEZONE_HEIGHT);
    // const getContactResult // initial result. flyball, linedrive, groundball, hit
    // check Error = if initial result is out, check final result
    // 
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