type AttributesEffectingBaseRunning = {
    baseballIQ: number;
    speed: number;
    agility: number;
    legPower: number;
  };

export function generateBaseRunning(attributesEffectingBaseRunning: AttributesEffectingBaseRunning):number {
    return (
        (attributesEffectingBaseRunning.baseballIQ * 0.2) +
        (attributesEffectingBaseRunning.speed * 0.5) +
        (attributesEffectingBaseRunning.agility * 0.2) +
        (attributesEffectingBaseRunning.legPower * 0.1)
    )
}