import { db } from "@/lib/db";
import { MatchType } from "@/lib/types";
import { NextResponse } from "next/server";
export async function GET(){
    const matchData:MatchType = await db.match.findFirst({
        where: {
            id: "clyffw5j800b5je81sa0yi2cy"
        }
    });
    return NextResponse.json(matchData);
};