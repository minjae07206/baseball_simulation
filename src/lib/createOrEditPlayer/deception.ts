type AttributesEffectingDeception = {
    baseballIQ: number;
    flexibility: number;
    creativity: number;
    pitchingAbility: number
  };

export function generateDeception(attributesEffectingDeception: AttributesEffectingDeception):number {
    return (
        (attributesEffectingDeception.baseballIQ * 0.15) +
        (attributesEffectingDeception.creativity * 0.35) + 
        (attributesEffectingDeception.flexibility * 0.3) + 
        (attributesEffectingDeception.pitchingAbility * 0.2)
    )
}