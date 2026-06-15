import type { ClinicalStrategyEntry } from "./clinicalStrategies";
import type { MediaAttribution } from "./media";

import hundredPercentOxygen from "../media/images/clinical-strategies/hundred-percent-oxygen.jpg?url";
import antiplateletTherapy from "../media/images/clinical-strategies/antiplatelet-therapy.jpg?url";

export type ClinicalStrategyImageId = Extract<
  ClinicalStrategyEntry["id"],
  "hundred-percent-oxygen" | "antiplatelet-therapy"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/clinical-strategies/SOURCES.txt */
export const CLINICAL_STRATEGY_IMAGES: Partial<
  Record<ClinicalStrategyImageId, string>
> = {
  "hundred-percent-oxygen": extensionAssetUrl(hundredPercentOxygen),
  "antiplatelet-therapy": extensionAssetUrl(antiplateletTherapy),
};

export const CLINICAL_STRATEGY_IMAGE_ATTRIBUTIONS: Partial<
  Record<ClinicalStrategyImageId, MediaAttribution>
> = {
  "hundred-percent-oxygen": {
    label: "Wikimedia Commons (Non Rebreather Mask.JPG)",
    url: "https://commons.wikimedia.org/wiki/File:Non_Rebreather_Mask.JPG",
  },
  "antiplatelet-therapy": {
    label: "Wikimedia Commons (WBC (neutrophil) at centre, numerous erythrocytes and platelets (dot like bodies) in Wright's stained peripheral blood smear (PBS) microscopy.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:WBC_(neutrophil)_at_centre,_numerous_erythrocytes_and_platelets_(dot_like_bodies)_in_Wright%27s_stained_peripheral_blood_smear_(PBS)_microscopy.jpg",
  },
};

export const CLINICAL_STRATEGY_IMAGE_CAPTIONS: Partial<
  Record<ClinicalStrategyImageId, string>
> = {
  "hundred-percent-oxygen":
    "Non-rebreather mask delivering high-flow 100% oxygen — first-line acute cluster headache therapy",
  "antiplatelet-therapy":
    "Peripheral blood smear showing platelets (small dot-like bodies) — target of antiplatelet therapy",
};

export function getClinicalStrategyImageForId(
  id: string,
): string | undefined {
  return CLINICAL_STRATEGY_IMAGES[id as ClinicalStrategyImageId];
}

export function getClinicalStrategyImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return CLINICAL_STRATEGY_IMAGE_ATTRIBUTIONS[id as ClinicalStrategyImageId];
}

export function getClinicalStrategyImageCaptionForId(
  id: string,
): string | undefined {
  return CLINICAL_STRATEGY_IMAGE_CAPTIONS[id as ClinicalStrategyImageId];
}
