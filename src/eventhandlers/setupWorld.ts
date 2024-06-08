import { setupPlayers } from "@/lib/setupWorld/setupPlayers";
import { setupTeams } from "@/lib/setupWorld/setupTeams"
export const setupWorld = async () => {
    try {
        // await setupTeams();
        await setupPlayers();
    } catch(error) {
    }
   
}