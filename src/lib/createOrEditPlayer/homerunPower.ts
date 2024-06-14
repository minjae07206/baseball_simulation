type AttributesEffectingHomerunPower = {
    battingAbility: number;
    shoulderPower: number;
    legPower: number;
    corePower: number;
  };

export function generateHomerunPower(attributesEffectingHomerunPower: AttributesEffectingHomerunPower):number {
    return (
        (attributesEffectingHomerunPower.battingAbility * 0.1) +
        (attributesEffectingHomerunPower.shoulderPower * 0.05) +
        (attributesEffectingHomerunPower.legPower * 0.3) +
        (attributesEffectingHomerunPower.corePower * 0.55)
    )
}