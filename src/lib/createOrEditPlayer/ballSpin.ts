type AttributesEffectingBallSpin = {
    shoulderPower: number;
    legPower: number;
    corePower: number;
    wristPower: number;
    pitchingAbility: number
  };

export function generateBallSpin(attributesEffectingBallSpin: AttributesEffectingBallSpin):number {
    return (
        (attributesEffectingBallSpin.shoulderPower * 0.1) +
        (attributesEffectingBallSpin.legPower * 0.1) + 
        (attributesEffectingBallSpin.corePower * 0.1) + 
        (attributesEffectingBallSpin.wristPower * 0.4) + 
        (attributesEffectingBallSpin.pitchingAbility * 0.3)
    )
}