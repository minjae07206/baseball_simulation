import { getAdjustedStatForBoth } from "../toolsForBoth/adjustedStatForBoth";

export function getSwingOrWait(isInStrikeZone:boolean, zone:string, pitchType:string, [locationX, locationY]:number[], record:any, STRIKEZONE_WIDTH:number, STRIKEZONE_HEIGHT:number) {

    // things needed:
    /**
     * 선구안 -> 선구안이 좋으면 ?????. 스트라이크에서 멀리 떨어지는 공은 참고, 스트라이크 존 안에 들어오는 공 위주로 스윙한다. 
     * 선구안이 좋아도 멀리 있는 공을 타격하는 배드볼 히터가 있다????? 아니다.
     * 이치로는 존 밖에 있는 공에 대한 헛스윙율이 낮았고, 컨택율은 높다.
     * 고영민은 삼진도 높고 볼넷도 높다. 본인 존이 매우 작다.
     * 선구안이 안좋으면 멀리떨어지는 공에도 스윙을 하고, 걸치는 공에도 스윙을 한다.
     * left or right hitter . if both, need pitcher to decide 투구 궤적에 따른 스윙여부 결정
     * activeness? more likeley to swing?
     * 선구안이 좋으면 좋을수록 스트라이크존 안에 있는 공만 때린다. 
     * 적극성이 좋으면 스트라이크가 오는 공에 거의 무조건 스윙이 나가고, 아니면 기다린다.(선구안이 좋아도) 
     * 
     * ball count. if 3 ball, usually wait. if 2 strike, likely to swing to bad balls
     * pitch location
     * 게스히터 vs 공보고공친다.
     * 극단적 스윙? 스윙노스윙과는 상관없음
     * 게스히팅을 하면 홈런 확률 업, 루킹 업
     * 컨택이 좋으면 공보고 공치기?
     * 컨디션?
     * 적극성?
     * 좌우언 상성? 
     * 스윙 확률이라는 variable을 만든다. 0~100%.
     * 볼카운트가 3볼이면 노스윙
     * 볼카운트가 2스트라이크면 스윙
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
    let activenessProportion:number = 0;
    let battingEyeProportion:number = 0;
    let stuffProportion:number = 0;
    // for zones in the strike zone, it will be initialProbabiliy + eye - stuff
    // the initialProbabilities are numbers when both eye and stuff is 0;
    let initialSwingProbability = 0;
    if (zone === "zone1") { // very middle
        // in the best case, the battingProbability should go up to 1. in the worst case, it should be 50%?
        // mlb average for zone 1 + 2 is 73% swing rate. that means when 상성, 컨디션 is 50, it should be around 70%
        // 선구안이 진짜 안좋고 구위가 진짜 좋아도 60%는 가운데 스윙한다.
        // the initial Swing Probability is assuming stuff and eye is 50, a very average player.
        // activeness는 마이너스만 시킨다?
        initialSwingProbability = 0.9;
        battingEyeProportion = 0.001; // effects at most 0.3
        stuffProportion = 0.001;
    } else if (zone === "zone2") { // middle but surrounding the very middle
        initialSwingProbability = 0.69;
        battingEyeProportion = 0.002;
        stuffProportion = 0.002;
    } else if (zone === "zone3" || zone === "zone5") { // top left and right corners
        initialSwingProbability = 0.4;
        battingEyeProportion = 0.001;
        stuffProportion = 0.0015; 
    } else if (zone === "zone4") { // top center
        initialSwingProbability = 0.6;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;
    } else if (zone === "zone6" || zone === "zone7") { // left and right sides.
        initialSwingProbability = 0.6;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;
    } else if (zone === "zone8" || zone === "zone10") { // bottom left and right corners
        initialSwingProbability = 0.4;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;
    } else if (zone === "zone9") { // bottom center
        initialSwingProbability = 0.45;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;
    // for zones outside the strike zone, it will be initialProbability - eye + stuff
    } else if (zone === "zone11" || zone === "zone13") { // left and right top corners, most inner zones
        initialSwingProbability = 0.41
        battingEyeProportion = 0.001;
        stuffProportion = 0.001;
    } else if (zone === "zone12") { // center top zone, most inner part
        initialSwingProbability = 0.5;
        battingEyeProportion = 0.001;
        stuffProportion = 0.001;
    } else if  (zone === "zone14" || zone === "zone15") { // left and right side zones.
        initialSwingProbability = 0.4;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015
    } else if (zone === "zone16" || zone === "zone18") { // left and right bottom corner, most inner zones
        initialSwingProbability = 0.33;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015
    } else if (zone === "zone17") { // bottom center, most inner zone
        initialSwingProbability = 0.37;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;
    } else if (zone === "zone19" || zone === "zone21") {// top left and right corners, middle depth.
        initialSwingProbability = 0.05;
        battingEyeProportion = 0.001;
        stuffProportion = 0.001
    } else if (zone === "zone20") { // top center, middle depth.
        initialSwingProbability = 0.1;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;
    } else if (zone ==="zone22" || zone === "zone23") { // left and right side, middle zone
        initialSwingProbability = 0.25;
        battingEyeProportion = 0.001;
        stuffProportion = 0.001
    } else if (zone ==="zone24" || zone ==="zone26") { // left and right bottom corners, middle depth
        initialSwingProbability = 0.3;
        battingEyeProportion = 0.002;
        stuffProportion = 0.002;
    } else if (zone === "zone26") { // bottom center, middle depth
        initialSwingProbability = 0.3;
        battingEyeProportion = 0.002;
        stuffProportion = 0.002;
    } else if (zone === "zone27" || zone === "zone29") { // top left and right corners, most outer zone.
        initialSwingProbability = 0.01;
        battingEyeProportion = 0.0007;
        stuffProportion = 0.0007;
    } else if (zone === "zone28") { // top center zone, most outer layer
        initialSwingProbability = 0.02;
        battingEyeProportion = 0.0007;
        stuffProportion = 0.0007;
    } else if (zone === "zone30" || zone === "zone31") { // left and right side, most outer zone.
        initialSwingProbability = 0.03;
        battingEyeProportion = 0.0007;
        stuffProportion = 0.0007
    } else if (zone === "zone32" || zone === "zone34") { // left and right bottom corners, most outer layer.
        initialSwingProbability = 0.07
    } else if (zone === "zone33") { // bottom center, most outer layer
        initialSwingProbability = 0.1;
        battingEyeProportion = 0.001;
        stuffProportion = 0.001;
    }
    let swingProbability:number = 0;

    if (isInStrikeZone) {
        swingProbability = initialSwingProbability + ((record.batter.battingEye - 50) * battingEyeProportion) - ((record.pitcher.stuff - 50) * stuffProportion);
    } else {
        swingProbability = initialSwingProbability - ((record.batter.battingEye - 50) * battingEyeProportion) + ((record.pitcher.stuff - 50) * stuffProportion);
    }
    
    swingProbability = Math.max(swingProbability, 1);
    swingProbability = Math.min(0, swingProbability);
    return "swing";
}