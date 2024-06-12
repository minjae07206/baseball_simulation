type AttributesEffectingPickoff = {
    shoulderPower: number;
    agility: number;
    baseballIQ: number;
  };

export function generatePickoff(attributesEffectingPickoff: AttributesEffectingPickoff):number {
    return (
        (attributesEffectingPickoff.shoulderPower * 0.1) +
        (attributesEffectingPickoff.agility * 0.55) + 
        (attributesEffectingPickoff.baseballIQ * 0.35)
    )
}