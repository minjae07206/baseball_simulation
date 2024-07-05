function isPointInRectangle(startingCoordinates:number[], width:number, height:number, locationX:number, locationY:number):boolean {
    if (
        startingCoordinates[0] <= locationX && 
        startingCoordinates[0] >= locationX + width &&
        startingCoordinates[1] <= locationY &&
        startingCoordinates[1] >= locationY + height
    ) {
        return true
    } else {
        return false;
    }
}

export function getZone(locationX:number, locationY:number, isInStrikeZone:boolean, STRIKEZONE_WIDTH:number, STRIKEZONE_HEIGHT:number):string{
    const BOX_WIDTH = STRIKEZONE_WIDTH * 3;
    const BOX_HEIGHT = 190;
    if (isInStrikeZone) {
        // zone 1: very center of the strike zone.
        // in x, y coordinate order
        const zone1X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH / 6);
        const zone1Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT / 6);
        const zone1Width:number = STRIKEZONE_WIDTH / 3;
        const zone1Height:number = STRIKEZONE_HEIGHT / 3;
        const zone1StartingPoint:number[] = [zone1X, zone1Y];
        const isZone1:boolean = isPointInRectangle(zone1StartingPoint, zone1Width, zone1Height, locationX, locationY)
        if (isZone1) {
            return "zone1";
        }
        // zone 2: a rectangle surrounding zone 1, still around the central area of the strike zone.
        //zone1 is inside zone2 so zone1 should be calculated first and returned.
        const zone2X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 2 / 6);
        const zone2Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 2 / 6);
        const zone2Width:number = STRIKEZONE_WIDTH * 2 / 3;
        const zone2Height:number = STRIKEZONE_HEIGHT * 2 / 3;
        const zone2StartingPoint:number[] = [zone2X, zone2Y];
        const isZone2:boolean = isPointInRectangle(zone2StartingPoint, zone2Width, zone2Height, locationX, locationY)
        if (isZone2) {
            return "zone2";
        }

        //zone 3 is the rectangle on the top left of the strike zone.
        const zone3X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 3 / 6);
        const zone3Y:number = BOX_HEIGHT/ 2 - (STRIKEZONE_HEIGHT * 3 / 6);
        const zone3Width:number = STRIKEZONE_WIDTH * 1 / 6;
        const zone3Height:number = STRIKEZONE_HEIGHT * 1 / 6;
        const zone3StartingPoint:number[] = [zone3X, zone3Y];
        const isZone3:boolean = isPointInRectangle(zone3StartingPoint, zone3Width, zone3Height, locationX, locationY)
        if (isZone3) {
            return "zone3";
        }

        // zone 11 is the top left corner, most inner zone. 
        // this is needed to consider pitches that have its central point outside of the strikezone but still is touching the strikezone.
        const zone11X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 4 / 6);
        const zone11Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 4 / 6);
        const zone11Width:number = STRIKEZONE_WIDTH * 2 / 6;
        const zone11Height:number = STRIKEZONE_HEIGHT * 2 / 6;
        const zone11StartingPoint:number[] = [zone11X, zone11Y];
        const isZone11:boolean = isPointInRectangle(zone11StartingPoint, zone11Width, zone11Height, locationX, locationY);
        if (isZone11) {
            return "zone3";
        }

        //zone 4 a rectangle on the top of the strike zone.
        const zone4X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 2 / 6);
        const zone4Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 3 / 6);
        const zone4Width:number = STRIKEZONE_WIDTH * 2 / 3;
        const zone4Height:number = STRIKEZONE_HEIGHT * 1 / 6;
        const zone4StartingPoint:number[] = [zone4X, zone4Y];
        const isZone4:boolean = isPointInRectangle(zone4StartingPoint, zone4Width, zone4Height, locationX, locationY)
        if (isZone4) {
            return "zone4";
        }

        // zone 12: top, most inner zone.
         // this is needed to consider pitches that have its central point outside of the strikezone but still is touching the strikezone.
        const zone12X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 2 / 6);
        const zone12Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 4 / 6);
        const zone12Width:number = STRIKEZONE_WIDTH * 4 / 6;
        const zone12Height:number = STRIKEZONE_HEIGHT * 1 / 6;
        const zone12StartingPoint:number[] = [zone12X, zone12Y];
        const isZone12:boolean = isPointInRectangle(zone12StartingPoint, zone12Width, zone12Height, locationX, locationY);
        if (isZone12) {
            return "zone4";
        }

        //zone 5: rectangle on the top right of the zone. 
        const zone5X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 2 / 6);
        const zone5Y:number = BOX_HEIGHT/ 2 - (STRIKEZONE_HEIGHT * 3 / 6);
        const zone5Width:number = STRIKEZONE_WIDTH * 1 / 6;
        const zone5Height:number = STRIKEZONE_HEIGHT * 1 / 6;
        const zone5StartingPoint:number[] = [zone5X, zone5Y];
        const isZone5:boolean = isPointInRectangle(zone5StartingPoint, zone5Width, zone5Height, locationX, locationY)
        if (isZone5) {
            return "zone5";
        }

        // zone 13 is the top right corner, most inner zone. 
        // this is needed to consider pitches that have its central point outside of the strikezone but still is touching the strikezone.
        const zone13X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 2 / 6);
        const zone13Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 4 / 6);
        const zone13Width:number = STRIKEZONE_WIDTH * 2 / 6;
        const zone13Height:number = STRIKEZONE_HEIGHT * 2 / 6;
        const zone13StartingPoint:number[] = [zone13X, zone13Y];
        const isZone13:boolean = isPointInRectangle(zone13StartingPoint, zone13Width, zone13Height, locationX, locationY);
        if (isZone13) {
            return "zone5";
        }
        //zone 6: rectangle on the left side of the zone. 
        const zone6X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 3 / 6);
        const zone6Y:number = BOX_HEIGHT/ 2 - (STRIKEZONE_HEIGHT * 2 / 6);
        const zone6Width:number = STRIKEZONE_WIDTH * 1 / 6;
        const zone6Height:number = STRIKEZONE_HEIGHT * 2 / 3;
        const zone6StartingPoint:number[] = [zone6X, zone6Y];
        const isZone6:boolean = isPointInRectangle(zone6StartingPoint, zone6Width, zone6Height, locationX, locationY);
        if (isZone6) {
            return "zone6";
        }

        
        // zone 14: the left side, most inner zone. 
        // this is needed to consider pitches that have its central point outside of the strikezone but still is touching the strikezone.
        const zone14X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 4 / 6);
        const zone14Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 2 / 6);
        const zone14Width:number = STRIKEZONE_WIDTH * 1 / 6;
        const zone14Height:number = STRIKEZONE_HEIGHT * 4 / 6;
        const zone14StartingPoint:number[] = [zone14X, zone14Y];
        const isZone14:boolean = isPointInRectangle(zone14StartingPoint, zone14Width, zone14Height, locationX, locationY);
        if (isZone14) {
            return "zone6";
        }

        
        // zone7: rectangle on the right side of the zone.
        const zone7X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 2 / 6);
        const zone7Y:number = BOX_HEIGHT/ 2 - (STRIKEZONE_HEIGHT * 2 / 6);
        const zone7Width:number = STRIKEZONE_WIDTH * 1 / 6;
        const zone7Height:number = STRIKEZONE_HEIGHT * 2 / 3;
        const zone7StartingPoint:number[] = [zone7X, zone7Y];
        const isZone7:boolean = isPointInRectangle(zone7StartingPoint, zone7Width, zone7Height, locationX, locationY);
        if (isZone7) {
            return "zone7";
        }

        // zone 15: the right side, most inner zone. 
        // this is needed to consider pitches that have its central point outside of the strikezone but still is touching the strikezone.
        const zone15X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 3 / 6);
        const zone15Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 2 / 6);
        const zone15Width:number = STRIKEZONE_WIDTH * 1 / 6;
        const zone15Height:number = STRIKEZONE_HEIGHT * 4 / 6;
        const zone15StartingPoint:number[] = [zone15X, zone15Y];
        const isZone15:boolean = isPointInRectangle(zone15StartingPoint, zone15Width, zone15Height, locationX, locationY);
        if (isZone15) {
            return "zone7";
        }

        // zone8: rectangle on the bottom left side of the zone.
        const zone8X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 3 / 6);
        const zone8Y:number = BOX_HEIGHT/ 2 + (STRIKEZONE_HEIGHT * 2 / 6);
        const zone8Width:number = STRIKEZONE_WIDTH * 1 / 6;
        const zone8Height:number = STRIKEZONE_HEIGHT * 1 / 6;
        const zone8StartingPoint:number[] = [zone8X, zone8Y];
        const isZone8:boolean = isPointInRectangle(zone8StartingPoint, zone8Width, zone8Height, locationX, locationY);
        if (isZone8) {
            return "zone8";
        }

        // zone 16: the left bottom corner, most inner zone. 
        // this is needed to consider pitches that have its central point outside of the strikezone but still is touching the strikezone.
        const zone16X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 4 / 6);
        const zone16Y:number = BOX_HEIGHT / 2 + (STRIKEZONE_HEIGHT * 2 / 6);
        const zone16Width:number = STRIKEZONE_WIDTH * 2 / 6;
        const zone16Height:number = STRIKEZONE_HEIGHT * 2 / 6;
        const zone16StartingPoint:number[] = [zone16X, zone16Y];
        const isZone16:boolean = isPointInRectangle(zone16StartingPoint, zone16Width, zone16Height, locationX, locationY);
        if (isZone16) {
            return "zone8";
        }

        // zone9: rectangle on the bottom side of the zone.
        const zone9X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 2 / 6);
        const zone9Y:number = BOX_HEIGHT/ 2 + (STRIKEZONE_HEIGHT * 2 / 6);
        const zone9Width:number = STRIKEZONE_WIDTH * 2 / 3;
        const zone9Height:number = STRIKEZONE_HEIGHT * 1 / 6;
        const zone9StartingPoint:number[] = [zone9X, zone9Y];
        const isZone9:boolean = isPointInRectangle(zone9StartingPoint, zone9Width, zone9Height, locationX, locationY);
        if (isZone9) {
            return "zone9";
        }

        // zone 17: the bottom, most inner zone. 
        // this is needed to consider pitches that have its central point outside of the strikezone but still is touching the strikezone.
        const zone17X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 2 / 6);
        const zone17Y:number = BOX_HEIGHT / 2 + (STRIKEZONE_HEIGHT * 3 / 6);
        const zone17Width:number = STRIKEZONE_WIDTH * 4 / 6;
        const zone17Height:number = STRIKEZONE_HEIGHT * 1 / 6;
        const zone17StartingPoint:number[] = [zone17X, zone17Y];
        const isZone17:boolean = isPointInRectangle(zone17StartingPoint, zone17Width, zone17Height, locationX, locationY);
        if (isZone17) {
            return "zone9";
        }

        //zone10: rectangle on the bottom right side of the zone.
        const zone10X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 2 / 6);
        const zone10Y:number = BOX_HEIGHT/ 2 + (STRIKEZONE_HEIGHT * 2 / 6);
        const zone10Width:number = STRIKEZONE_WIDTH * 1 / 6;
        const zone10Height:number = STRIKEZONE_HEIGHT * 1 / 6;
        const zone10StartingPoint:number[] = [zone10X, zone10Y];
        const isZone10:boolean = isPointInRectangle(zone10StartingPoint, zone10Width, zone10Height, locationX, locationY);
        if (isZone10) {
            return "zone10";
        }

        // zone 18: the right bottom corner, most inner zone. 
        // this is needed to consider pitches that have its central point outside of the strikezone but still is touching the strikezone.
        const zone18X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 2 / 6);
        const zone18Y:number = BOX_HEIGHT / 2 + (STRIKEZONE_HEIGHT * 2 / 6);
        const zone18Width:number = STRIKEZONE_WIDTH * 2 / 6;
        const zone18Height:number = STRIKEZONE_HEIGHT * 2 / 6;
        const zone18StartingPoint:number[] = [zone18X, zone18Y];
        const isZone18:boolean = isPointInRectangle(zone18StartingPoint, zone18Width, zone18Height, locationX, locationY);
        if (isZone18) {
            return "zone10";
        }
    } else {
        // for non-strike zones, it will be divided into 24 sections. 8 sections surrounding the strike zone, and each zone again divided into 3.
        // the most inner zones will be 1/6 blocks wide, then 2/6, then the rest.

        // zone 11 is the top left corner, most inner zone. 
        const zone11X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 4 / 6);
        const zone11Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 4 / 6);
        const zone11Width:number = STRIKEZONE_WIDTH * 2 / 6;
        const zone11Height:number = STRIKEZONE_HEIGHT * 2 / 6;
        const zone11StartingPoint:number[] = [zone11X, zone11Y];
        const isZone11:boolean = isPointInRectangle(zone11StartingPoint, zone11Width, zone11Height, locationX, locationY);
        if (isZone11) {
            return "zone11";
        }

        // zone 12: top, most inner zone.
        const zone12X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 2 / 6);
        const zone12Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 4 / 6);
        const zone12Width:number = STRIKEZONE_WIDTH * 4 / 6;
        const zone12Height:number = STRIKEZONE_HEIGHT * 1 / 6;
        const zone12StartingPoint:number[] = [zone12X, zone12Y];
        const isZone12:boolean = isPointInRectangle(zone12StartingPoint, zone12Width, zone12Height, locationX, locationY);
        if (isZone12) {
            return "zone12";
        }

        // zone 13: is the top right corner, most inner zone. 
        const zone13X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 2 / 6);
        const zone13Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 4 / 6);
        const zone13Width:number = STRIKEZONE_WIDTH * 2 / 6;
        const zone13Height:number = STRIKEZONE_HEIGHT * 2 / 6;
        const zone13StartingPoint:number[] = [zone13X, zone13Y];
        const isZone13:boolean = isPointInRectangle(zone13StartingPoint, zone13Width, zone13Height, locationX, locationY);
        if (isZone13) {
            return "zone13";
        }

        // zone 14: the left side, most inner zone. 
        const zone14X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 4 / 6);
        const zone14Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 2 / 6);
        const zone14Width:number = STRIKEZONE_WIDTH * 1 / 6;
        const zone14Height:number = STRIKEZONE_HEIGHT * 4 / 6;
        const zone14StartingPoint:number[] = [zone14X, zone14Y];
        const isZone14:boolean = isPointInRectangle(zone14StartingPoint, zone14Width, zone14Height, locationX, locationY);
        if (isZone14) {
            return "zone14";
        }

        // zone 15: the right side, most inner zone. 
        const zone15X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 3 / 6);
        const zone15Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 2 / 6);
        const zone15Width:number = STRIKEZONE_WIDTH * 1 / 6;
        const zone15Height:number = STRIKEZONE_HEIGHT * 4 / 6;
        const zone15StartingPoint:number[] = [zone15X, zone15Y];
        const isZone15:boolean = isPointInRectangle(zone15StartingPoint, zone15Width, zone15Height, locationX, locationY);
        if (isZone15) {
            return "zone15";
        }

        // zone 16: the left bottom corner, most inner zone. 
        const zone16X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 4 / 6);
        const zone16Y:number = BOX_HEIGHT / 2 + (STRIKEZONE_HEIGHT * 2 / 6);
        const zone16Width:number = STRIKEZONE_WIDTH * 2 / 6;
        const zone16Height:number = STRIKEZONE_HEIGHT * 2 / 6;
        const zone16StartingPoint:number[] = [zone16X, zone16Y];
        const isZone16:boolean = isPointInRectangle(zone16StartingPoint, zone16Width, zone16Height, locationX, locationY);
        if (isZone16) {
            return "zone16";
        }

        // zone 17: the bottom, most inner zone. 
        const zone17X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 2 / 6);
        const zone17Y:number = BOX_HEIGHT / 2 + (STRIKEZONE_HEIGHT * 3 / 6);
        const zone17Width:number = STRIKEZONE_WIDTH * 4 / 6;
        const zone17Height:number = STRIKEZONE_HEIGHT * 1 / 6;
        const zone17StartingPoint:number[] = [zone17X, zone17Y];
        const isZone17:boolean = isPointInRectangle(zone17StartingPoint, zone17Width, zone17Height, locationX, locationY);
        if (isZone17) {
            return "zone17";
        }

        // zone 18: the right bottom corner, most inner zone. 
        const zone18X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 2 / 6);
        const zone18Y:number = BOX_HEIGHT / 2 + (STRIKEZONE_HEIGHT * 2 / 6);
        const zone18Width:number = STRIKEZONE_WIDTH * 2 / 6;
        const zone18Height:number = STRIKEZONE_HEIGHT * 2 / 6;
        const zone18StartingPoint:number[] = [zone18X, zone18Y];
        const isZone18:boolean = isPointInRectangle(zone18StartingPoint, zone18Width, zone18Height, locationX, locationY);
        if (isZone18) {
            return "zone18";
        }

        // zone 19: the top left corner, middle depth zone. 
        const zone19X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH);
        const zone19Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT);
        const zone19Width:number = STRIKEZONE_WIDTH * 4 / 6;
        const zone19Height:number = STRIKEZONE_HEIGHT * 4 / 6;
        const zone19StartingPoint:number[] = [zone19X, zone19Y];
        const isZone19:boolean = isPointInRectangle(zone19StartingPoint, zone19Width, zone19Height, locationX, locationY);
        if (isZone19) {
            return "zone19";
        }

        // zone 20: the top center side, middle depth zone. 
        const zone20X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 2 / 6);
        const zone20Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT);
        const zone20Width:number = STRIKEZONE_WIDTH * 4 / 6;
        const zone20Height:number = STRIKEZONE_HEIGHT * 2 / 6;
        const zone20StartingPoint:number[] = [zone20X, zone20Y];
        const isZone20:boolean = isPointInRectangle(zone20StartingPoint, zone20Width, zone20Height, locationX, locationY);
        if (isZone20) {
            return "zone20";
        }

        // zone 21: the top right corner, middle depth zone. 
        const zone21X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 2 / 6);
        const zone21Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT);
        const zone21Width:number = STRIKEZONE_WIDTH * 4 / 6;
        const zone21Height:number = STRIKEZONE_HEIGHT * 4 / 6;
        const zone21StartingPoint:number[] = [zone21X, zone21Y];
        const isZone21:boolean = isPointInRectangle(zone21StartingPoint, zone21Width, zone21Height, locationX, locationY);
        if (isZone21) {
            return "zone21";
        }       
        // zone 22: the left side, middle depth zone. 
        const zone22X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH);
        const zone22Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 2 / 6);
        const zone22Width:number = STRIKEZONE_WIDTH * 2 / 6;
        const zone22Height:number = STRIKEZONE_HEIGHT * 4 / 6;
        const zone22StartingPoint:number[] = [zone22X, zone22Y];
        const isZone22:boolean = isPointInRectangle(zone22StartingPoint, zone22Width, zone22Height, locationX, locationY);
        if (isZone22) {
            return "zone22";
        }  
        
        // zone 23: the right side, middle depth zone. 
        const zone23X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 4 / 6);
        const zone23Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 2 / 6);
        const zone23Width:number = STRIKEZONE_WIDTH * 2 / 6;
        const zone23Height:number = STRIKEZONE_HEIGHT * 4 / 6;
        const zone23StartingPoint:number[] = [zone23X, zone23Y];
        const isZone23:boolean = isPointInRectangle(zone23StartingPoint, zone23Width, zone23Height, locationX, locationY);
        if (isZone23) {
            return "zone23";
        } 
        
        // zone 24: the left bottom corner, middle depth zone. 
        const zone24X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH);
        const zone24Y:number = BOX_HEIGHT / 2 + (STRIKEZONE_HEIGHT * 2 / 6);
        const zone24Width:number = STRIKEZONE_WIDTH * 4 / 6;
        const zone24Height:number = STRIKEZONE_HEIGHT * 4 / 6;
        const zone24StartingPoint:number[] = [zone24X, zone24Y];
        const isZone24:boolean = isPointInRectangle(zone24StartingPoint, zone24Width, zone24Height, locationX, locationY);
        if (isZone24) {
            return "zone24";
        }  

        // zone 25: the bottom center, middle depth zone. 
        const zone25X:number = BOX_WIDTH / 2 - (STRIKEZONE_WIDTH * 2 /6);
        const zone25Y:number = BOX_HEIGHT / 2 + (STRIKEZONE_HEIGHT);
        const zone25Width:number = STRIKEZONE_WIDTH * 4 / 6;
        const zone25Height:number = STRIKEZONE_HEIGHT * 2 / 6;
        const zone25StartingPoint:number[] = [zone25X, zone25Y];
        const isZone25:boolean = isPointInRectangle(zone25StartingPoint, zone25Width, zone25Height, locationX, locationY);
        if (isZone25) {
            return "zone25";
        } 

        // zone 26: the bottom right corner, middle depth zone. 
        const zone26X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 2 / 6);
        const zone26Y:number = BOX_HEIGHT / 2 + (STRIKEZONE_HEIGHT * 2 / 6);
        const zone26Width:number = STRIKEZONE_WIDTH * 4 / 6;
        const zone26Height:number = STRIKEZONE_HEIGHT * 4 / 6;
        const zone26StartingPoint:number[] = [zone26X, zone26Y];
        const isZone26:boolean = isPointInRectangle(zone26StartingPoint, zone26Width, zone26Height, locationX, locationY);
        if (isZone26) {
            return "zone26";
        } 

        // zone 27: the top left corner, outer depth zone. 
        const zone27X:number = 0;
        const zone27Y:number = 0;
        const zone27Width:number = STRIKEZONE_WIDTH * 7 / 6;
        const zone27Height:number = ((BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2) + (STRIKEZONE_HEIGHT * 1 / 6)
        const zone27StartingPoint:number[] = [zone27X, zone27Y];
        const isZone27:boolean = isPointInRectangle(zone27StartingPoint, zone27Width, zone27Height, locationX, locationY);
        if (isZone27) {
            return "zone27";
        } 

        // zone 28: the top center, outer depth zone. 
        const zone28X:number = STRIKEZONE_WIDTH * 7 / 6;
        const zone28Y:number = 0;
        const zone28Width:number = STRIKEZONE_WIDTH * 4 / 6;
        const zone28Height:number = (BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2 - (STRIKEZONE_HEIGHT * 3 / 6)
        const zone28StartingPoint:number[] = [zone28X, zone28Y];
        const isZone28:boolean = isPointInRectangle(zone28StartingPoint, zone28Width, zone28Height, locationX, locationY);
        if (isZone28) {
            return "zone28";
        } 
        // zone 29: the top right corner, outer depth zone. 
        const zone29X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 2 / 6);
        const zone29Y:number = 0;
        const zone29Width:number = STRIKEZONE_WIDTH * 7 / 6;
        const zone29Height:number = ((BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2) + (STRIKEZONE_HEIGHT * 1 / 6)
        const zone29StartingPoint:number[] = [zone29X, zone29Y];
        const isZone29:boolean = isPointInRectangle(zone29StartingPoint, zone29Width, zone29Height, locationX, locationY);
        if (isZone29) {
            return "zone29";
        } 

        // zone 30: the left side, outer depth zone. 
        const zone30X:number = 0;
        const zone30Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 2 / 6);;
        const zone30Width:number = STRIKEZONE_WIDTH * 3 / 6;
        const zone30Height:number = STRIKEZONE_HEIGHT * 4 / 6;
        const zone30StartingPoint:number[] = [zone30X, zone30Y];
        const isZone30:boolean = isPointInRectangle(zone30StartingPoint, zone30Width, zone30Height, locationX, locationY);
        if (isZone30) {
            return "zone30";
        } 
        // zone 31: the right side, outer depth zone. 
        const zone31X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH);
        const zone31Y:number = BOX_HEIGHT / 2 - (STRIKEZONE_HEIGHT * 2 / 6);
        const zone31Width:number = STRIKEZONE_WIDTH * 3 / 6;
        const zone31Height:number = STRIKEZONE_HEIGHT * 4 / 6;
        const zone31StartingPoint:number[] = [zone31X, zone31Y];
        const isZone31:boolean = isPointInRectangle(zone31StartingPoint, zone31Width, zone31Height, locationX, locationY);
        if (isZone31) {
            return "zone31";
        } 

        // zone 32: the left bottom corner, outer depth zone. 
        const zone32X:number = 0;
        const zone32Y:number = BOX_HEIGHT / 2 + (STRIKEZONE_HEIGHT * 2 / 6);
        const zone32Width:number = STRIKEZONE_WIDTH * 7 / 6;
        const zone32Height:number = ((BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2) + (STRIKEZONE_HEIGHT * 1 / 6)
        const zone32StartingPoint:number[] = [zone32X, zone32Y];
        const isZone32:boolean = isPointInRectangle(zone32StartingPoint, zone32Width, zone32Height, locationX, locationY);
        if (isZone32) {
            return "zone32";
        } 
        // zone 33: the bottom center, outer depth zone. 
        const zone33X:number = STRIKEZONE_WIDTH * 7 / 6;
        const zone33Y:number = BOX_HEIGHT / 2 + (STRIKEZONE_HEIGHT);;
        const zone33Width:number = STRIKEZONE_WIDTH * 4 / 6;
        const zone33Height:number = (BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2 - (STRIKEZONE_HEIGHT * 3 / 6)
        const zone33StartingPoint:number[] = [zone33X, zone33Y];
        const isZone33:boolean = isPointInRectangle(zone33StartingPoint, zone33Width, zone33Height, locationX, locationY);
        if (isZone33) {
            return "zone33";
        } 

        // zone 34: the right bottom corner, outer depth zone. 
        const zone34X:number = BOX_WIDTH / 2 + (STRIKEZONE_WIDTH * 2 / 6);
        const zone34Y:number = BOX_HEIGHT / 2 + (STRIKEZONE_HEIGHT * 2 / 6);
        const zone34Width:number = STRIKEZONE_WIDTH * 7 / 6;
        const zone34Height:number = ((BOX_HEIGHT - STRIKEZONE_HEIGHT) / 2) + (STRIKEZONE_HEIGHT * 1 / 6)
        const zone34StartingPoint:number[] = [zone34X, zone34Y];
        const isZone34:boolean = isPointInRectangle(zone34StartingPoint, zone34Width, zone34Height, locationX, locationY);
        if (isZone34) {
            return "zone34";
        } 
    }

    return "zone1";
}