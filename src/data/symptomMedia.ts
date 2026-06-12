import type { MediaAttribution } from "./media";
import type { SymptomEntry } from "./symptoms";

import erythema from "../media/images/symptoms/erythema.jpg?url";
import papule from "../media/images/symptoms/papule.jpg?url";
import plaque from "../media/images/symptoms/plaque.jpg?url";
import purpura from "../media/images/symptoms/purpura.jpg?url";
import clubbing from "../media/images/symptoms/clubbing.jpg?url";
import lymphadenopathy from "../media/images/symptoms/lymphadenopathy.jpg?url";
import calcinosis from "../media/images/symptoms/calcinosis.jpg?url";

export type SymptomImageId = Extract<
  SymptomEntry["id"],
  | "erythema"
  | "papule"
  | "plaque"
  | "purpura"
  | "petechiae"
  | "clubbing"
  | "lymphadenopathy"
  | "calcinosis"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/symptoms/SOURCES.txt */
export const SYMPTOM_IMAGES: Partial<Record<SymptomImageId, string>> = {
  erythema: extensionAssetUrl(erythema),
  papule: extensionAssetUrl(papule),
  plaque: extensionAssetUrl(plaque),
  purpura: extensionAssetUrl(purpura),
  petechiae: extensionAssetUrl(purpura),
  clubbing: extensionAssetUrl(clubbing),
  lymphadenopathy: extensionAssetUrl(lymphadenopathy),
  calcinosis: extensionAssetUrl(calcinosis),
};

export const SYMPTOM_IMAGE_ATTRIBUTIONS: Partial<
  Record<SymptomImageId, MediaAttribution>
> = {
  erythema: {
    label: "Wikimedia Commons (Mikael Häggström, CC0)",
    url: "https://commons.wikimedia.org/wiki/File:Recurrent_erysipelas_on_edematous_leg.jpg",
  },
  papule: {
    label: "Wikimedia Commons (James Heilman, MD, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Lichen_Planus_(2).JPG",
  },
  plaque: {
    label: "Wikimedia Commons (James Heilman, MD, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Psoriasis2010.JPG",
  },
  purpura: {
    label: "Wikimedia Commons (James Heilman, MD, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Vasculitis.JPG",
  },
  petechiae: {
    label: "Wikimedia Commons (James Heilman, MD, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Vasculitis.JPG",
  },
  clubbing: {
    label: "Wikimedia Commons (CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Clubbing_fingers_2.jpg",
  },
  lymphadenopathy: {
    label: "Wikimedia Commons (James Heilman, MD, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Cervical_lymphadenopathy.jpg",
  },
  calcinosis: {
    label: "Wikimedia Commons (James Heilman, MD, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Calcinosis_cutis.jpg",
  },
};

export const SYMPTOM_IMAGE_CAPTIONS: Partial<Record<SymptomImageId, string>> = {
  erythema:
    "Sharply demarcated erythema of recurrent erysipelas (vasodilation with infection)",
  papule:
    "Violaceous flat-topped papules of lichen planus on the shins (solid, ≤1 cm)",
  plaque:
    "Erythematous plaque of psoriasis with silvery scale (solid, >1 cm)",
  purpura:
    "Petechiae and purpura on the lower limb from medication-induced leukocytoclastic vasculitis",
  petechiae:
    "Non-blanching petechiae on the lower limb from leukocytoclastic vasculitis",
  clubbing:
    "Finger clubbing — increased convexity of nail bed with loss of Lovibond angle",
  lymphadenopathy:
    "Cervical lymphadenopathy — enlarged palpable anterior cervical lymph nodes",
  calcinosis:
    "Calcinosis cutis — subcutaneous calcium deposits in systemic sclerosis",
};

export function getSymptomImageForId(id: string): string | undefined {
  return SYMPTOM_IMAGES[id as SymptomImageId];
}

export function getSymptomImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return SYMPTOM_IMAGE_ATTRIBUTIONS[id as SymptomImageId];
}

export function getSymptomImageCaptionForId(id: string): string | undefined {
  return SYMPTOM_IMAGE_CAPTIONS[id as SymptomImageId];
}
