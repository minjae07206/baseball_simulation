import { MatchType } from '@/lib/types';
import { MatchInterface } from '@/components/match/matchInterface';

async function getMatch() {
    const match = await fetch("http://localhost:3000/api/match", { cache: 'no-store' });
    const json = match.json()
    return json;
}

export default async function Start() {
    const match = await getMatch();
    const a = JSON.stringify(match)
    return (
        <div>
            <div>{match.id}</div>
            <div>{match.homeStartingLineup}</div>
            <MatchInterface match={match}></MatchInterface>
        </div>
    );
}
