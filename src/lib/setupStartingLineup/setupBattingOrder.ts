import { Player, StartingLineup } from '@/lib/types';
export function setupBattingOrder(homeStartingLineup: StartingLineup, awayStartingLineup: StartingLineup) {
    const homeBattingOrder: Player[] = [];
    const awayBattingOrder: Player[] = [];
    for (const player of Object.values(homeStartingLineup)) {
        homeBattingOrder.push(player); 
    }

    for (const player of Object.values(awayStartingLineup)) {
        awayBattingOrder.push(player); 
    }

    return [homeBattingOrder, awayBattingOrder];
}