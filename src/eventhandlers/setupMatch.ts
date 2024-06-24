'use server';

import { setupStartingLineup } from "@/lib/setupStartingLineup/setupStartingLineup";
import { startMatch } from "@/lib/match/startMatch";
import { setupBattingOrder } from "@/lib/setupStartingLineup/setupBattingOrder";
import { db } from "@/lib/db";
export const setupMatch = async (homeTeam: string, awayTeam: string) => {
    const [homeStartingLineup, awayStartingLineup] = await setupStartingLineup(homeTeam, awayTeam);
    const [homeBattingOrder, awayBattingOrder] = setupBattingOrder(homeStartingLineup, awayStartingLineup)
    /*for (const [position, person] of Object.entries(homeStartingLineup)) {
        console.log(`Position: ${position}, Player: ${person.name}`);
    }

    for (const [position, person] of Object.entries(awayStartingLineup)) {
        console.log(`Position: ${position}, Player: ${person.name}`);
    }
    */

    const match = {
        homeTeamName: homeTeam,
        awayTeamName: awayTeam,
        homeStartingLineup: JSON.stringify(homeStartingLineup),
        awayStartingLineup: JSON.stringify(awayStartingLineup),
        homeBattingOrder: JSON.stringify(homeBattingOrder),
        awayBattingOrder: JSON.stringify(awayBattingOrder),
        currentInning: "top1",
        matchAt: new Date(),
        stadium: "Your Stadium Name",
        weather: "Clear",
    }
    await db.match.create({
        data: match
    })

}