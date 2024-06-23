'use server';

import { setupStartingLineup } from "@/lib/setupStartingLineup/setupStartingLineup";
import { startMatch } from "@/lib/match/startMatch";
export const setupMatch = async (homeTeam: string, awayTeam: string) => {
    const [homeStartingLineup, awayStartingLineup] = await setupStartingLineup(homeTeam, awayTeam);

    for (const [position, person] of Object.entries(homeStartingLineup)) {
        console.log(`Position: ${position}, Player: ${person.name}`);
    }

    for (const [position, person] of Object.entries(awayStartingLineup)) {
        console.log(`Position: ${position}, Player: ${person.name}`);
    }

    const match = {
        homeTeam: homeTeam,
        awayTeam: awayTeam,
        homeStartingLineup: homeStartingLineup,
        awayStartingLineup: awayStartingLineup,
    }

    startMatch(match);
}