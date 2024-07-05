function checkLineCircleIntersection(locationX:number, locationY:number, radius:number, A:number, B:number, C:number) {
    //distance from center of the circle to the line
    const distance = Math.abs(A * locationX + B * locationY + C) / Math.sqrt(A*A + B*B);
    // if the distance from center of the circle to the line is less than or equal to the radius, the cirlce is intersecting the line.
    return distance <= radius;

}

export function getIsInStrikeZone(locationX:number, locationY:number, STRIKEZONE_WIDTH:number, STRIKEZONE_HEIGHT:number, BALL_DIAMETER:number):boolean {
    const BALL_RADIUS:number = BALL_DIAMETER / 2;
    // edge of the ball is coordinate plus radius
    const BOX_WIDTH:number = STRIKEZONE_WIDTH * 3;
    const BOX_HEIGHT:number = 190;
    const LEFT_STRIKE_ZONE:number = (BOX_WIDTH - STRIKEZONE_WIDTH) / 2;
    const TOP_STRIKE_ZONE:number = (BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2;
    const RIGHT_STRIKE_ZONE:number = (LEFT_STRIKE_ZONE + STRIKEZONE_WIDTH);
    const BOTTOM_STRIKE_ZONE:number = (TOP_STRIKE_ZONE + STRIKEZONE_HEIGHT);

    // if center of the ball is in zone, then strike
    if (locationX >= LEFT_STRIKE_ZONE && locationX <= RIGHT_STRIKE_ZONE && locationY >= TOP_STRIKE_ZONE && locationY <= BOTTOM_STRIKE_ZONE) {
        return true;
    } 

    // if the center of the ball is out of the zone, have to check if intersecting.
    const touchingTopZone:boolean = checkLineCircleIntersection(locationX, locationY, BALL_RADIUS, 0, 1, TOP_STRIKE_ZONE);
    if (touchingTopZone) {
        return true;
    }

    const touchingBottomZone:boolean = checkLineCircleIntersection(locationX, locationY, BALL_RADIUS, 0, 1, BOTTOM_STRIKE_ZONE);
    if (touchingBottomZone) {
        return true;
    }

    const touchingLeftZone:boolean = checkLineCircleIntersection(locationX, locationY, BALL_RADIUS, 1, 0, -LEFT_STRIKE_ZONE);
    if (touchingLeftZone) {
        return true;
    }

    const touchingRightZone:boolean = checkLineCircleIntersection(locationX, locationY, BALL_RADIUS, 1, 0, -RIGHT_STRIKE_ZONE);
    if (touchingRightZone) {
        return true;
    }
    
    return false;


}

