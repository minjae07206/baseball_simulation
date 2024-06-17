type AttributesEffectingThrowPower = {
    shoulderPower: number;
    wristPower: number;
  };

export function generateThrowPower(attributesEffectingThrowPower: AttributesEffectingThrowPower):number {
    return (
        (attributesEffectingThrowPower.shoulderPower * 0.8) +
        (attributesEffectingThrowPower.wristPower * 0.2)
    )
}