type AttributesEffectingBallMovement = {
    shoulderPower: number;
    wristPower: number;
    pitchingAbility: number;
  };

export function generateBallMovement(attributesEffectingBallMovement: AttributesEffectingBallMovement):number {
    return (
        (attributesEffectingBallMovement.shoulderPower * 0.15) +
        (attributesEffectingBallMovement.wristPower * 0.25) +
        (attributesEffectingBallMovement.pitchingAbility * 0.6)
    )
}