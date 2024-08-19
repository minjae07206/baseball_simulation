import { db } from "@/lib/db";
import { MatchType } from "@/lib/types";
import { NextResponse } from "next/server";
export async function GET(){
    const matchData:MatchType = await db.match.findFirst({
        where: {
            id: "clzz9lh1d00b5z7lnp7d4wqmm"
        }
    });
    return NextResponse.json(matchData);
};