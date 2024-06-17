type AttributesEffectingThrowAccuracy = {
    sophisticated: number;
    handEyeCoordination: number;
  };

export function generateThrowAccuracy(attributesEffectingThrowAccuracy: AttributesEffectingThrowAccuracy):number {
    return (
        (attributesEffectingThrowAccuracy.sophisticated * 0.8) +
        (attributesEffectingThrowAccuracy.handEyeCoordination * 0.2)
    )
}