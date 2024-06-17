type AttributesEffectingPitchSpin = {
    shoulderPower: number;
    legPower: number;
    corePower: number;
    wristPower: number;
    pitchingAbility: number
  };

export function generatePitchSpin(attributesEffectingPitchSpin: AttributesEffectingPitchSpin):number {
    return (
        (attributesEffectingPitchSpin.shoulderPower * 0.1) +
        (attributesEffectingPitchSpin.legPower * 0.1) + 
        (attributesEffectingPitchSpin.corePower * 0.1) + 
        (attributesEffectingPitchSpin.wristPower * 0.4) + 
        (attributesEffectingPitchSpin.pitchingAbility * 0.3)
    )
}