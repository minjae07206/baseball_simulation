export const TEAM_NAMES = [
    "Daejeon Falcons", 
    "Suwon Castles", 
    "Daegu Suns", 
    "Busan Seagulls",
    "Changwon Raptors",
    "Jamsil Moonbears",
    "Seoul Breezes",
    "Gocheok Saviors",
    "Gwangju Cougars",
    "Incheon Anchors",
]

export function* teamNameGenerator(): Generator<string, never, unknown> {
    let index = 0;
    while (true) {
        yield TEAM_NAMES[index];
        index = (index + 1) % TEAM_NAMES.length;
    }
}