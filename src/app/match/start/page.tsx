import { Match } from '@/lib/types';
import { MatchStartButton } from '@/components/buttons/matchStartButton';

async function getMatch () {
    const match = await fetch("http://localhost:3000/api/match", { cache: 'no-store' });
    const json = match.json()
    return json;
}

export default async function Start() {
    const match = await getMatch();

    return (
        <div>
            <div>{JSON.stringify(match)}</div>
            <MatchStartButton></MatchStartButton>
        </div>
    );
}
