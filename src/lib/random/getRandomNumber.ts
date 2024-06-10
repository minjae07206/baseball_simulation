/**
 * Generates a random integer between two given integers (inclusive).
 * @param {number} min - The lower bound of the range (inclusive).
 * @param {number} max - The upper bound of the range (inclusive).
 * @returns {number} - A random integer between min and max.
 */
export function getRandomNumberBetweenTwoInputs(min: number, max: number): number {
    // Ensure min and max are integers
    min = Math.ceil(min);
    max = Math.floor(max);

    // Generate random integer between min and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}