type Outcome = "homerun" | "linedrive" | "flyball" | "infield flyball" | "groundball" | "foul";

export function getBasicContactResult(record: any): Outcome {
    // Base probabilities
    let probabilities = {
        homerun: 0.01,        // 1% base chance
        linedrive: 0.233,     // 23.3% base chance
        flyball: 0.32,        // 32% base chance
        infieldFlyball: 0.057, // 5.7% base chance
        groundball: 0.4,      // 40% base chance
    };

    // Adjustments
    const homerunAdjustment: number = ((record.batter.power - 50) / 49) * 0.09;
    probabilities.homerun += homerunAdjustment;
    probabilities.homerun = Math.max(0, probabilities.homerun);

    const linedriveAdjustment: number = ((record.batter.contact - 50) / 49) * 0.117;
    probabilities.linedrive += linedriveAdjustment;
    probabilities.linedrive = Math.max(0, probabilities.linedrive);

    const groundballAdjustment: number = ((record.pitcher.pitchMovement - 50) / 49) * 0.2;
    probabilities.groundball += groundballAdjustment;
    probabilities.groundball = Math.max(0, probabilities.groundball);

    const flyballAdjustment: number = ((50 - record.pitcher.pitchMovement) / 49) * 0.15;
    probabilities.flyball += flyballAdjustment;
    probabilities.flyball = Math.max(0, probabilities.flyball);

    // Calculate cumulative probability
    let cumulativeProbability = probabilities.homerun +
        probabilities.linedrive +
        probabilities.flyball +
        probabilities.infieldFlyball +
        probabilities.groundball;

    // If cumulative probability exceeds 1, scale down all probabilities
    if (cumulativeProbability > 1) {
        const scalingFactor = 1 / cumulativeProbability;
        probabilities.homerun *= scalingFactor;
        probabilities.linedrive *= scalingFactor;
        probabilities.flyball *= scalingFactor;
        probabilities.infieldFlyball *= scalingFactor;
        probabilities.groundball *= scalingFactor;
    } else if (cumulativeProbability < 1) {
        // Distribute the remaining probability proportionally
        const remainingProbability = 1 - cumulativeProbability;
        const totalAdjustableProbabilities = cumulativeProbability; // Excluding "foul"

        if (totalAdjustableProbabilities > 0) {
            probabilities.homerun += (probabilities.homerun / totalAdjustableProbabilities) * remainingProbability;
            probabilities.linedrive += (probabilities.linedrive / totalAdjustableProbabilities) * remainingProbability;
            probabilities.flyball += (probabilities.flyball / totalAdjustableProbabilities) * remainingProbability;
            probabilities.infieldFlyball += (probabilities.infieldFlyball / totalAdjustableProbabilities) * remainingProbability;
            probabilities.groundball += (probabilities.groundball / totalAdjustableProbabilities) * remainingProbability;
        }
    }

    // Round probabilities to 3 decimal places
    probabilities.homerun = parseFloat(probabilities.homerun.toFixed(3));
    probabilities.linedrive = parseFloat(probabilities.linedrive.toFixed(3));
    probabilities.flyball = parseFloat(probabilities.flyball.toFixed(3));
    probabilities.infieldFlyball = parseFloat(probabilities.infieldFlyball.toFixed(3));
    probabilities.groundball = parseFloat(probabilities.groundball.toFixed(3));

    // Generate a cumulative probability distribution
    const cumulativeProbabilities = {
        homerun: probabilities.homerun,
        linedrive: probabilities.homerun + probabilities.linedrive,
        flyball: probabilities.homerun + probabilities.linedrive + probabilities.flyball,
        infieldFlyball: probabilities.homerun + probabilities.linedrive + probabilities.flyball + probabilities.infieldFlyball,
        groundball: probabilities.homerun + probabilities.linedrive + probabilities.flyball + probabilities.infieldFlyball + probabilities.groundball,
    };

    // Determine the outcome based on a random value
    const randomValue = Math.random();

    if (randomValue <= cumulativeProbabilities.homerun) {
        return "homerun";
    } else if (randomValue <= cumulativeProbabilities.linedrive) {
        return "linedrive";
    } else if (randomValue <= cumulativeProbabilities.flyball) {
        return "flyball";
    } else if (randomValue <= cumulativeProbabilities.infieldFlyball) {
        return "infield flyball";
    } else {
        return "groundball";
    }
}
