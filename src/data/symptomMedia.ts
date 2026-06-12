import type { MediaAttribution } from "./media";
import type { SymptomEntry } from "./symptoms";

import bullae from "../media/images/symptoms/bullae.jpg?url";
import calcinosis from "../media/images/symptoms/calcinosis.jpg?url";
import clubbing from "../media/images/symptoms/clubbing.jpg?url";
import cyanosis from "../media/images/symptoms/cyanosis.jpg?url";
import dactylitis from "../media/images/symptoms/dactylitis.jpg?url";
import erythema from "../media/images/symptoms/erythema.jpg?url";
import jaundice from "../media/images/symptoms/jaundice.jpg?url";
import lichenification from "../media/images/symptoms/lichenification.jpg?url";
import lymphadenopathy from "../media/images/symptoms/lymphadenopathy.jpg?url";
import maculopapularRash from "../media/images/symptoms/maculopapular-rash.jpg?url";
import nodularLymphangitis from "../media/images/symptoms/nodular-lymphangitis.jpg?url";
import nuchalRigidity from "../media/images/symptoms/nuchal-rigidity.jpg?url";
import papule from "../media/images/symptoms/papule.jpg?url";
import plaque from "../media/images/symptoms/plaque.jpg?url";
import purpura from "../media/images/symptoms/purpura.jpg?url";
import sclerodactyly from "../media/images/symptoms/sclerodactyly.jpg?url";
import skinThickening from "../media/images/symptoms/skin-thickening.jpg?url";
import telangiectasia from "../media/images/symptoms/telangiectasia.jpg?url";
import vesicle from "../media/images/symptoms/vesicle.jpg?url";

export type SymptomImageId = Extract<
  SymptomEntry["id"],
  | "bullae"
  | "calcinosis"
  | "clubbing"
  | "cyanosis"
  | "dactylitis"
  | "erythema"
  | "jaundice"
  | "lichenification"
  | "lymphadenopathy"
  | "maculopapular-rash"
  | "nodular-lymphangitis"
  | "nuchal-rigidity"
  | "papule"
  | "plaque"
  | "purpura"
  | "sclerodactyly"
  | "skin-thickening"
  | "telangiectasia"
  | "vesicle"
  | "petechiae"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/symptoms/SOURCES.txt */
export const SYMPTOM_IMAGES: Partial<Record<SymptomImageId, string>> = {
  "bullae": extensionAssetUrl(bullae),
  "calcinosis": extensionAssetUrl(calcinosis),
  "clubbing": extensionAssetUrl(clubbing),
  "cyanosis": extensionAssetUrl(cyanosis),
  "dactylitis": extensionAssetUrl(dactylitis),
  "erythema": extensionAssetUrl(erythema),
  "jaundice": extensionAssetUrl(jaundice),
  "lichenification": extensionAssetUrl(lichenification),
  "lymphadenopathy": extensionAssetUrl(lymphadenopathy),
  "maculopapular-rash": extensionAssetUrl(maculopapularRash),
  "nodular-lymphangitis": extensionAssetUrl(nodularLymphangitis),
  "nuchal-rigidity": extensionAssetUrl(nuchalRigidity),
  "papule": extensionAssetUrl(papule),
  "plaque": extensionAssetUrl(plaque),
  "purpura": extensionAssetUrl(purpura),
  "sclerodactyly": extensionAssetUrl(sclerodactyly),
  "skin-thickening": extensionAssetUrl(skinThickening),
  "telangiectasia": extensionAssetUrl(telangiectasia),
  "vesicle": extensionAssetUrl(vesicle),
  "petechiae": extensionAssetUrl(purpura),
};

export const SYMPTOM_IMAGE_ATTRIBUTIONS: Partial<
  Record<SymptomImageId, MediaAttribution>
> = {
  "bullae": { label: "Wikimedia Commons (Bullous pemphigoid new image.jpg)", url: "https://commons.wikimedia.org/wiki/File:Bullous_pemphigoid_new_image.jpg" },
  "calcinosis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:calcinosis.jpg" },
  "clubbing": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:clubbing.jpg" },
  "cyanosis": { label: "Wikimedia Commons (My Heartbeat and Peripheral Oxygen Saturation (SpO2) (29609885543).jpg)", url: "https://commons.wikimedia.org/wiki/File:My_Heartbeat_and_Peripheral_Oxygen_Saturation_(SpO2)_(29609885543).jpg" },
  "dactylitis": { label: "Wikimedia Commons (Quick Reference Guide for Clinicians- Sickle Cell Disease- Comprehensive Screening and Management in Newborns and Infants (IA quickreferencegu00unse).pdf)", url: "https://commons.wikimedia.org/wiki/File:Quick_Reference_Guide_for_Clinicians-_Sickle_Cell_Disease-_Comprehensive_Screening_and_Management_in_Newborns_and_Infants_(IA_quickreferencegu00unse).pdf" },
  "erythema": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:erythema.jpg" },
  "jaundice": { label: "Wikimedia Commons (Troupial (Icterus icterus).jpg)", url: "https://commons.wikimedia.org/wiki/File:Troupial_(Icterus_icterus).jpg" },
  "lichenification": { label: "Wikimedia Commons (Clinical features of atopic dermatitis in English.png)", url: "https://commons.wikimedia.org/wiki/File:Clinical_features_of_atopic_dermatitis_in_English.png" },
  "lymphadenopathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:lymphadenopathy.jpg" },
  "maculopapular-rash": { label: "Wikimedia Commons (Generalized ACLE.jpg)", url: "https://commons.wikimedia.org/wiki/File:Generalized_ACLE.jpg" },
  "nodular-lymphangitis": { label: "Wikimedia Commons (Sporotrichosis by the fungus Sporothrix schenckii PHIL 3940 lores.jpg)", url: "https://commons.wikimedia.org/wiki/File:Sporotrichosis_by_the_fungus_Sporothrix_schenckii_PHIL_3940_lores.jpg" },
  "nuchal-rigidity": { label: "Wikimedia Commons (Books from the Library of Congress (IA moderndiagnosi00shef).pdf)", url: "https://commons.wikimedia.org/wiki/File:Books_from_the_Library_of_Congress_(IA_moderndiagnosi00shef).pdf" },
  "papule": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:papule.jpg" },
  "plaque": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:plaque.jpg" },
  "purpura": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:purpura.jpg" },
  "sclerodactyly": { label: "Wikimedia Commons (Calcinosis of CREST syndrome.jpg)", url: "https://commons.wikimedia.org/wiki/File:Calcinosis_of_CREST_syndrome.jpg" },
  "skin-thickening": { label: "Wikimedia Commons (On scleroderma (IA 101695003.nlm.nih.gov).pdf)", url: "https://commons.wikimedia.org/wiki/File:On_scleroderma_(IA_101695003.nlm.nih.gov).pdf" },
  "telangiectasia": { label: "Wikimedia Commons (SpiderAngioma.jpg)", url: "https://commons.wikimedia.org/wiki/File:SpiderAngioma.jpg" },
  "vesicle": { label: "Wikimedia Commons (Diseases of the mouth; for physicians, dentists, medical and dental students (1912) (14772644622).jpg)", url: "https://commons.wikimedia.org/wiki/File:Diseases_of_the_mouth;_for_physicians,_dentists,_medical_and_dental_students_(1912)_(14772644622).jpg" },
  "petechiae": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:purpura.jpg" },
};

export const SYMPTOM_IMAGE_CAPTIONS: Partial<Record<SymptomImageId, string>> = {
  "bullae": "Clinical or pathologic image illustrating bullae",
  "calcinosis": "Calcinosis cutis — subcutaneous calcium deposits in systemic sclerosis",
  "clubbing": "Finger clubbing — increased convexity of nail bed with loss of Lovibond angle",
  "cyanosis": "Clinical or pathologic image illustrating cyanosis",
  "dactylitis": "Clinical or pathologic image illustrating dactylitis",
  "erythema": "Sharply demarcated erythema of recurrent erysipelas (vasodilation with infection)",
  "jaundice": "Clinical or pathologic image illustrating jaundice",
  "lichenification": "Clinical or pathologic image illustrating lichenification",
  "lymphadenopathy": "Cervical lymphadenopathy — enlarged palpable anterior cervical lymph nodes",
  "maculopapular-rash": "Clinical or pathologic image illustrating maculopapular rash",
  "nodular-lymphangitis": "Clinical or pathologic image illustrating nodular lymphangitis",
  "nuchal-rigidity": "Clinical or pathologic image illustrating nuchal rigidity",
  "papule": "Violaceous flat-topped papules of lichen planus on the shins (solid, ≤1 cm)",
  "plaque": "Erythematous plaque of psoriasis with silvery scale (solid, >1 cm)",
  "purpura": "Petechiae and purpura on the lower limb from medication-induced leukocytoclastic vasculitis",
  "sclerodactyly": "Clinical or pathologic image illustrating sclerodactyly",
  "skin-thickening": "Clinical or pathologic image illustrating skin thickening",
  "telangiectasia": "Clinical or pathologic image illustrating telangiectasia",
  "vesicle": "Clinical or pathologic image illustrating vesicle",
  "petechiae": "Non-blanching petechiae on the lower limb from leukocytoclastic vasculitis",
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
