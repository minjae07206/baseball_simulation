export function getIntention(ballCount: number, strikeCount: number, activeness: number): string {
    let strikeIntentionProbability = 0;
    const activenessNormalizer = (activeness / 100) * 0.2; 

    if (ballCount === 0 && strikeCount === 0) {
        strikeIntentionProbability = 0.5 + activenessNormalizer;
    } else if (ballCount === 0 && strikeCount === 1) {
        strikeIntentionProbability = 0.45 + activenessNormalizer;
    } else if (ballCount === 1 && strikeCount === 1) {
        strikeIntentionProbability = 0.5 + activenessNormalizer;
    } else if (ballCount === 0 && strikeCount === 2) {
        strikeIntentionProbability = 0.26 + activenessNormalizer;
    } else if (ballCount === 1 && strikeCount === 2) {
        strikeIntentionProbability = 0.38 + activenessNormalizer;
    } else if (ballCount === 1 && strikeCount === 0) {
        strikeIntentionProbability = 0.55 + activenessNormalizer;
    } else if (ballCount === 2 && strikeCount === 0) {
        strikeIntentionProbability = 0.65 + activenessNormalizer;
    } else if (ballCount === 2 && strikeCount === 1) {
        strikeIntentionProbability = 0.55 + activenessNormalizer;
    } else if (ballCount === 2 && strikeCount === 2) {
        strikeIntentionProbability = 0.44 + activenessNormalizer;
    } else if (ballCount === 3 && strikeCount === 0) {
        strikeIntentionProbability = 1; // Always a strike when 3-0
    } else if (ballCount === 3 && strikeCount === 1) {
        strikeIntentionProbability = 0.6 + activenessNormalizer;
    } else if (ballCount === 3 && strikeCount === 2) {
        strikeIntentionProbability = 0.41 + activenessNormalizer;
    }

    // Ensure the probability does not exceed 1
    strikeIntentionProbability = Math.min(strikeIntentionProbability, 1);
    const randomValue = Math.random();
    if (randomValue <= strikeIntentionProbability) {
        return "strike";
    } else {
        return "ball";
    }
}
