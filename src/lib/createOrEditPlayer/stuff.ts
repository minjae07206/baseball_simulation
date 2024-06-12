type AttributesEffectingStuff = {
    ballSpeed: number;
    ballMovement: number;
    ballSpin: number;
    deception: number;
    releasePoint: number;
  };

export function generateStuff(attributesEffectingStuff: AttributesEffectingStuff):number {
    return (
        (attributesEffectingStuff.ballSpeed * 0.3) +
        (attributesEffectingStuff.ballMovement * 0.3) + 
        (attributesEffectingStuff.ballSpin * 0.2) +
        (attributesEffectingStuff.deception * 0.1) +
        (attributesEffectingStuff.releasePoint * 0.1)
    )
}