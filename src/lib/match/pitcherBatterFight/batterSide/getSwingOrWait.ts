import { getAdjustedStatForBoth } from "../toolsForBoth/adjustedStatForBoth";
import { getContactOrMiss } from "./getContactOrMiss";
import { getNetAgainstStat } from "./getNetAgainstStat";

export function getSwingOrWaitOrContact(isInStrikeZone:boolean, zone:string, pitchType:string, [locationX, locationY]:number[], record:any, STRIKEZONE_WIDTH:number, STRIKEZONE_HEIGHT:number) {

    // things needed:
    /**
     *
     * 1. 공의 위치를 판단해 얼마나 존에 떨어져있는지를 판단. 즉, 거리를 측정해야 한다.
     * 2. 볼이라면, 선구안이 안좋을수록 멀리 있는 공도 스윙확률이 올라가고, 선구안이 진짜 좋으면 아예 밖에 있는 공은 스윙을 안한다. 
     * 2. 스트라이크라면, 기본적으로 선구안이 좋으면 스윙율이 높고, 아니면 낮다. 
     * 3. 
     * 3. 적극성이 높을수록 존에 들어온 공에 스윙을 하고, 적극성이 낮으면 선구안이 스윙해야 하는 공이라고 해도 안한다.
     * 스트라이크라면 
     * 3. 볼카운트가 불리하면 스윙 확율이 올라가고, 유리하면 내려간다. 
     * 4. 각 상성을 빼고 해서 이긴쪽이 유리한쪽으로. 
     * 예) 좌좌에서 좌투수가 우세하면 볼일때는 스윙확률이 올라가고(헛스윙일 가능성이니까), 스트라이크일때는 스윙확률이 내려간다.
     * 게스히터, 공보고 공치기는 나중에 구현할 수도 있다.
     * 1. 존과 선구안에 따라서 기본 확률이 결정된다. 구위도 있다.
     * 2. 볼카운트가 매우 유리하면 스윙하지 않는다. 매우 적극적이라면 스윙할수도?
     * 2.컨디션, 상성은 맨 마지막에 결정. 컨디션, 상성, 컨디션은 플러스 마이너스 요인이다.
     */ 
    let result:string = "";
    let battingEyeProportion:number = 0;    
    let stuffProportion:number = 0;
    // for zones in the strike zone, it will be initialProbabiliy + eye - stuff
    // the initialProbabilities are numbers when both eye and stuff is 0;
    let initialContactProbability = 0;
    let initialSwingProbability = 0;
    let contactProportion = 0;
    let stuffProportionForContact = 0;
    let meanExitVelocity = 0;
    let standardDeviationExitVelocity = 0;
    let meanVerticalAngle = 0;
    let standardDeviationVerticalAngle = 0;
    if (zone === "zone1") { // very middle
        // in the best case, the battingProbability should go up to 1. in the worst case, it should be 50%?
        // mlb average for zone 1 + 2 is 73% swing rate. that means when 상성, 컨디션 is 50, it should be around 70%
        // 선구안이 진짜 안좋고 구위가 진짜 좋아도 60%는 가운데 스윙한다.
        // the initial Swing Probability is assuming stuff and eye is 50, a very average player.
        // activeness는 마이너스만 시킨다?
        initialSwingProbability = 0.9;
        battingEyeProportion = 0.001; // effects at most 0.3
        stuffProportion = 0.001;
        // initial contactProbability
        initialContactProbability = 0.95;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        //
        meanExitVelocity = 144;
        standardDeviationExitVelocity = 16;
        meanVerticalAngle = 15;
        standardDeviationVerticalAngle = 10;
    } else if (zone === "zone2") { // middle but surrounding the very middle
        initialSwingProbability = 0.69;
        battingEyeProportion = 0.002;
        stuffProportion = 0.002;

        initialContactProbability = 0.9;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 136;
        standardDeviationExitVelocity = 16;
        meanVerticalAngle = 12;
        standardDeviationVerticalAngle = 11;
    } else if (zone === "zone3" || zone === "zone5") { // top left and right corners
        initialSwingProbability = 0.4;
        battingEyeProportion = 0.001;
        stuffProportion = 0.0015; 

        initialContactProbability = 0.75
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 128;
        standardDeviationExitVelocity = 21;
        meanVerticalAngle = 18;
        standardDeviationVerticalAngle = 12;
    } else if (zone === "zone4") { // top center
        initialSwingProbability = 0.6;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;

        initialContactProbability = 0.79
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 132;
        standardDeviationExitVelocity = 20;
        meanVerticalAngle = 17;
        standardDeviationVerticalAngle = 11;
    } else if (zone === "zone6" || zone === "zone7") { // left and right sides.
        initialSwingProbability = 0.6;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;

        initialContactProbability = 0.85;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 133;
        standardDeviationExitVelocity = 17;
        meanVerticalAngle = 14;
        standardDeviationVerticalAngle = 10;
    } else if (zone === "zone8" || zone === "zone10") { // bottom left and right corners
        initialSwingProbability = 0.4;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;

        initialContactProbability = 0.79;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 125;
        standardDeviationExitVelocity = 16;
        meanVerticalAngle = 20;
        standardDeviationVerticalAngle = 13;
    } else if (zone === "zone9") { // bottom center
        initialSwingProbability = 0.45;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;

        initialContactProbability = 0.83;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 128;
        standardDeviationExitVelocity = 21;
        meanVerticalAngle = 19;
        standardDeviationVerticalAngle = 12;
    // for zones outside the strike zone, it will be initialProbability - eye + stuff
    } else if (zone === "zone11" || zone === "zone13") { // left and right top corners, most inner zones
        initialSwingProbability = 0.41
        battingEyeProportion = 0.001;
        stuffProportion = 0.001;

        initialContactProbability = 0.69;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 120;
        standardDeviationExitVelocity = 25;
        meanVerticalAngle = 25;
        standardDeviationVerticalAngle = 15;
    } else if (zone === "zone12") { // center top zone, most inner part
        initialSwingProbability = 0.5;
        battingEyeProportion = 0.001;
        stuffProportion = 0.001;

        initialContactProbability = 0.72;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 118;
        standardDeviationExitVelocity = 24;
        meanVerticalAngle = 27;
        standardDeviationVerticalAngle = 14;
    } else if  (zone === "zone14" || zone === "zone15") { // left and right side zones.
        initialSwingProbability = 0.4;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015

        initialContactProbability = 0.68;
        stuffProportionForContact = 0.0015;
        contactProportion = 0.0015;

        meanExitVelocity = 122;
        standardDeviationExitVelocity = 23;
        meanVerticalAngle = 20;
        standardDeviationVerticalAngle = 13;
    } else if (zone === "zone16" || zone === "zone18") { // left and right bottom corner, most inner zones
        initialSwingProbability = 0.33;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015

        initialContactProbability = 0.75;
        stuffProportionForContact = 0.0015;
        contactProportion = 0.0015;

        meanExitVelocity = 114;
        standardDeviationExitVelocity = 27;
        meanVerticalAngle = 32;
        standardDeviationVerticalAngle = 17;
    } else if (zone === "zone17") { // bottom center, most inner zone
        initialSwingProbability = 0.37;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;

        initialContactProbability = 0.77;
        stuffProportionForContact = 0.0015;
        contactProportion = 0.0015;

        meanExitVelocity = 116;
        standardDeviationExitVelocity = 26;
        meanVerticalAngle = 30;
        standardDeviationVerticalAngle = 16;
    } else if (zone === "zone19" || zone === "zone21") {// top left and right corners, middle depth.
        initialSwingProbability = 0.05;
        battingEyeProportion = 0.001;
        stuffProportion = 0.001

        initialContactProbability = 0.60;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 110;
        standardDeviationExitVelocity = 30;
        meanVerticalAngle = 35;
        standardDeviationVerticalAngle = 20;
    } else if (zone === "zone20") { // top center, middle depth.
        initialSwingProbability = 0.1;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;

        initialContactProbability = 0.62;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 108;
        standardDeviationExitVelocity = 29;
        meanVerticalAngle = 37;
        standardDeviationVerticalAngle = 19;
    } else if (zone ==="zone22" || zone === "zone23") { // left and right side, middle zone
        initialSwingProbability = 0.25;
        battingEyeProportion = 0.001;
        stuffProportion = 0.001

        initialContactProbability = 0.61;
        stuffProportionForContact = 0.0015;
        contactProportion = 0.0015;

        meanExitVelocity = 112;
        standardDeviationExitVelocity = 28;
        meanVerticalAngle = 30;
        standardDeviationVerticalAngle = 18;
    } else if (zone ==="zone24" || zone ==="zone26") { // left and right bottom corners, middle depth
        initialSwingProbability = 0.3;
        battingEyeProportion = 0.002;
        stuffProportion = 0.002;

        initialContactProbability = 0.65;
        stuffProportionForContact = 0.0015;
        contactProportion = 0.0015;

        meanExitVelocity = 104;
        standardDeviationExitVelocity = 32;
        meanVerticalAngle = 42;
        standardDeviationVerticalAngle = 22;
    } else if (zone === "zone26") { // bottom center, middle depth
        initialSwingProbability = 0.3;
        battingEyeProportion = 0.002;
        stuffProportion = 0.002;

        initialContactProbability = 0.68;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 106;
        standardDeviationExitVelocity = 31;
        meanVerticalAngle = 40;
        standardDeviationVerticalAngle = 21;
    } else if (zone === "zone27" || zone === "zone29") { // top left and right corners, most outer zone.
        initialSwingProbability = 0.01;
        battingEyeProportion = 0.0007;
        stuffProportion = 0.0007;

        initialContactProbability = 0.35;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 100;
        standardDeviationExitVelocity = 35;
        meanVerticalAngle = 45;
        standardDeviationVerticalAngle = 25;
    } else if (zone === "zone28") { // top center zone, most outer layer
        initialSwingProbability = 0.02;
        battingEyeProportion = 0.0007;
        stuffProportion = 0.0007;

        initialContactProbability = 0.38;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 98;
        standardDeviationExitVelocity = 34;
        meanVerticalAngle = 47;
        standardDeviationVerticalAngle = 24;
    } else if (zone === "zone30" || zone === "zone31") { // left and right side, most outer zone.
        initialSwingProbability = 0.03;
        battingEyeProportion = 0.0007;
        stuffProportion = 0.0007

        initialContactProbability = 0.39;
        stuffProportionForContact = 0.001;
        contactProportion = 0.001;

        meanExitVelocity = 102;
        standardDeviationExitVelocity = 33;
        meanVerticalAngle = 40;
        standardDeviationVerticalAngle = 23;
    } else if (zone === "zone32" || zone === "zone34") { // left and right bottom corners, most outer layer.
        initialSwingProbability = 0.07
        battingEyeProportion = 0.001;
        stuffProportion = 0.001

        initialContactProbability = 0.45;
        stuffProportionForContact = 0.0015;
        contactProportion = 0.0015;

        meanExitVelocity = 94;
        standardDeviationExitVelocity = 37;
        meanVerticalAngle = 52;
        standardDeviationVerticalAngle = 27;
    } else if (zone === "zone33") { // bottom center, most outer layer
        initialSwingProbability = 0.1;
        battingEyeProportion = 0.001;
        stuffProportion = 0.001;

        initialContactProbability = 0.48;
        stuffProportionForContact = 0.0015;
        contactProportion = 0.0015;

        meanExitVelocity = 96;
        standardDeviationExitVelocity = 37;
        meanVerticalAngle = 52;
        standardDeviationVerticalAngle = 27;
    }
    let swingProbability:number = 0;

    const adjustedBattingEye = getAdjustedStatForBoth(record.batter.battingEye, record.hitterCurrentArm, record.batter.mainArm, record.batter.battingLeftRightGap);
    const adjustedstuff = getAdjustedStatForBoth(record.pitcher.stuff, record.pitcherCurrentArm, record.pitcher.mainArm, record.pitcher.pitchingLeftRightGap);
    if (isInStrikeZone) {
        swingProbability = initialSwingProbability + ((adjustedBattingEye - 50) * battingEyeProportion) - ((adjustedstuff - 50) * stuffProportion);
    } else {
        swingProbability = initialSwingProbability - ((adjustedBattingEye - 50) * battingEyeProportion) + ((adjustedstuff - 50) * stuffProportion);
    }
    
    
    // probability change due to against left right under stats
    // get against left right sidearmUnder comparisons.
    const netAgainstStat:number = getNetAgainstStat(record);

    if (isInStrikeZone) {
        swingProbability += netAgainstStat * 0.002     
    } else {
        swingProbability -= netAgainstStat * 0.002
    }    

    // probability change due to batter's condition.
    swingProbability += ((record.batter.condition - 50) * 0.0015);

    // probability change due to batter's activeness
    if (record.ballCount === 3 && record.strikeCount === 0) {
        swingProbability = 0.02
    } else if (record.strike == 2 && (isInStrikeZone)) {
        swingProbability += 0.1
    } else {
        swingProbability += (record.batter.activeness - 50) * 0.004
    }
    swingProbability = Math.max(swingProbability, 1);
    swingProbability = Math.min(0, swingProbability);
    

    const randomValue = Math.random();
    if (randomValue < swingProbability) {
        result = getContactOrMiss(initialContactProbability, record, contactProportion, stuffProportionForContact);
    } else {
        return "wait";
    }

    if (result === "miss") {
        return result;
    } else {
        result = getContactResult(record, initialBallExitSpeed, initialBallExitHorizontalAngle, initialBallExitVerticalAngle)
        // power, stuff, contact, gap-power
        // gap Power leads to more doubles.
        // normal distribution
        // for each zone, determine good-contact-probability
        // and based on contact ability, +- the good contact probability. send this 
        // OR mean exit velocity based on zones. 
        // and based on contact ability, the standard deviation should be lower.
    }
}