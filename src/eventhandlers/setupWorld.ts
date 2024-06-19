import { setupPlayersBasic } from "@/lib/setupWorld/setupPlayersBasic";
import { setupTeams } from "@/lib/setupWorld/setupTeams"
import { setupPlayerDefenceStat } from "@/lib/setupWorld/setupPlayerDefenceStat";
import { setupPlayerPitchTypeStat } from "@/lib/setupWorld/setupPlayerPitchTypeStat";
export const setupWorld = async () => {
    try {
        await setupTeams();
        await setupPlayersBasic();
        await setupPlayerDefenceStat();
        const value = await setupPlayerPitchTypeStat();
        console.log(value)

    } catch(error) {
    }
   
}