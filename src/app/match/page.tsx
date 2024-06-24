'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { setupMatch } from "@/eventhandlers/setupMatch";

export default function Match() {
    const homeTeam = "Busan Seagulls";
    const awayTeam = "Daegu Suns";
    const router = useRouter();

    const handleCreateMatch = async () => {
        try {
            await setupMatch(homeTeam, awayTeam);
            router.push('/match/start'); // Replace '/new-page' with your desired page
        } catch (err) {
            console.error("Error setting up match:", err);
        }
    };

    return (
        <Button onClick={handleCreateMatch}>Create Match</Button>
    );
}
