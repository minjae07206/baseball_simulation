import { db } from "@/lib/db";

type DefenceStats = {
    pitcher: number;
    catcher: number;
    firstBaseFielder: number;
    secondBaseFielder: number;
    thirdBaseFielder: number;
    shortStop: number;
    leftFielder: number;
    centerFielder: number;
    rightFielder: number;
    range: number;
    throwAccuracy: number;
    throwPower: number;
    handling: number;
    catching: number;
};

export async function setupFielderLineup(pitcher: any, team: string) {
    const players = await db.player.findMany({
        where: {
            teamName: team,
        },
        include: {
            defenceStats: true
        },
    });
    const positions: (keyof DefenceStats)[] = [
        'catcher',
        'firstBaseFielder',
        'secondBaseFielder',
        'thirdBaseFielder',
        'shortStop',
        'leftFielder',
        'centerFielder',
        'rightFielder',
    ];
    const fielderLineup: { [key: string]: any } = {};

    // Helper function to assign a player to a position
    const assignPlayerToPosition = (position: keyof DefenceStats) => {
        const playerIndex = players.findIndex(
            (player) => {
                return player.defenceStats[0][position] > 0
            }
        );
        if (playerIndex !== -1) {
            fielderLineup[position] = players[playerIndex];
            // Remove the assigned player from the list
            players.splice(playerIndex, 1);
        }
    };

    // Assign players to positions based on their defensive stats
    positions.forEach((position) => {
        assignPlayerToPosition(position);
    });

    //assign designatedHitter
    const firstplayer = players[0]
    fielderLineup["designatedHitter"] = firstplayer;
    players.splice(0, 1);
    //console.log(fielderLineup)
    return fielderLineup;
} 