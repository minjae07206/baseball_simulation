import { setupPlayersBasic } from "@/lib/setupWorld/setupPlayersBasic";
import { setupTeams } from "@/lib/setupWorld/setupTeams"
import { setupPlayerDefenceStat } from "@/lib/setupWorld/setupPlayerDefenceStat";
export const setupWorld = async () => {
    try {
        await setupTeams();
        await setupPlayersBasic();
        await setupPlayerDefenceStat();
        await setupPlayersPitchTypeStat();

    } catch(error) {
    }
   
}