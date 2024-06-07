import { db } from '@/lib/db';

export const setupTeams = async () => {
    const TEAM_NAMES = [
        "Daejeon Falcons", 
        "Suwon Castles", 
        "Daegu Suns", 
        "Busan Seagulls",
        "Changwon Raptors",
        "Jamsil Moonbears",
        "Seoul Breezes",
        "Gocheok Saviors",
        "Gwangju Cougars",
        "Incheon Anchors",
    ]
    try {
        for (let TEAM_NAME of TEAM_NAMES) {
            console.log(TEAM_NAME)
        }
    } catch (error){
        return {error: "Something went wrong with creating teams"};
    }
}