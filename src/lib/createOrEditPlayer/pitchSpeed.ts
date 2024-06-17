type AttributesEffectingPitchSpeed = {
    shoulderPower: number;
    legPower: number;
    corePower: number;
  };

export function generatePitchSpeed(attributesEffectingPitchSpeed: AttributesEffectingPitchSpeed):number {
    return (
        (attributesEffectingPitchSpeed.shoulderPower * 0.5) +
        (attributesEffectingPitchSpeed.legPower * 0.35) + 
        (attributesEffectingPitchSpeed.corePower * 0.15)
    )
}