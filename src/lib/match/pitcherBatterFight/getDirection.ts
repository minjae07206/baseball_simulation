export function getDirection(intention:string, ballCount:number, strikeCount:number, pitchType:string, pitchArm:string):string[] {
    const vertical = "center";
    const horizontal = "center";
    // the pitcher should try to throw right down the middle if its 3-0;
    if (intention === "strike" && ballCount === 3 && strikeCount === 0) {
        return [horizontal, vertical];
    }

    if (intention === "strike" && strikeCount === 3)

    return [horizontal, vertical]




}

