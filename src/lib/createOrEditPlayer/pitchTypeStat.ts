import { getRandomKeyBasedOnProbability } from "@/lib/random/getRandomKeyBasedOnProbability";
import { getRandomNumberBetweenTwoInputs } from "../random/getRandomNumber";
import { PitchType } from "@prisma/client";

type PitchTypes = {
    four_seam_fastball: number;
    two_seam_fastball: number;
    curveball: number;
    slider: number;
    changeup: number;
    circle_changeup: number;
    forkball: number;
    cutter: number;
    splitter: number;
    screwball: number;
    knuckleball: number;
    sinker: number;
};

export function generatePitchTypeStat(mainPosition:string):PitchTypes {
    const pitchTypeStats: PitchTypes = {
        four_seam_fastball: 0,
        two_seam_fastball: 0,
        curveball: 0,
        slider: 0,
        changeup: 0,
        circle_changeup: 0,
        forkball: 0,
        cutter: 0,
        splitter: 0,
        screwball: 0,
        knuckleball: 0,
        sinker: 0
    };
    const pitchTypeNumberProbability = {
        "1": 0.5,
        "2": 20,
        "3": 35,
        "4": 27.9,
        "5": 10,
        "6": 5,
        "7": 1,
        "8": 0.5,
        "9": 0.1

    }
    const pitchTypeProbability = {
        four_seam_fastball: 0,
        two_seam_fastball: 0,
        curveball: 0,
        slider: 0,
        changeup: 0,
        circle_changeup: 0,
        forkball: 0,
        cutter: 0,
        splitter: 0,
        screwball: 0,
        knuckleball: 0,
        sinker: 0
    }
    const numberOfPitchTypes = getRandomKeyBasedOnProbability(pitchTypeNumberProbability);
    let currentNumberOfPitchTypes = 0;
    let cantBeTogetherTotal = 0;
    const pitchTypesThatCantBeTogether = ["changeup", "circle_changeup", "forkball", "splitter"];
    let cantBeTogetherSelected = false;
    while (parseInt(numberOfPitchTypes) > currentNumberOfPitchTypes) {
        let selectedPitchType: keyof PitchTypes = "four_seam_fastball";  
        if (numberOfPitchTypes === "1") {
            selectedPitchType = getRandomKeyBasedOnProbability({
                "knuckleball": 30,
                "cutter": 70 
            }) as keyof PitchTypes;
            pitchTypeStats[selectedPitchType] = getRandomNumberBetweenTwoInputs(20, 99)
        } else if (currentNumberOfPitchTypes === 0) {
            pitchTypeProbability.four_seam_fastball = 60;
            pitchTypeProbability.two_seam_fastball = 30;
            pitchTypeProbability.cutter = 10;
            selectedPitchType = getRandomKeyBasedOnProbability(pitchTypeProbability) as keyof PitchTypes;
            pitchTypeStats[selectedPitchType] = getRandomNumberBetweenTwoInputs(20, 99)
            // set pitchTypeProbability for others
            pitchTypeProbability.four_seam_fastball = 0.1;
            pitchTypeProbability.two_seam_fastball = 0.1;
            pitchTypeProbability.cutter = 0.1;
            pitchTypeProbability.slider = 20;
            pitchTypeProbability.curveball = 10.3;
            pitchTypeProbability.screwball = 1;
            pitchTypeProbability.changeup = 27.5;
            pitchTypeProbability.circle_changeup = 15;
            pitchTypeProbability.splitter = 10;
            pitchTypeProbability.forkball = 10;
            pitchTypeProbability.sinker = 5;
            pitchTypeProbability.knuckleball = 1;
            pitchTypeProbability[selectedPitchType] = 0;
            cantBeTogetherTotal = pitchTypeProbability.changeup + pitchTypeProbability.circle_changeup + pitchTypeProbability.forkball + pitchTypeProbability.splitter;
        } else {
            selectedPitchType = getRandomKeyBasedOnProbability(pitchTypeProbability) as keyof PitchTypes;
            pitchTypeStats[selectedPitchType] = getRandomNumberBetweenTwoInputs(20, 99);
            if (pitchTypesThatCantBeTogether.includes(selectedPitchType)) {
                cantBeTogetherSelected = true;
                pitchTypeProbability.changeup = 0;
                pitchTypeProbability.circle_changeup = 0;
                pitchTypeProbability.splitter = 0;
                pitchTypeProbability.forkball = 0; 
                for (let pitchType in pitchTypeStats) {
                    if (pitchTypeStats[pitchType as keyof PitchTypes] === 0 && !pitchTypesThatCantBeTogether.includes(pitchType)) {
                        pitchTypeProbability[pitchType as keyof PitchTypes] += cantBeTogetherTotal / (Object.keys(pitchTypeProbability).length - currentNumberOfPitchTypes + 4);
                    }
                }
            
            } else if (cantBeTogetherSelected) {
                for (let pitchType in pitchTypeStats) {
                    if (pitchTypeStats[pitchType as keyof PitchTypes] === 0 && !pitchTypesThatCantBeTogether.includes(pitchType)) {
                        pitchTypeProbability[pitchType as keyof PitchTypes] += cantBeTogetherTotal / (Object.keys(pitchTypeProbability).length - currentNumberOfPitchTypes + 4);
                    }
                }
            } else {
                for (let pitchType in pitchTypeStats) {
                    if (pitchTypeStats[pitchType as keyof PitchTypes] === 0) {
                        pitchTypeProbability[pitchType as keyof PitchTypes] += pitchTypeProbability[selectedPitchType] / (Object.keys(pitchTypeProbability).length - currentNumberOfPitchTypes + 1);
                    } 
                }
            }
           
            pitchTypeProbability[selectedPitchType] = 0;
        }
        currentNumberOfPitchTypes += 1;
    }
    return pitchTypeStats;

}