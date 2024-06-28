import { getIntention } from "@/lib/match/pitcherBatterFight/getIntention";
import { getDirection } from "@/lib/match/pitcherBatterFight/getDirection";
export function generatePitchLocation(pitchType:string, record:any) {
    const STRIKEZONE_WIDTH = 43.18;
    const intention:string = getIntention(record.ballCount, record.strikeCount, record.pitcher.activeness);
    const direction:string[] = getDirection(intention, record.ballCount, record.strikeCount, pitchType, record.pitcher.pitchArm);

}