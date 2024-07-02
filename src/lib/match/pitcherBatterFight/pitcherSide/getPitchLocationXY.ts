function getRandomFloat(min:number, max:number) {
    return Math.random() * (max - min) + min;
}

export function getPitchLocationXY (intendedLocationX:number, intendedLocationY:number, adjustedCommand:number, STRIKEZONE_WIDTH:number, STRIKEZONE_HEIGHT:number) {
    const BOX_WIDTH = STRIKEZONE_WIDTH * 3;
    const BOX_HEIGHT = 190;
    const MIN_BOX_LENGTH = 5;
    const INCREMENT = 0.5;
    
    let boxLength = MIN_BOX_LENGTH;
    const maxIterations = Math.max(99 - adjustedCommand, 0); // Ensure non-negative iterations

    for (let tick = 0; tick < maxIterations; tick++) {
        boxLength += INCREMENT;
    }

    const widthRange = [Math.max(0, intendedLocationX - boxLength), Math.min(intendedLocationX + boxLength, BOX_WIDTH)];
    const heightRange = [Math.max(0, intendedLocationY - boxLength), Math.min(intendedLocationY + boxLength, BOX_HEIGHT)];

    const pitchXCoordinate = getRandomFloat(widthRange[0], widthRange[1]);
    const pitchYCoordinate = getRandomFloat(heightRange[0], heightRange[1]);
    // Todo: Maybe a chance for a total random pitch, or a pitch towards a center as a sign of mistake?

    return [pitchXCoordinate, pitchYCoordinate];
}