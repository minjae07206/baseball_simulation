type AttributesEffectingHandling = {
    flexibility: number;
    sophisticated: number;
    wristPower: number;
  };

export function generateHandling(attributesEffectingHandling: AttributesEffectingHandling):number {
    return (
        (attributesEffectingHandling.flexibility * 0.4) +
        (attributesEffectingHandling.sophisticated * 0.45) +
        (attributesEffectingHandling.wristPower * 0.15)
    )
}