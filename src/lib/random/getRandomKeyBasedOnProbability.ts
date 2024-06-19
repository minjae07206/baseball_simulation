interface ProbabilityObject {
    [key: string]: number;
}

export function getRandomKeyBasedOnProbability(probabilities: ProbabilityObject): string {
    const entries = Object.entries(probabilities);
    const sum = entries.reduce((acc, [, value]) => acc + value, 0);
    // Define a small tolerance for floating-point precision issues
    const tolerance = 1e-9;
    if (Math.abs(sum - 100) > tolerance) {
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