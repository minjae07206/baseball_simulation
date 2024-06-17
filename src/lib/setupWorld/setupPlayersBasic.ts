'use server';
import { db } from '@/lib/db';
import { teamNameGenerator } from '@/lib/setupWorld/teamNames';
import { generateRandomDateBetweenYears } from '@/lib/createOrEditPlayer/birthDate';
import { generateRandomPosition } from '@/lib/createOrEditPlayer/randomPosition';
import { generateBattingPitchingArm } from '@/lib/createOrEditPlayer/battingPitchingArm';
import { generatePitchingArmStyle } from '@/lib/createOrEditPlayer/pitchingArmStyle';
import { getRandomNumberBetweenTwoInputs } from '@/lib/random/getRandomNumber';
import { generateAgainstLeftHitter, generateAgainstRightHitter, generateAgainstLeftPitcher, generateAgainstRightPitcher, generateAgainstSidearmUnderPitcher} from '@/lib/createOrEditPlayer/against';
import { generateBuntAbility } from '@/lib/createOrEditPlayer/buntAbility';
import { generatePitchingAbility } from '@/lib/createOrEditPlayer/pitchingAbility';
import { generateBattingAbility } from '@/lib/createOrEditPlayer/battingAbility';
import { generateStuff } from '@/lib/createOrEditPlayer/stuff';
import { generatePitchSpeed } from '@/lib/createOrEditPlayer/pitchSpeed';
import { generatePitchMovement } from '@/lib/createOrEditPlayer/pitchMovement';
import { generateReleasePoint } from '@/lib/createOrEditPlayer/releasePoint';
import { generatePitchSpin } from '@/lib/createOrEditPlayer/pitchSpin';
import { generateDeception } from '@/lib/createOrEditPlayer/deception';
import { generateControl } from '@/lib/createOrEditPlayer/control';
import { generatePickoff } from '@/lib/createOrEditPlayer/pickoff';
import { generateHealth } from '../createOrEditPlayer/health';
import { generateBattingEye } from '@/lib/createOrEditPlayer/battingEye';
import { generateContact } from '@/lib/createOrEditPlayer/contact';
import { generateHomerunPower } from '@/lib/createOrEditPlayer/homerunPower';
import { generateGapPower } from '@/lib/createOrEditPlayer/gapPower';
import { generateBaseRunning } from '@/lib/createOrEditPlayer/baseRunning';
import { generateHeight } from '@/lib/createOrEditPlayer/height';
var koreanNameGenerator = require("korean-name-generator");
export const setupPlayersBasic = async () => {
    const generator = teamNameGenerator()
    try {
        await db.player.createMany({
            data: Array.from({ length: 400 }, () => {
                const mainPosition = generateRandomPosition();
                const battingPitchingArm = generateBattingPitchingArm(mainPosition);
                const pitchingArmStyle = generatePitchingArmStyle(mainPosition, battingPitchingArm);
                const againstLeftHitter = generateAgainstLeftHitter(mainPosition, battingPitchingArm, pitchingArmStyle);
                const againstRightHitter = generateAgainstRightHitter(mainPosition, battingPitchingArm, pitchingArmStyle);
                const againstLeftPitcher = generateAgainstLeftPitcher(mainPosition, battingPitchingArm);
                const againstRightPitcher = generateAgainstRightPitcher(mainPosition, battingPitchingArm);
                const againstSidearmUnderPitcher = generateAgainstSidearmUnderPitcher(mainPosition, battingPitchingArm);
                const birthDate = generateRandomDateBetweenYears(1984, 2004);
                const pitchingStyle = getRandomNumberBetweenTwoInputs(20, 80);
                const shoulderPower = getRandomNumberBetweenTwoInputs(1, 99);
                const legPower = getRandomNumberBetweenTwoInputs(1, 99);
                const wristPower = getRandomNumberBetweenTwoInputs(1, 99);
                const corePower = getRandomNumberBetweenTwoInputs(1, 99);
                const handEyeCoordination = getRandomNumberBetweenTwoInputs(1, 99);
                const sophisticated = getRandomNumberBetweenTwoInputs(1, 99);
                const activeness = getRandomNumberBetweenTwoInputs(20, 80)
                const baseballIQ = getRandomNumberBetweenTwoInputs(1, 99);
                const effort = getRandomNumberBetweenTwoInputs(1, 99);
                const flexibility = getRandomNumberBetweenTwoInputs(1, 99);
                const speed = getRandomNumberBetweenTwoInputs(1, 99);
                const agility = getRandomNumberBetweenTwoInputs(1, 99);
                const mentality = getRandomNumberBetweenTwoInputs(1, 99);
                const lifeStyle = getRandomNumberBetweenTwoInputs(1, 99);
                const durability = getRandomNumberBetweenTwoInputs(1, 99);
                const creativity = getRandomNumberBetweenTwoInputs(1, 99);
                const stamina = getRandomNumberBetweenTwoInputs(30, 95);
                const adaptability = getRandomNumberBetweenTwoInputs(1, 99);
                const DynamicVisualAcuity = getRandomNumberBetweenTwoInputs(1, 99);
                const buntAbility = generateBuntAbility(mainPosition);
                const potential = getRandomNumberBetweenTwoInputs(1, 99);
                const battingAbility = generateBattingAbility(mainPosition);
                const pitchingAbility = generatePitchingAbility(mainPosition);
                const attributesEffectingPitchSpeed = {shoulderPower, legPower, corePower};
                const pitchSpeed = generatePitchSpeed(attributesEffectingPitchSpeed);
                const attributesEffectingPitchMovement = {shoulderPower, wristPower, pitchingAbility};
                const pitchMovement = generatePitchMovement(attributesEffectingPitchMovement);
                const attributesEffectingPitchSpin = {shoulderPower, wristPower, legPower, corePower, pitchingAbility};
                const pitchSpin = generatePitchSpin(attributesEffectingPitchSpin);
                const attributesEffectingDeception = {baseballIQ, flexibility, creativity, pitchingAbility};
                const deception = generateDeception(attributesEffectingDeception);
                const attributesEffectingReleasePoint = {wristPower, sophisticated, flexibility, pitchingAbility};
                const releasePoint = generateReleasePoint(attributesEffectingReleasePoint);
                const attributesEffectingStuff = {pitchSpeed, pitchMovement, pitchSpin, deception, releasePoint};
                const attributesEffectingCommand = {handEyeCoordination, sophisticated, effort, flexibility, pitchingAbility, corePower};
                const attributesEffectingPickoff = {shoulderPower, agility, baseballIQ};
                const attributesEffectingHealth = {durability, lifeStyle};
                const attributesEffectingBattingEye = {baseballIQ, wristPower, sophisticated, DynamicVisualAcuity, activeness};
                const attributesEffectingContact = {battingAbility, flexibility, handEyeCoordination, sophisticated};
                const attributesEffectingHomerunPower = {battingAbility, shoulderPower, legPower, corePower};
                const attributesEffectingGapPower = {battingAbility, speed, shoulderPower};
                const attributesEffectingBaseRunning = {baseballIQ, speed, agility, legPower};
                const height = generateHeight();
                return {
                    name: koreanNameGenerator.generate(true),
                    // The ! is to tell typescript that it is certain the value will not be null or undefined.
                    teamName: generator.next().value!,
                    birthDate: birthDate,
                    battingPitchingArm: battingPitchingArm,
                    pitchingArmStyle: pitchingArmStyle,
                    pitchingStyle: pitchingStyle,
                    mainPosition: mainPosition,
                    shoulderPower: shoulderPower,
                    legPower: legPower,
                    wristPower: wristPower,
                    corePower: corePower,
                    handEyeCoordination: handEyeCoordination,
                    sophisticated: sophisticated,
                    activeness: activeness,
                    baseballIQ: baseballIQ,
                    effort: effort,
                    flexibility: flexibility,
                    speed: speed,
                    agility: agility,
                    mentality: mentality,
                    lifeStyle: lifeStyle,
                    height: height,
                    durability: durability,
                    againstLeftHitter: againstLeftHitter,
                    againstRightHitter: againstRightHitter,
                    againstLeftPitcher: againstLeftPitcher,
                    againstRightPitcher: againstRightPitcher,
                    againstSidearmUnderPitcher: againstSidearmUnderPitcher,
                    creativity: creativity,
                    stamina: stamina,
                    adaptability: adaptability,
                    DynamicVisualAcuity: DynamicVisualAcuity,
                    buntAbility: buntAbility,
                    potential: potential,
                    pitchSpeed: pitchSpeed,
                    pitchMovement: pitchMovement,
                    pitchSpin: pitchSpin,
                    battingAbility: battingAbility,
                    pitchingAbility: pitchingAbility,
                    deception: deception,
                    releasePoint: releasePoint,
                    stuff: generateStuff(attributesEffectingStuff),
                    command: generateControl(attributesEffectingCommand),
                    pickoff: generatePickoff(attributesEffectingPickoff),
                    health: generateHealth(attributesEffectingHealth),
                    battingEye: generateBattingEye(attributesEffectingBattingEye),
                    contact: generateContact(attributesEffectingContact),
                    homerunPower: generateHomerunPower(attributesEffectingHomerunPower),
                    gapPower: generateGapPower(attributesEffectingGapPower),
                    baseRunning: generateBaseRunning(attributesEffectingBaseRunning),
                };
            })
        });
        return { success: "Players generated successfully" };
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong with creating players" };
    }
}

// 