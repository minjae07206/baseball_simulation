import { db } from "@/lib/db";
import { Match } from "@/lib/types";
import { NextResponse } from "next/server";
export async function GET(){
    const matchData:Match = await db.match.findFirst({
        where: {
            id: "clxsvhag30001uyg7zfkb7rwh"
        }
    });
    return NextResponse.json(matchData);
};