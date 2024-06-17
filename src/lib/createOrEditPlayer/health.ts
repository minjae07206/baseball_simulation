type AttributesEffectingHealth = {
    durability: number;
    lifeStyle: number;
  };

export function generateHealth(attributesEffectingHealth: AttributesEffectingHealth):number {
    return (
        (attributesEffectingHealth.lifeStyle * 0.4) +
        (attributesEffectingHealth.durability * 0.6)
    )
}