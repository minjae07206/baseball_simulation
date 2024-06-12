type AttributesEffectingHealth = {
    durability: number;
    lifestyle: number;
  };

export function generateHealth(attributesEffectingHealth: AttributesEffectingHealth):number {
    return (
        (attributesEffectingHealth.lifestyle * 0.4) +
        (attributesEffectingHealth.durability * 0.6)
    )
}