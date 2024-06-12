type AttributesEffectingReleasePoint = {
    sophisticated: number;
    wristPower: number;
    pitchingAbility: number;
    flexibility: number;
  };

export function generateReleasePoint(attributesEffectingReleasePoint: AttributesEffectingReleasePoint):number {
    return (
        (attributesEffectingReleasePoint.sophisticated * 0.4) +
        (attributesEffectingReleasePoint.wristPower * 0.1) +
        (attributesEffectingReleasePoint.pitchingAbility * 0.2) + 
        (attributesEffectingReleasePoint.flexibility * 0.3)
    )
}