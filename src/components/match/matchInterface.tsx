'use client'
import { startMatch } from "@/lib/match/startMatch"
import { Button } from "../ui/button"
import { useState } from "react"
interface props {
    match: any
}
export const MatchInterface = ({ match }: props) => {
    // props must be used as if they are in a pure function
    // that is, they should not be changed. (read only)
    const [homelineup, setHomeLineup] = useState(JSON.parse(match.homeStartingLineup));
    const [awaylineup, setAwayLineup] = useState(JSON.parse(match.awayStartingLineup));
    const [ballCount, setBallCount] = useState(0);
    const [strikeCount, setStrikeCount] = useState(0);
    const [outCount, setOutCount] = useState(0);
    const actions = {setHomeLineup, setAwayLineup, setBallCount, setStrikeCount, setOutCount};
    function onClickMatch() {
        startMatch(match, actions);
    }
    return (
        <div>
        <Button onClick={onClickMatch}>Start Match</Button>
        </div>
    )
}