export function getFoulOrNot(record: any): string {
    // Set the probability for foul balls
    const foulProbability = 0.28;

    // Generate a random value between 0 and 1
    const randomValue = Math.random();

    // Return "foul" if the random value is less than or equal to the foul probability
    if (randomValue <= foulProbability) {
        return "foul";
    } else {
        return "fair";
    }
}