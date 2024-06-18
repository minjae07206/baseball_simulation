"use server";
import { db } from "@/lib/db";
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
                return {
                    playerId: player.id,
                    
                }
            })
        })
        return {success: "Pitch Type Stat created Successfully."}
    } catch {
        return {error: "Something went wrong during pitch type creation."}
    }
}