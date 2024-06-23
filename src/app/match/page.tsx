'use client';
import {Button} from '@/components/ui/button';
import { setupMatch } from "@/eventhandlers/setupMatch";
export default function Match () {
    const homeTeam = "Busan Seagulls";
    const awayTeam = "Daegu Suns";

    return (
        <Button onClick={()=>setupMatch(homeTeam, awayTeam)}>Create Match</Button>
    )
}