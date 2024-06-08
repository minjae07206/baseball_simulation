'use server'
import { db } from '@/lib/db';
import { TEAM_NAMES } from '@/lib/setupWorld/teamNames';
export const setupTeams = async () => {
    try {
        for (let TEAM_NAME of TEAM_NAMES) {
            await db.team.create({
                data: {
                    name: TEAM_NAME
                }
            })
        }
        return {success: 'Teams created successfully.'}
    } catch (error){
        return {error: "Something went wrong with creating teams."};
    }
}