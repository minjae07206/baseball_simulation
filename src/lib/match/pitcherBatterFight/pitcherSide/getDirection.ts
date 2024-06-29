export function getDirection(intention: string, ballCount: number, strikeCount: number, pitchType: string, battingPitchingArm: string): string[] {
    const zones = [
        ["left", "top"], ["left", "center"], ["left", "bottom"],
        ["center", "top"], ["center", "center"], ["center", "bottom"],
        ["right", "top"], ["right", "center"], ["right", "bottom"]
    ];
    let leftTopProbability = 0;
    let leftCenterProbability = 0;
    let leftBottomProbability = 0;
    let centerCenterProbability = 0;
    let centerTopProbability = 0;
    let centerBottomProbability = 0;
    let rightTopProbability = 0;
    let rightCenterProbability = 0;
    let rightBottomProbability = 0;
    // the pitcher should try to throw right down the middle if its 3-0;
    if (intention === "strike" && ballCount === 3 && strikeCount === 0) {
        return ["center", "center"];
    }

    if (pitchType === "four_seam_fastball" || pitchType === "two_seam_fastball" || pitchType === "sinker") {
        if (intention === "strike") {
            leftTopProbability = 0.05;
            leftCenterProbability = 0.17;
            leftBottomProbability = 0.14;
            centerCenterProbability = 0.11;
            centerTopProbability = 0.05;
            centerBottomProbability = 0.12;
            rightTopProbability = 0.05;
            rightCenterProbability = 0.17;
            rightBottomProbability = 0.14;
        } else {
            //intention === "ball"
            leftTopProbability = 0.13;
            leftCenterProbability = 0.16;
            leftBottomProbability = 0.00;
            centerCenterProbability = 0.00;
            centerTopProbability = 0.31;
            centerBottomProbability = 0.11;
            rightTopProbability = 0.13;
            rightCenterProbability = 0.16;
            rightBottomProbability = 0.00;
        }
    } else if (pitchType === "slider") {
        if (battingPitchingArm.slice(0, 4) === "left") {
            if (intention === "strike") {
                leftTopProbability = 0.15;
                leftCenterProbability = 0.25;
                leftBottomProbability = 0.20;
                centerCenterProbability = 0.13;
                centerTopProbability = 0.05;
                centerBottomProbability = 0.05;
                rightTopProbability = 0.02;
                rightCenterProbability = 0.1;
                rightBottomProbability = 0.05;
            } else {
                leftTopProbability = 0.01;
                leftCenterProbability = 0.26;
                leftBottomProbability = 0.37;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.03;
                centerBottomProbability = 0.26;
                rightTopProbability = 0.01;
                rightCenterProbability = 0.03;
                rightBottomProbability = 0.03
            }
        } else {
            //Pitching Arm of pitcher is right
            if (intention === "strike") {
                leftTopProbability = 0.02;
                leftCenterProbability = 0.1;
                leftBottomProbability = 0.05;
                centerCenterProbability = 0.13;
                centerTopProbability = 0.05;
                centerBottomProbability = 0.05;
                rightTopProbability = 0.15;
                rightCenterProbability = 0.25;
                rightBottomProbability = 0.20;
            } else {
                leftTopProbability = 0.01;
                leftCenterProbability = 0.03;
                leftBottomProbability = 0.03;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.03;
                centerBottomProbability = 0.26;
                rightTopProbability = 0.01;
                rightCenterProbability = 0.26;
                rightBottomProbability = 0.37
            }
        }
    } else if (pitchType === "cutter") {
        if (battingPitchingArm.slice(0, 4) === "left") {
            if (intention === "strike") {
                leftTopProbability = 0.18;
                leftCenterProbability = 0.25;
                leftBottomProbability = 0.18;
                centerCenterProbability = 0.13;
                centerTopProbability = 0.09;
                centerBottomProbability = 0.09;
                rightTopProbability = 0.02;
                rightCenterProbability = 0.03;
                rightBottomProbability = 0.03;
            } else {
                leftTopProbability = 0.05;
                leftCenterProbability = 0.35;
                leftBottomProbability = 0.20;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.22;
                centerBottomProbability = 0.15;
                rightTopProbability = 0.01;
                rightCenterProbability = 0.01;
                rightBottomProbability = 0.01;
            }
        } else {
            //Pitching Arm of pitcher is right
            if (intention === "strike") {
                leftTopProbability = 0.02;
                leftCenterProbability = 0.03;
                leftBottomProbability = 0.03;
                centerCenterProbability = 0.13;
                centerTopProbability = 0.09;
                centerBottomProbability = 0.09;
                rightTopProbability = 0.18;
                rightCenterProbability = 0.25;
                rightBottomProbability = 0.18;
            } else {
                leftTopProbability = 0.01;
                leftCenterProbability = 0.01;
                leftBottomProbability = 0.01;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.22;
                centerBottomProbability = 0.15;
                rightTopProbability = 0.05;
                rightCenterProbability = 0.35;
                rightBottomProbability = 0.20;
            }
        }
    } else if (pitchType === "curveball") {
        if (battingPitchingArm.slice(0, 4) === "left") {
            if (intention === "strike") {
                leftTopProbability = 0.01;
                leftCenterProbability = 0.05;
                leftBottomProbability = 0.10;
                centerCenterProbability = 0.33;
                centerTopProbability = 0.15;
                centerBottomProbability = 0.20;
                rightTopProbability = 0.01;
                rightCenterProbability = 0.05;
                rightBottomProbability = 0.10;
            } else {
                leftTopProbability = 0.05;
                leftCenterProbability = 0.01;
                leftBottomProbability = 0.01;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.05;
                centerBottomProbability = 0.53;
                rightTopProbability = 0.00;
                rightCenterProbability = 0.1;
                rightBottomProbability = 0.25;
            }
        } else {
            //Pitching Arm of pitcher is right
            if (intention === "strike") {
                leftTopProbability = 0.01;
                leftCenterProbability = 0.05;
                leftBottomProbability = 0.10;
                centerCenterProbability = 0.33;
                centerTopProbability = 0.15;
                centerBottomProbability = 0.20;
                rightTopProbability = 0.01;
                rightCenterProbability = 0.05;
                rightBottomProbability = 0.10;
            } else {
                leftTopProbability = 0.00;
                leftCenterProbability = 0.1;
                leftBottomProbability = 0.25;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.05;
                centerBottomProbability = 0.53;
                rightTopProbability = 0.05;
                rightCenterProbability = 0.01;
                rightBottomProbability = 0.01;
            }
        }
    } else if (pitchType === "changeup" || pitchType === "circle_changeup") {
        if (battingPitchingArm.slice(0, 4) === "left") {
            if (intention === "strike") {
                leftTopProbability = 0.02;
                leftCenterProbability = 0.06;
                leftBottomProbability = 0.10;
                centerCenterProbability = 0.15;
                centerTopProbability = 0.05;
                centerBottomProbability = 0.25;
                rightTopProbability = 0.06;
                rightCenterProbability = 0.15;
                rightBottomProbability = 0.16;
            } else {
                leftTopProbability = 0.00;
                leftCenterProbability = 0.04;
                leftBottomProbability = 0.01;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.01;
                centerBottomProbability = 0.56;
                rightTopProbability = 0.06;
                rightCenterProbability = 0.21;
                rightBottomProbability = 0.11;
            }
        } else {
            //Pitching Arm of pitcher is right
            if (intention === "strike") {
                leftTopProbability = 0.06;
                leftCenterProbability = 0.15;
                leftBottomProbability = 0.16;
                centerCenterProbability = 0.15;
                centerTopProbability = 0.05;
                centerBottomProbability = 0.25;
                rightTopProbability = 0.02;
                rightCenterProbability = 0.06;
                rightBottomProbability = 0.10;
            } else {
                leftTopProbability = 0.06;
                leftCenterProbability = 0.21;
                leftBottomProbability = 0.11;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.01;
                centerBottomProbability = 0.56;
                rightTopProbability = 0.00;
                rightCenterProbability = 0.04;
                rightBottomProbability = 0.01;
            }
        }
    } else if (pitchType === "forkball" || pitchType === "splitter") {
        if (battingPitchingArm.slice(0, 4) === "left") {
            if (intention === "strike") {
                leftTopProbability = 0.01;
                leftCenterProbability = 0.01;
                leftBottomProbability = 0.20;
                centerCenterProbability = 0.10;
                centerTopProbability = 0.01;
                centerBottomProbability = 0.27;
                rightTopProbability = 0.06;
                rightCenterProbability = 0.14;
                rightBottomProbability = 0.2;
            } else {
                leftTopProbability = 0.00;
                leftCenterProbability = 0.04;
                leftBottomProbability = 0.06;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.01;
                centerBottomProbability = 0.63;
                rightTopProbability = 0.06;
                rightCenterProbability = 0.05;
                rightBottomProbability = 0.15;
            }
        } else {
            //Pitching Arm of pitcher is right
            if (intention === "strike") {
                leftTopProbability = 0.06;
                leftCenterProbability = 0.14;
                leftBottomProbability = 0.20;
                centerCenterProbability = 0.10;
                centerTopProbability = 0.01;
                centerBottomProbability = 0.27;
                rightTopProbability = 0.01;
                rightCenterProbability = 0.01;
                rightBottomProbability = 0.2;
            } else {
                leftTopProbability = 0.06;
                leftCenterProbability = 0.05;
                leftBottomProbability = 0.15;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.01;
                centerBottomProbability = 0.63;
                rightTopProbability = 0.00;
                rightCenterProbability = 0.04;
                rightBottomProbability = 0.06;
            }
        }
    } else if (pitchType === "screwball") {
        if (battingPitchingArm.slice(0, 4) === "left") {
            if (intention === "strike") {
                leftTopProbability = 0.02;
                leftCenterProbability = 0.05;
                leftBottomProbability = 0.06;
                centerCenterProbability = 0.11;
                centerTopProbability = 0.04;
                centerBottomProbability = 0.15;
                rightTopProbability = 0.13;
                rightCenterProbability = 0.18;
                rightBottomProbability = 0.26;
                //
            } else {
                leftTopProbability = 0.03;
                leftCenterProbability = 0.05;
                leftBottomProbability = 0.06;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.01;
                centerBottomProbability = 0.15;
                rightTopProbability = 0.15;
                rightCenterProbability = 0.23;
                rightBottomProbability = 0.32;
            }
        } else {
            //Pitching Arm of pitcher is right
            if (intention === "strike") {
                leftTopProbability = 0.13;
                leftCenterProbability = 0.18;
                leftBottomProbability = 0.26;
                centerCenterProbability = 0.11;
                centerTopProbability = 0.04;
                centerBottomProbability = 0.15;
                rightTopProbability = 0.02;
                rightCenterProbability = 0.05;
                rightBottomProbability = 0.06;
            } else {
                leftTopProbability = 0.15;
                leftCenterProbability = 0.23;
                leftBottomProbability = 0.32;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.01;
                centerBottomProbability = 0.15;
                rightTopProbability = 0.03;
                rightCenterProbability = 0.05;
                rightBottomProbability = 0.06;
            }
        }
    } else if (pitchType === "knuckleball") {
        if (battingPitchingArm.slice(0, 4) === "left") {
            if (intention === "strike") {
                leftTopProbability = 0.05;
                leftCenterProbability = 0.18;
                leftBottomProbability = 0.19;
                centerCenterProbability = 0.18;
                centerTopProbability = 0.05;
                centerBottomProbability = 0.20;
                rightTopProbability = 0.05;
                rightCenterProbability = 0.05;
                rightBottomProbability = 0.05;
            } else {
                leftTopProbability = 0.01;
                leftCenterProbability = 0.39;
                leftBottomProbability = 0.25;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.03;
                centerBottomProbability = 0.23;
                rightTopProbability = 0.01;
                rightCenterProbability = 0.05;
                rightBottomProbability = 0.03;
            }
        } else {
            //Pitching Arm of pitcher is right
            if (intention === "strike") {
                leftTopProbability = 0.05;
                leftCenterProbability = 0.05;
                leftBottomProbability = 0.05;
                centerCenterProbability = 0.18;
                centerTopProbability = 0.05;
                centerBottomProbability = 0.20;
                rightTopProbability = 0.05;
                rightCenterProbability = 0.18;
                rightBottomProbability = 0.19;
            } else {
                leftTopProbability = 0.01;
                leftCenterProbability = 0.05;
                leftBottomProbability = 0.03;
                centerCenterProbability = 0.00;
                centerTopProbability = 0.03;
                centerBottomProbability = 0.23;
                rightTopProbability = 0.01;
                rightCenterProbability = 0.39;
                rightBottomProbability = 0.25;
            }
        }
    }
    let probabiltyList = [
        leftTopProbability, leftCenterProbability, leftBottomProbability,
        centerTopProbability, centerCenterProbability, centerBottomProbability,
        rightTopProbability, rightCenterProbability, rightBottomProbability
    ]
    const random = Math.random();
    let cumulativeProbability = 0.0;
    let finalResult = "centerTop"
    for (let index = 0; index < probabiltyList.length; index++) {
        cumulativeProbability += probabiltyList[index];
        if (random < cumulativeProbability) {
            return zones[index]
        }
    }
    if (intention === "strike") {
        return ["center", "center"];
    } else {
        return ["center", "top"];
    }
    




}


