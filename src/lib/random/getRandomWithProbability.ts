type Possibility<T> = {
    value: T;
    probability: number; // Probability should be between 0 and 1
  };
  
  /**
   * Returns a random value based on given possibilities and their probabilities.
   * @param {Possibility<T>[]} possibilities - Array of possibilities with their probabilities.
   * @returns {T} - A randomly selected value based on the probabilities.
   */
export function getRandomValueBasedOnProbability<T>(possibilities: Possibility<T>[]): T {
    const randomValue = Math.random();
    let cumulativeProbability = 0;
  
    for (const possibility of possibilities) {
      cumulativeProbability += possibility.probability;
      if (randomValue < cumulativeProbability) {
        return possibility.value;
      }
    }
  
    // In case of floating-point arithmetic issues, return the last possibility
    return possibilities[possibilities.length - 1].value;
  }
  