type AttributesEffectingStuff = {
    pitchSpeed: number;
    pitchMovement: number;
    pitchSpin: number;
    deception: number;
    releasePoint: number;
  };

export function generateStuff(attributesEffectingStuff: AttributesEffectingStuff):number {
    return (
        (attributesEffectingStuff.pitchSpeed * 0.3) +
        (attributesEffectingStuff.pitchMovement * 0.3) + 
        (attributesEffectingStuff.pitchSpin * 0.2) +
        (attributesEffectingStuff.deception * 0.1) +
        (attributesEffectingStuff.releasePoint * 0.1)
    )
}