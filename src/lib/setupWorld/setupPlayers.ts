'use server';
import { db } from '@/lib/db';
import { teamNameGenerator } from '@/lib/setupWorld/teamNames';
import { generateRandomDateBetweenYears } from '@/lib/createOrEditPlayer/birthDate';
import { generateRandomPosition } from '@/lib/createOrEditPlayer/randomPosition';
import { generateBattingPitchingArm } from '@/lib/createOrEditPlayer/battingPitchingArm';
import { generatePitchingArmStyle } from '@/lib/createOrEditPlayer/pitchingArmStyle';
import { getRandomNumberBetweenTwoInputs } from '@/lib/random/getRandomNumber';
var koreanNameGenerator = require("korean-name-generator");
export const setupPlayers = async () => {
    const generator = teamNameGenerator()
    try {
        await db.player.createMany({
            data: Array.from({ length: 400 }, () => {
                const mainPosition = generateRandomPosition();
                const battingPitchingArm = generateBattingPitchingArm(mainPosition);
                const pitchingArmStyle = generatePitchingArmStyle(mainPosition, battingPitchingArm)
                return {
                    name: koreanNameGenerator.generate(true),
                    // The ! is to tell typescript that it is certain the value will not be null or undefined.
                    teamName: generator.next().value!,
                    birthDate: generateRandomDateBetweenYears(1984, 2004),
                    battingPitchingArm: battingPitchingArm,
                    pitchingArmStyle: pitchingArmStyle,
                    pitchingStyle: getRandomNumberBetweenTwoInputs(20, 80),
                    mainPosition: mainPosition,
                    shoulderPower: getRandomNumberBetweenTwoInputs(1, 99),
                    legPower: getRandomNumberBetweenTwoInputs(1, 99),
                    wristPower: getRandomNumberBetweenTwoInputs(1, 99),
                    corePower: getRandomNumberBetweenTwoInputs(1, 99),
                    handEyeCoordination: getRandomNumberBetweenTwoInputs(1, 99),
                    sophisticated: getRandomNumberBetweenTwoInputs(1, 99),
                    baseballIQ: getRandomNumberBetweenTwoInputs(1, 99),
                    effort: getRandomNumberBetweenTwoInputs(1, 99),
                    flexibility: getRandomNumberBetweenTwoInputs(1, 99),
                    speed: getRandomNumberBetweenTwoInputs(1, 99),
                    agility: getRandomNumberBetweenTwoInputs(1, 99),
                    mentality: getRandomNumberBetweenTwoInputs(1, 99),
                    lifestyle: getRandomNumberBetweenTwoInputs(1, 99),
                    durability: getRandomNumberBetweenTwoInputs(1, 99),


                    contact: 44, // need to create from Primary values
                };
            })
        });
        return { success: "Players generated successfully" }
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong with creating players" };
    }
}

// 