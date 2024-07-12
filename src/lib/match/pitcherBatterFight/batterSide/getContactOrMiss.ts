export function getContactOrMissOrWait(swingOrWait:string, zone:string, [locationX, locationY]:number[], record:any, STRIKEZONE_WIDTH:number, STRIKEZONE_HEIGHT:number):string {
    let initialContactProbability:number = 0;
    if (zone === "zone1") { // very middle  
        initialContactProbability = 0.9;
        battingEyeProportion = 0.001; // effects at most 0.3
        stuffProportion = 0.001;
    } else if (zone === "zone2") { // middle but surrounding the very middle
        initialSwingProbability = 0.69;
        battingEyeProportion = 0.002;
        stuffProportion = 0.002;
    } else if (zone === "zone3" || zone === "zone5") { // top left and right corners
        initialSwingProbability = 0.4;
        battingEyeProportion = 0.001;
        stuffProportion = 0.0015; 
    } else if (zone === "zone4") { // top center
        initialSwingProbability = 0.6;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;
    } else if (zone === "zone6" || zone === "zone7") { // left and right sides.
        initialSwingProbability = 0.6;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;
    } else if (zone === "zone8" || zone === "zone10") { // bottom left and right corners
        initialSwingProbability = 0.4;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;
    } else if (zone === "zone9") { // bottom center
        initialSwingProbability = 0.45;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;
    // for zones outside the strike zone, it will be initialProbability - eye + stuff
    } else if (zone === "zone11" || zone === "zone13") { // left and right top corners, most inner zones
        initialSwingProbability = 0.41
        battingEyeProportion = 0.001;
        stuffProportion = 0.001;
    } else if (zone === "zone12") { // center top zone, most inner part
        initialSwingProbability = 0.5;
        battingEyeProportion = 0.001;
        stuffProportion = 0.001;
    } else if  (zone === "zone14" || zone === "zone15") { // left and right side zones.
        initialSwingProbability = 0.4;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015
    } else if (zone === "zone16" || zone === "zone18") { // left and right bottom corner, most inner zones
        initialSwingProbability = 0.33;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015
    } else if (zone === "zone17") { // bottom center, most inner zone
        initialSwingProbability = 0.37;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;
    } else if (zone === "zone19" || zone === "zone21") {// top left and right corners, middle depth.
        initialSwingProbability = 0.05;
        battingEyeProportion = 0.001;
        stuffProportion = 0.001
    } else if (zone === "zone20") { // top center, middle depth.
        initialSwingProbability = 0.1;
        battingEyeProportion = 0.0015;
        stuffProportion = 0.0015;
    } else if (zone ==="zone22" || zone === "zone23") { // left and right side, middle zone
        initialSwingProbability = 0.25;
        battingEyeProportion = 0.001;
        stuffProportion = 0.001
    } else if (zone ==="zone24" || zone ==="zone26") { // left and right bottom corners, middle depth
        initialSwingProbability = 0.3;
        battingEyeProportion = 0.002;
        stuffProportion = 0.002;
    } else if (zone === "zone26") { // bottom center, middle depth
        initialSwingProbability = 0.3;
        battingEyeProportion = 0.002;
        stuffProportion = 0.002;
    } else if (zone === "zone27" || zone === "zone29") { // top left and right corners, most outer zone.
        initialSwingProbability = 0.01;
        battingEyeProportion = 0.0007;
        stuffProportion = 0.0007;
    } else if (zone === "zone28") { // top center zone, most outer layer
        initialSwingProbability = 0.02;
        battingEyeProportion = 0.0007;
        stuffProportion = 0.0007;
    } else if (zone === "zone30" || zone === "zone31") { // left and right side, most outer zone.
        initialSwingProbability = 0.03;
        battingEyeProportion = 0.0007;
        stuffProportion = 0.0007
    } else if (zone === "zone32" || zone === "zone34") { // left and right bottom corners, most outer layer.
        initialSwingProbability = 0.07
    } else if (zone === "zone33") { // bottom center, most outer layer
        initialSwingProbability = 0.1;
        battingEyeProportion = 0.001;
        stuffProportion = 0.001;
    }
    return "contact";

}