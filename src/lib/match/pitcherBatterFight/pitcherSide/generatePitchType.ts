export function generatePitchType(pitcher: any) {
    const pitchTypes: Record<string, number | string> = pitcher.pitchTypeStats[0];
    let maxPitchValue: number = 0;
    let pitchTypeList: { [key: string]: number } = {};

    // Find the max pitch value and collect pitch types
    for (const [key, value] of Object.entries(pitchTypes)) {
        if (key === "playerId" || value === 0) continue;
        const pitchTypeStatAsNumber = value as number;
        maxPitchValue = Math.max(maxPitchValue, pitchTypeStatAsNumber);
        pitchTypeList[key] = pitchTypeStatAsNumber;
    }

    // If there is only one pitch type, return it
    if (Object.keys(pitchTypeList).length === 1) {
        return Object.keys(pitchTypeList)[0];
    }

    // Calculate probabilities relative to the max pitch value
    let totalAdjustedValue = 0;
    let adjustedProbabilities: { [key: string]: number } = {};

    for (const [key, value] of Object.entries(pitchTypeList)) {
        const adjustedValue = value / maxPitchValue;
        adjustedProbabilities[key] = adjustedValue;
        totalAdjustedValue += adjustedValue;
    }

    // Normalize the probabilities to sum to 1 and apply the 0.8 max limit
    let normalizedProbabilities: { [key: string]: number } = {};
    let normalizationFactor = 1 / totalAdjustedValue;

    for (const [key, value] of Object.entries(adjustedProbabilities)) {
        let normalizedValue = value * normalizationFactor;
        if (normalizedValue > 0.8) {
            normalizedValue = 0.8;
        }
        normalizedProbabilities[key] = normalizedValue;
    }

    // Ensure the combined probability of two_seam, four_seam, and cutter is <= 0.8
    const seamKeys = ["two_seam_fastball", "four_seam_fastball", "cutter"];
    const seamTotal = seamKeys.reduce((sum, key) => sum + (normalizedProbabilities[key] || 0), 0);

    if (seamTotal > 0.8) {
        const reductionFactor = 0.8 / seamTotal;
        for (const key of seamKeys) {
            if (normalizedProbabilities[key]) {
                normalizedProbabilities[key] *= reductionFactor;
            }
        }
    }

    // Ensure the sum of all probabilities equals 1
    const probabilitySum = Object.values(normalizedProbabilities).reduce((sum, val) => sum + val, 0);
    const adjustmentFactor = 1 / probabilitySum;

    for (const key in normalizedProbabilities) {
        normalizedProbabilities[key] *= adjustmentFactor;
    }

    // Randomly select a pitch type based on these probabilities
    const randomValue = Math.random();
    let cumulativeProbability = 0;
    for (const [key, value] of Object.entries(normalizedProbabilities)) {
        cumulativeProbability += value;
        if (randomValue <= cumulativeProbability) {
            return key;
        }
    }

    // Fallback in case of floating point issues
    return Object.keys(normalizedProbabilities)[0];
}
