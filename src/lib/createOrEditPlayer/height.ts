import { getRandomNumberBetweenTwoInputs } from "@/lib/random/getRandomNumber";
export function generateHeight() {
    const randomValue = Math.random();
    if (randomValue < 0.4) {
        return getRandomNumberBetweenTwoInputs(178, 185);
    } else if (randomValue < 0.6) {
        return getRandomNumberBetweenTwoInputs(170, 177);
    } else if (randomValue < 0.75) {
        return getRandomNumberBetweenTwoInputs(186, 190)
    } else if (randomValue < 0.9) {
        return getRandomNumberBetweenTwoInputs(191, 200)
    } else if (randomValue < 0.92) {
        return getRandomNumberBetweenTwoInputs(201, 205);
    } else {
        return getRandomNumberBetweenTwoInputs(159, 169)
    }
}