'use server';
import { db } from "@/lib/db";
import { generatePitchTypeStat } from "../createOrEditPlayer/pitchTypeStat";
export const setupPlayerPitchTypeStat = async () => {
    try {
        const players = await db.player.findMany({
            select: {
                id: true,
                mainPosition: true,
            }
        })
        await db.pitchTypeStats.createMany({
            data: Array.from(players, (player)=>{
                const pitchTypeStats = generatePitchTypeStat(player.mainPosition)
                return {
                    playerId: player.id,
                    four_seam_fastball: pitchTypeStats.four_seam_fastball,
                    two_seam_fastball: pitchTypeStats.two_seam_fastball,
                    curveball: pitchTypeStats.curveball,
                    slider: pitchTypeStats.slider,
                    changeup: pitchTypeStats.changeup,
                    circle_changeup: pitchTypeStats.circle_changeup,
                    forkball: pitchTypeStats.forkball,
                    cutter: pitchTypeStats.cutter,
                    splitter: pitchTypeStats.splitter,
                    screwball: pitchTypeStats.screwball,
                    knuckleball: pitchTypeStats.knuckleball,
                    sinker: pitchTypeStats.sinker
                }
            })
        })
        return {success: "Pitch Type Stat created Successfully."}
    } catch (error){
        console.log(error)
        return {error: "Something went wrong during pitch type creation."}
    }
}