export function generateBattingDirection():string {
    const randomValue = Math.random() * 100;

    if (randomValue < 35) { // 30-40% for "normal"
        return "normal";
    } else if (randomValue < 65) { // 20-30% for "spray"
        return "spray";
    } else if (randomValue < 90) { // 20-30% for "pull"
        return "pull";
    } else { // 10-15% for "extreme pull"
        return "extreme pull";
    }
}