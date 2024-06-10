/**
 * Generates a random date between two given years.
 * @param {number} startYear - The start year for the date range.
 * @param {number} endYear - The end year for the date range.
 * @returns {string} - A random date string in ISO 8601 format.
 * // Example usage:
const randomDate = getRandomDateBetweenYears(2020, 2023);
console.log(randomDate); // Example output: "2021-07-19T08:25:36.738Z"
 */
export function generateRandomDateBetweenYears(startYear: number, endYear: number): string {
    const startDate = new Date(startYear, 0, 1).getTime(); // January 1st of startYear
    const endDate = new Date(endYear, 11, 31, 23, 59, 59, 999).getTime(); // December 31st of endYear

    // Generate a random timestamp between the startDate and endDate
    const randomTimestamp = startDate + Math.random() * (endDate - startDate);

    // Create a Date object with the random timestamp
    const randomDate = new Date(randomTimestamp);

    // Return the date in ISO 8601 format to satisfy Prisma's DateTime type
    return randomDate.toISOString();
}


