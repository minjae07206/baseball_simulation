'use server';
import { db } from '@/lib/db';
import { teamNameGenerator } from '@/lib/setupWorld/teamNames';
var koreanNameGenerator = require("korean-name-generator");
export const setupPlayers = async () => {
    const generator = teamNameGenerator()
    try {
        await db.player.createMany({
                data: Array.from({length: 340}, ()=> ({
                        name: koreanNameGenerator.generate(true),
                        // The ! is to tell typescript that it is certain the value will not be null or undefined.
                        teamName: generator.next().value!,
                    }))
            });
        return {success: "Players generated successfully"}
        } catch (error){
        console.log(error)
        return {error: "Something went wrong with creating players"};
    }
}

// 