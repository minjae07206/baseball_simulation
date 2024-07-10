export function getAdjustedStatForBoth(stat:number, currentArm:string, mainArm:string, leftRightGap:number) {
    // if there is no differnce between left and right, return the original stat
    if (leftRightGap === 0 || currentArm === mainArm) {
        return stat;
    }

    // when currentArm is not the mainArm, you get some minuses. 
    for (let index = 0; index < leftRightGap; index++) {
        stat -= 1;
    }
    return stat;
}