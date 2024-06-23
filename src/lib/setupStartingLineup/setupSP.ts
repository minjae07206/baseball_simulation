import { db } from "@/lib/db";
export async function setupStartingPitcher(teamName:string) {
    try {
        const pitchers = await db.player.findMany({
            where: {
                teamName: teamName,
                mainPosition: 'pitcher'
            }
        });

        const randomIndex = Math.floor(Math.random() * pitchers.length);
        const selectedPitcher = pitchers[randomIndex];

        return selectedPitcher;
    } catch(error) {
        return error;
    }
}