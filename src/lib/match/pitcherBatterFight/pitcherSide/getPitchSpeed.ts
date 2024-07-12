import { getAdjustedStatForBoth } from "../toolsForBoth/adjustedStatForBoth";

function getRandomFloat(min:number, max:number) {
    return Math.random() * (max - min) + min;
}

export function getPitchSpeed(pitchType:string, record:any) {
    let speed:number = 0;
    let tick:number = 1;
    let four_seam_fastballLowerBound:number = 129.48;
    // 50 = 143.2
    // 99 = 156
    // 1 129.4
    const four_seam_fastballTick:number = 0.28

    if (pitchType === "four_seam_fastball") {
        speed = four_seam_fastballLowerBound;
        tick = four_seam_fastballTick;
    }

    for (let count = 1; count < record.pitcher.pitcherSpeed; count++) {
        speed += tick
    }

    // get a random speed in +- 5 range
    speed = getRandomFloat(speed - 5.0, speed + 5.0);
    //round to 1 decimal place
    const roundedspeed = Math.round(speed * 10) / 10;
    // if bullpen, increase speed by 3kmph
    if (record.pitcherPosition !== "SP") {
        speed += 3;
    }
    
    // adjust to condition
    if (record.pitcher.condition > 50) {
        for (let count = 0; count < record.pitchercondition - 50; count += 1) {
            speed += 0.1
        }
    } else {
        for (let count = 50; count > record.pitcher.condition; count -= 1) {
            speed -= 0.1
        }
    }
    // adjust speed if its the weaker arm.
    speed = getAdjustedStatForBoth(speed, record.pitcherCurrentArm, record.pitcher.mainArm, record.pitcher.pitchingLeftRightGap);
    // just in case the pitch speed is too low
    if (speed < 60) {
        return 60;
    }
    return speed;
}