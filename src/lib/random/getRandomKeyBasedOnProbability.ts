interface ProbabilityObject {
    [key: string]: number;
}

export function getRandomKeyBasedOnProbability(probabilities: ProbabilityObject): string {
    const entries = Object.entries(probabilities);
    const sum = entries.reduce((acc, [, value]) => acc + value, 0);
    
    if (sum !== 100) {
        throw new Error("The sum of all probabilities must equal 100%");
    }

    const randomValue = Math.random() * 100;
    let cumulativeProbability = 0;

    for (const [key, value] of entries) {
        cumulativeProbability += value;
        if (randomValue < cumulativeProbability) {
            return key;
        }
    }

    // Fallback in case of rounding errors
    return entries[entries.length - 1][0];
}