// Define the getRandomFloat function
function getRandomFloat(min:number, max:number) {
    return Math.random() * (max - min) + min;
}

// Define the getIntendedPitchLocationXY function
export function getIntendedPitchLocationXY(intention:string, direction:string[], STRIKEZONE_WIDTH:number, STRIKEZONE_HEIGHT:number) {
    const BOX_HEIGHT = 190;
    const BOX_WIDTH = STRIKEZONE_WIDTH * 3;
    const ranges = {
        topStrike: [(BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2, (BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2 + (STRIKEZONE_HEIGHT / 3)],
        centerVerticalStrike: [(BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2 + (STRIKEZONE_HEIGHT / 3), (BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2 + (STRIKEZONE_HEIGHT / 3 * 2)],
        bottomStrike: [(BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2 + (STRIKEZONE_HEIGHT / 3 * 2), (BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2 + STRIKEZONE_HEIGHT],
        leftStrike: [(BOX_WIDTH - STRIKEZONE_WIDTH) / 2, (BOX_WIDTH - STRIKEZONE_WIDTH) / 2 + (STRIKEZONE_WIDTH / 3)],
        centerHorizontalStrike: [(BOX_WIDTH - STRIKEZONE_WIDTH) / 2 + (STRIKEZONE_WIDTH / 3), (BOX_WIDTH - STRIKEZONE_WIDTH) / 2 + (STRIKEZONE_WIDTH / 3 * 2)],
        rightStrike: [(BOX_WIDTH - STRIKEZONE_WIDTH) / 2 + (STRIKEZONE_WIDTH / 3 * 2), (BOX_WIDTH - STRIKEZONE_WIDTH) / 2 + STRIKEZONE_WIDTH],
        topBall: [25, (BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2],
        bottomBall: [(BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2 + STRIKEZONE_HEIGHT, BOX_HEIGHT - 25],
        leftBall: [0, (BOX_WIDTH - STRIKEZONE_WIDTH) / 2],
        rightBall: [(BOX_WIDTH - STRIKEZONE_WIDTH) / 2 + STRIKEZONE_WIDTH, BOX_WIDTH]
    };
    let xCoordinate:number = 0;
    let yCoordinate:number = 0;
    if (intention === "strike") {
        // horizontal
        if (direction[0] === "left") {
            xCoordinate = getRandomFloat(ranges.leftStrike[0], ranges.leftStrike[1]);
        } else if (direction[0] === "center") {
            xCoordinate = getRandomFloat(ranges.centerHorizontalStrike[0], ranges.centerHorizontalStrike[1]);
        } else if (direction[0] === "right") {
            xCoordinate = getRandomFloat(ranges.rightStrike[0], ranges.rightStrike[1]);
        }

        // vertical
        if (direction[1] === "top") {
            yCoordinate = getRandomFloat(ranges.topStrike[0], ranges.topStrike[1]);
        } else if (direction[1] === "center") {
            yCoordinate = getRandomFloat(ranges.centerVerticalStrike[0], ranges.centerVerticalStrike[1]);
        } else if (direction[1] === "bottom") {
            yCoordinate = getRandomFloat(ranges.bottomStrike[0], ranges.bottomStrike[1]);
        }

    } else {
        // horizontal
        if (direction[0] === "left") {
            xCoordinate = getRandomFloat(ranges.leftBall[0], ranges.leftBall[1]);
        } else if (direction[0] === "center") {
            xCoordinate = getRandomFloat(ranges.centerHorizontalStrike[0], ranges.centerHorizontalStrike[1]);
        } else if (direction[0] === "right") {
            xCoordinate = getRandomFloat(ranges.rightBall[0], ranges.rightBall[1]);
        }

        // vertical
        if (direction[1] === "top") {
            yCoordinate = getRandomFloat(ranges.topBall[0], ranges.topBall[1]);
        } else if (direction[1] === "center") {
            yCoordinate = getRandomFloat(ranges.centerVerticalStrike[0], ranges.centerVerticalStrike[1]);
        } else if (direction[1] === "bottom") {
            yCoordinate = getRandomFloat(ranges.bottomBall[0], ranges.bottomBall[1]);
        }
    }
    return [xCoordinate, yCoordinate];
}
