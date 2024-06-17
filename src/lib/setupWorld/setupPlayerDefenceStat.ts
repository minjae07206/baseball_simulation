"use server"
import { db } from "@/lib/db";
import { generateHandling } from "@/lib/createOrEditPlayer/handling";
import { generateRange } from "@/lib/createOrEditPlayer/range";
import { generateThrowPower } from "@/lib/createOrEditPlayer/throwPower";
import { generateThrowAccuracy } from "@/lib/createOrEditPlayer/throwAccuracy";
import { generateCatching } from "@/lib/createOrEditPlayer/catching";
import { generateDefenceStatByPosition } from "../createOrEditPlayer/defenceStatByPosition";
export const setupPlayerDefenceStat = async () => {
    try {
        const players = await db.player.findMany({
            select: {
                id: true,
                mainPosition: true,
                shoulderPower: true,
                sophisticated: true,
                handEyeCoordination: true,
                agility: true,
                speed: true,
                flexibility: true,
                wristPower: true,
                legPower: true,
                DynamicVisualAcuity: true,
                height: true,
                battingPitchingArm: true,
            }
        })
        await db.defenceStats.createMany({
            data: Array.from(players, (player) => {
                const battingPitchingArm = player.battingPitchingArm;
                const mainPosition = player.mainPosition;
                const shoulderPower = player.shoulderPower;
                const legPower = player.legPower;
                const sophisticated = player.sophisticated;
                const handEyeCoordination = player.handEyeCoordination;
                const agility = player.agility;
                const speed = player.speed;
                const flexibility = player.flexibility;
                const wristPower = player.wristPower;
                const dynamicVisualAcuity = player.DynamicVisualAcuity;
                const height = player.height;
                const attributesEffectingHandling = {flexibility, sophisticated, wristPower};
                const attributesEffectingRange = {speed, agility, legPower};
                const attributesEffectingThrowPower = {shoulderPower, wristPower};
                const attributesEffectingThrowAccuracy = {sophisticated, handEyeCoordination}; 
                const attributesEffectingCatching = {dynamicVisualAcuity, height, flexibility};
                const defenceStatByPosition = generateDefenceStatByPosition(mainPosition, battingPitchingArm)
                return {
                    playerId: player.id,
                    handling: generateHandling(attributesEffectingHandling),
                    range: generateRange(attributesEffectingRange),
                    throwPower: generateThrowPower(attributesEffectingThrowPower),
                    throwAccuracy: generateThrowAccuracy(attributesEffectingThrowAccuracy),
                    catching: generateCatching(attributesEffectingCatching),
                    pitcher: defenceStatByPosition.pitcher,
                    catcher: defenceStatByPosition.catcher,
                    firstBaseFielder: defenceStatByPosition.firstBaseFielder,
                    secondBaseFielder: defenceStatByPosition.secondBaseFielder,
                    thirdBaseFielder: defenceStatByPosition.thirdBaseFielder,
                    shortStop: defenceStatByPosition.shortStop,
                    leftFielder: defenceStatByPosition.leftFielder,
                    centerFielder: defenceStatByPosition.centerFielder,
                    rightFielder: defenceStatByPosition.rightFielder,
                }
            })
        })

        return { success: "Successfully created players defence stat." }
    } catch {
        return { error: "Something went wrong during setupPlayerDefenceStat" }
    }



}