type AttributesEffectingCatching = {
    dynamicVisualAcuity: number;
    flexibility: number;
    height: number;
  };

export function generateCatching(attributesEffectingCatching: AttributesEffectingCatching):number {
    return (
        (attributesEffectingCatching.dynamicVisualAcuity * 0.6) +
        (attributesEffectingCatching.flexibility * 0.3) +
        (attributesEffectingCatching.height * 0.1)
    )
}