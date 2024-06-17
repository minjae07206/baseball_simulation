type AttributesEffectingBattingEye = {
    baseballIQ: number;
    wristPower: number;
    sophisticated: number;
    DynamicVisualAcuity: number;
    activeness: number;
  };

export function generateBattingEye(attributesEffectingBattingEye: AttributesEffectingBattingEye):number {
    return (
        (attributesEffectingBattingEye.baseballIQ * 0.1) +
        (attributesEffectingBattingEye.wristPower * 0.05) +
        (attributesEffectingBattingEye.sophisticated * 0.3) +
        (attributesEffectingBattingEye.DynamicVisualAcuity * 0.55) -
        //this is a minus attribute and is external, so does not count towards adding to 1.
        (attributesEffectingBattingEye.activeness * 0.02)
    )
}