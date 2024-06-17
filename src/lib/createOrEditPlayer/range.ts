type AttributesEffectingRange = {
    speed: number;
    agility: number;
    legPower: number;
  };

export function generateRange(attributesEffectingRange: AttributesEffectingRange):number {
    return (
        (attributesEffectingRange.speed * 0.3) +
        (attributesEffectingRange.agility * 0.55) +
        (attributesEffectingRange.legPower * 0.15)
    )
}