import { getRandomNumberBetweenTwoInputs } from "@/lib/random/getRandomNumber";
type AttributesEffectingGapPower = {
    battingAbility: number;
    speed: number;
    shoulderPower: number;
};
export function generateGapPower(attributesEffectingGapPower: AttributesEffectingGapPower): number {
    return (
        (attributesEffectingGapPower.battingAbility * 0.2) +
        (attributesEffectingGapPower.shoulderPower * 0.1) +
        (attributesEffectingGapPower.speed * 0.4) +
        (getRandomNumberBetweenTwoInputs(1, 99) * 0.3) 
    )
}