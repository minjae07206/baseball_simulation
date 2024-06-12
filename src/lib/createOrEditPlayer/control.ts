type AttributesEffectingControl = {
    handEyeCoordination: number;
    sophisticated: number;
    effort: number;
    flexibility: number;
    pitchingAbility: number;
    corePower: number;
  };

export function generateControl(attributesEffectingControl: AttributesEffectingControl):number {
    return (
        (attributesEffectingControl.handEyeCoordination * 0.3) +
        (attributesEffectingControl.effort * 0.15) + 
        (attributesEffectingControl.flexibility * 0.15) + 
        (attributesEffectingControl.pitchingAbility * 0.1) + 
        (attributesEffectingControl.corePower * 0.1) + 
        (attributesEffectingControl.sophisticated * 0.2)
    )
}