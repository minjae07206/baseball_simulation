import { JsonValue } from "@prisma/client/runtime/library";

// Define the type for a player
export type Player = {
    id: string;
    name: string;
    teamName: string;
    birthDate: Date;
    battingPitchingArm: string;
    pitchingArmStyle: string;
    pitchingStyle: number;
    mainPosition: string;
    height: number;
    shoulderPower: number;
    legPower: number;
    wristPower: number;
    corePower: number;
    handEyeCoordination: number;
    sophisticated: number;
    activeness: number;
    baseballIQ: number;
    effort: number;
    flexibility: number;
    speed: number;
    agility: number;
    mentality: number;
    lifeStyle: number;
    durability: number;
    againstLeftHitter: number;
    againstRightHitter: number;
    againstLeftPitcher: number;
    againstRightPitcher: number;
    againstSidearmUnderPitcher: number;
    creativity: number;
    stamina: number;
    adaptability: number;
    DynamicVisualAcuity: number;
    buntAbility: number;
    potential: number;
    battingAbility: number;
    pitchingAbility: number;
    stuff: number;
    pitchSpeed: number;
    pitchMovement: number;
    releasePoint: number;
    deception: number;
    pitchSpin: number;
    command: number;
    pickoff: number;
    battingEye: number;
    homerunPower: number;
    contact: number;
    gapPower: number;
    baseRunning: number;
    health: number;
    // Add other relevant player properties if needed
};

// Define the type for the starting lineup
export type StartingLineup = {
    pitcher: Player;
    catcher: Player;
    firstBaseFielder: Player;
    secondBaseFielder: Player;
    thirdBaseFielder: Player;
    shortStop: Player;
    leftFielder: Player;
    centerFielder: Player;
    rightFielder: Player;
    designatedHitter: Player;
};

export type Match = {
    id: string;
    matchAt: Date;
    homeTeamName: string;
    awayTeamName: string;
    stadium: string;
    weather: string;
    homeTeamScore: number;
    homeTeamHit: number;
    homeTeamB: number;
    homeTeamError: number;
    awayTeamScore: number;
    awayTeamHit: number;
    awayTeamB: number;
    awayTeamError: number;
    currentInning: string;
    homeStartingLineup: JsonValue;
    awayStartingLineup: JsonValue;
    homeBattingOrder: JsonValue;
    awayBattingOrder: JsonValue;
} | null;