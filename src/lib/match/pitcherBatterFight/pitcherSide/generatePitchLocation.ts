import { getIntention } from "@/lib/match/pitcherBatterFight/pitcherSide/getIntention";
import { getDirection } from "@/lib/match/pitcherBatterFight/pitcherSide/getDirection";
import { getPitchLocationXY } from "@/lib/match/pitcherBatterFight/pitcherSide/getPitchLocationXY";
import { getIntendedPitchLocationXY } from "@/lib/match/pitcherBatterFight/pitcherSide/getIntendedPitchLocationXY";
export function generatePitchLocation(pitchType:string, record:any) {
    const STRIKEZONE_WIDTH = 43.18;
    const STRIKEZONE_HEIGHT = record.batter.height * 0.5635 - record.batter.height * 0.2764 
    const intention:string = getIntention(record.ballCount, record.strikeCount, record.pitcher.activeness);
    const direction:string[] = getDirection(intention, record.ballCount, record.strikeCount, pitchType, record.pitcher.battingPitchingArm);
    const [intendedLocationX, intendedLocationY]:number[] = getIntendedPitchLocationXY(intention, direction, STRIKEZONE_WIDTH, STRIKEZONE_HEIGHT);
    //adjust command based on situation and mentality.
    const adjustedCommand:number = getAdjustedCommand(record)
    const [locationX, locationY]:number[] = getPitchLocationXY(intendedLocationX, intendedLocationY, record.pitcher.command, STRIKEZONE_WIDTH, STRIKEZONE_HEIGHT); 
    return [locationX, locationY]




}