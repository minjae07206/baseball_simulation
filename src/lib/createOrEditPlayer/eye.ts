type AttributesEffectingEye = {
    baseballIQ: number;
    wristPower: number;
    sophisticated: number;
    DynamicVisualAcuity: number;
    activeness: number;
  };

export function generateEye(attributesEffectingEye: AttributesEffectingEye):number {
    return (
        (attributesEffectingEye.baseballIQ * 0.1) +
        (attributesEffectingEye.wristPower * 0.05) +
        (attributesEffectingEye.sophisticated * 0.3) +
        (attributesEffectingEye.DynamicVisualAcuity * 0.55) -
        //this is a minus attribute and is external, so does not count towards adding to 1.
        (attributesEffectingEye.activeness * 0.02)
    )
}