import { getIntention } from "@/lib/match/pitcherBatterFight/pitcherSide/getIntention";
import { getDirection } from "@/lib/match/pitcherBatterFight/pitcherSide/getDirection";
import { getPitchLocationXY } from "@/lib/match/pitcherBatterFight/pitcherSide/getPitchLocationXY";
import { getIntendedPitchLocationXY } from "@/lib/match/pitcherBatterFight/pitcherSide/getIntendedPitchLocationXY";
import { getAdjustedCommand } from "@/lib/match/pitcherBatterFight/pitcherSide/getAdjustedCommand";
export function generatePitchLocation(pitchType:string, record:any, STRIKEZONE_WIDTH:number, STRIKEZONE_HEIGHT:number) {
    const intention:string = getIntention(record.ballCount, record.strikeCount, record.pitcher.activeness);
    const direction:string[] = getDirection(intention, record.ballCount, record.strikeCount, pitchType, record.pitcher.battingPitchingArm);
    const [intendedLocationX, intendedLocationY]:number[] = getIntendedPitchLocationXY(intention, direction, STRIKEZONE_WIDTH, STRIKEZONE_HEIGHT);
    //adjust command based on situation and mentality.
    const adjustedCommand:number = getAdjustedCommand(pitchType, record)
    const [locationX, locationY]:number[] = getPitchLocationXY(intendedLocationX, intendedLocationY, adjustedCommand, STRIKEZONE_WIDTH, STRIKEZONE_HEIGHT); 
    return [locationX, locationY]




}