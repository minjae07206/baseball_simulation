import { db } from "@/lib/db";
import { Player } from "../types";
export async function setupStartingPitcher(teamName:string):Promise<Player>{
    try {
        const pitchers = await db.player.findMany({
            where: {
                teamName: teamName,
                mainPosition: 'pitcher'
            },
            include: {
                pitchTypeStats: true,
                defenceStats: true,
            }
        });

        const randomIndex = Math.floor(Math.random() * pitchers.length);
        const selectedPitcher:Player = pitchers[randomIndex];
        return selectedPitcher;
    } catch(error) {
        throw new Error;
    }
}