import { getAdjustedStatForBoth } from "@/lib/match/pitcherBatterFight/toolsForBoth/adjustedStatForBoth";
import { PrismaClientUnknownRequestError } from "@prisma/client/runtime/react-native.js";
import { getNetAgainstStat } from "./getNetAgainstStat";
export function getContactOrMiss(initialContactProbability:number, record:any, contactProportion:number, stuffProportionForContact:number) {
    let result:string = ""
    let contactProbability:number = 0;
    const adjustedContactStuff = getAdjustedStatForBoth(record.pitcher.stuff, record.pitcherCurrentArm, record.pitcher.mainArm, record.pitcher.pitchingLeftRightGap);
    const adjustedContact = getAdjustedStatForBoth(record.batter.contact, record.hitterCurrentArm, record.batter.mainArm, record.batter.battingLeftRightGap);


    contactProbability = initialContactProbability + ((adjustedContact - 50) * contactProportion) - ((adjustedContactStuff - 50) * stuffProportionForContact);


    // probability change due to left and right
    const netAgainstStat = getNetAgainstStat(record);
    contactProbability += netAgainstStat * 0.002;

    // probability change due to players condition
    contactProbability += ((record.batter.condition - 50) * 0.0015);

    contactProbability = Math.max(contactProbability, 1);
    contactProbability = Math.min(0, contactProbability);
    

    const randomValue = Math.random();
    if (randomValue < contactProbability) {
        return 'contact'
        // 2루수 앞 땅볼, 1루수 뜬공, 파울 아니면 각도와 라인드라이브, 땅볼, 뜬공만 정한 후 수비범위와 능력에 의해서 안타/땅볼을 정한ㄷ. 각 존마다 라인드라이브, 땅볼, 뜬공, 각도 비율을 정한다. 
        // 아니면 상하각도도 정한다 타구속도와, 좌우각도
    } else {
        return "miss"
    }

}