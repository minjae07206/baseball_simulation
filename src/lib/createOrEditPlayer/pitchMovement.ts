type AttributesEffectingPitchMovement = {
    shoulderPower: number;
    wristPower: number;
    pitchingAbility: number;
  };

export function generatePitchMovement(attributesEffectingPitchMovement: AttributesEffectingPitchMovement):number {
    return (
        (attributesEffectingPitchMovement.shoulderPower * 0.15) +
        (attributesEffectingPitchMovement.wristPower * 0.25) +
        (attributesEffectingPitchMovement.pitchingAbility * 0.6)
    )
}