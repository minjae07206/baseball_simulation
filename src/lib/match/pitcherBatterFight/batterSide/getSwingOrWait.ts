export function getSwingOrWait(pitchType:string, [locationX, locationY]:number[], record:any) {
    // things needed:
    /**
     * 선구안 -> 선구안이 좋으면 ?????. 스트라이크에서 멀리 떨어지는 공은 참고, 대신에 걸치는 공도 스윙을 안한다.
     * 선구안이 좋아도 멀리 있는 공을 타격하는 배드볼 히터가 있다????? 아니다.
     * 이치로는 존 밖에 있는 공에 대한 헛스윙율이 낮았고, 컨택율은 높다.
     * 선구안이 안좋으면 멀리떨어지는 공에도 스윙을 하고, 걸치는 공에도 스윙을 한다.
     * left or right hitter . if both, need pitcher to decide 투구 궤적에 따른 스윙여부 결정
     * activeness? more likeley to swing?
     * 
     * ball count. if 3 ball, usually wait. if 2 strike, likely to swing to bad balls
     * pitch location
     * 게스히터 vs 공보고공친다.
     * 극단적 스윙?
     * 게스히팅을 하면 홈런 확률 업, 루킹 업
     * 컨택이 좋으면 공보고 공치기?
     * 컨디션?
     * 적극성?
     * 좌우언 상성? 
     * 스윙 확률이라는 variable을 만든다. 0~100%.
     * 볼카운트가 3볼이면 노스윙
     * 볼카운트가 2스트라이크면 스윙
     *
     */
    return "swing";
}