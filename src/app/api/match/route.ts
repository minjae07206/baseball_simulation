import { db } from "@/lib/db";
import { MatchType } from "@/lib/types";
import { NextResponse } from "next/server";
export async function GET(){
    const matchData:MatchType = await db.match.findFirst({
        where: {
            id: "clxvpdmdo0001ormr8aesbz65"
        }
    });
    return NextResponse.json(matchData);
};