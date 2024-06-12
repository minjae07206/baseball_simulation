type AttributesEffectingBallSpeed = {
    shoulderPower: number;
    legPower: number;
    corePower: number;
  };

export function generateBallSpeed(attributesEffectingBallSpeed: AttributesEffectingBallSpeed):number {
    return (
        (attributesEffectingBallSpeed.shoulderPower * 0.5) +
        (attributesEffectingBallSpeed.legPower * 0.35) + 
        (attributesEffectingBallSpeed.corePower * 0.15)
    )
}