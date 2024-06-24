import { setupStartingPitcher } from "@/lib/setupStartingLineup/setupSP";
import { setupFielderLineup } from "@/lib/setupStartingLineup/setFielderLineup";
import { Player, StartingLineup } from "@/lib/types";
export async function setupStartingLineup(homeTeam: string, awayTeam: string) {
    const [homePitcher, awayPitcher] = await Promise.all([
        setupStartingPitcher(homeTeam),
        setupStartingPitcher(awayTeam)
    ]);

    const [homeFielderLineup, awayFielderLineup] = await Promise.all([
        setupFielderLineup(awayPitcher, homeTeam), // Home team fielder lineup based on away pitcher
        setupFielderLineup(homePitcher, awayTeam)  // Away team fielder lineup based on home pitcher
    ]);
    console.log(typeof(homePitcher))
    const homeStartingLineup:StartingLineup = {
        pitcher: homePitcher,
        catcher: homeFielderLineup.catcher,
        firstBaseFielder: homeFielderLineup.firstBaseFielder,
        secondBaseFielder: homeFielderLineup.secondBaseFielder,
        thirdBaseFielder: homeFielderLineup.thirdBaseFielder,
        shortStop: homeFielderLineup.shortStop,
        leftFielder: homeFielderLineup.leftFielder,
        centerFielder: homeFielderLineup.centerFielder,
        rightFielder: homeFielderLineup.rightFielder,
        designatedHitter: homeFielderLineup.designatedHitter
    };

    const awayStartingLineup:StartingLineup = {
        pitcher: awayPitcher,
        catcher: awayFielderLineup.catcher,
        firstBaseFielder: awayFielderLineup.firstBaseFielder,
        secondBaseFielder: awayFielderLineup.secondBaseFielder,
        thirdBaseFielder: awayFielderLineup.thirdBaseFielder,
        shortStop: awayFielderLineup.shortStop,
        leftFielder: awayFielderLineup.leftFielder,
        centerFielder: awayFielderLineup.centerFielder,
        rightFielder: awayFielderLineup.rightFielder,
        designatedHitter: awayFielderLineup.designatedHitter
    };

    return [homeStartingLineup, awayStartingLineup];
}
