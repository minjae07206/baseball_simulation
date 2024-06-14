type AttributesEffectingContact = {
    battingAbility: number;
    flexibility: number;
    handEyeCoordination: number;
    sophisticated: number;
  };

export function generateContact(attributesEffectingContact: AttributesEffectingContact):number {
    return (
        (attributesEffectingContact.battingAbility * 0.25) +
        (attributesEffectingContact.flexibility * 0.1) +
        (attributesEffectingContact.handEyeCoordination * 0.5) +
        (attributesEffectingContact.sophisticated * 0.15)
    )
}