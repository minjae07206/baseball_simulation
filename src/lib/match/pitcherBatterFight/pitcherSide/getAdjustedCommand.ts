export function getAdjustedCommand(record:any) {
    // command decreases/increases based on mentality and the situation. 
    // if the difference between the scores is more than *, the command is effected.
    let stressScore = 0;
    const scoreDifference:number = Math.abs(record.homeTeamScore - record.awayTeamScore);
    let baseCount:number = 0
    let ignoreStressDueToScoreDifference:boolean = false;
    let ignoreStressDueToBaseCount:boolean = false;
    let ignoreStressDueToLateInning:boolean = false;
    if (record.firstbase !== null) {
        baseCount += 1
    }
    if (record.secondbase !== null) {
        baseCount += 1
    }
    if (record.thirdbase !== null) {
        baseCount += 1
    }
    // whether the bases are loaded or not matters
    // how late it is in the game matters
    // 점수 차이가 많이 안난다. 
    //
    /**
     * 경우의 수:
     * 경기 초반, 아무 주자도 없고 점수 차이도 없다. basecount = false, Lateinning = true, scoreDifference=true
     * 경기 초반, 점수 차이가 없지만 주자는 있다. baseCount = false, Lateinning = true, scoreDifference=true
     * 경기 초반, 점수 차이가 많이 나는데 주자가 없다 basecount = true, late = true, scoreDiff = true 스트레스 아예 없음
     * 경기 초반 점수차이가 많이 나고 주자도 있다 // 위와 동일
     * 경기 후반, 점수차이가 안나고 주자도 없다 basecount = false, late = false, scoreDiff = false
     * 경기 후반, 점수 차이가 없지만 주자는 있다. 위와 동일
     * 경기 후반, 점수 차이가 많이 나는데 주자가 없다 basecount = true, late = true, scoreDiff = true
     * 경기 후반 점수차이가 많이 나고 주자도 있다
     * // mentality가 90 이상이면 최악의 상황에서도 괜찮다.
     */
    if (scoreDifference - baseCount >= 5) {
        // 점수 차이가 많이 나는 경우, 베이스가 차있어도 스트레스가 없다.
        // 점수 차이가 많이 나면, 경기 후반이어도 스트레스가 없다. 
        ignoreStressDueToBaseCount = true
        ignoreStressDueToLateInning = true
    } 
    
    if (record.currentInning <= 5) {
        // 현재 5이닝 이하의 경기 초반이면, 점수차이가 작다고 해서 스트레스는 없다.
        ignoreStressDueToLateInning = true;
        ignoreStressDueToScoreDifference = true;

    }

    // 베이스에 의한 스트레스
    if (ignoreStressDueToBaseCount === false) {
        if (baseCount === 1) {
            stressScore += 10 - scoreDifference
        } else if (baseCount === 2) {
            stressScore += 15 - scoreDifference
        } else if (baseCount === 3) {
            stressScore += 20 - scoreDifference
        }
    }

    // 점수차에 의한 스트레스
    if (ignoreStressDueToScoreDifference === false) {
        if (scoreDifference - baseCount <= 0) {
            stressScore += 40
        } else if (scoreDifference - baseCount === 1) {
            stressScore += 20
        } else if (scoreDifference - baseCount === 2) {
            stressScore += 15
        } else if (scoreDifference - baseCount === 3) {
            stressScore += 10
        } else if (scoreDifference - baseCount === 4) {
            stressScore += 5
        }
    }

    // 경기 후반에 의한 스트레스
    if (ignoreStressDueToLateInning === false) {
        // Max stress is at 9th inning, doesn't change as it goes up to 10, 11, 12
        stressScore += Math.min(record.currentInning * 4 - 8, 9*4 - 8)
    }
    let adjustedStress = Math.round((record.pitcher.mentality - stressScore)*0.8);


    let adjustedCommand:number = Math.max(1, record.pitcher.command + adjustedStress);
    // cannot exeed original command stat
    if (adjustedCommand > record.pitcher.command) {
        adjustedCommand = record.pitcher.command;
    }
    
    // command changing due to pitcher condition
    if (record.pitcher.condition > 50) {
        for (let count = 0; count < record.pitcher.condition - 50; count += 5) {
            adjustedCommand += 1
        }
    } else {
        for (let count = 50; count > record.pitcher.condition; count -= 5) {
            adjustedCommand -= 1
        }
    }
    // cannot exeed 99 or be below 1
    if (adjustedCommand > 99) {
        adjustedCommand = 99;
    } 
    if (adjustedCommand < 1) {
        adjustedCommand = 1
    }
    return adjustedCommand;
}