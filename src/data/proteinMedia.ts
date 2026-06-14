import type { MediaAttribution } from "./media";
import type { ProteinEntry } from "./proteins";

import adenosineDeaminase from "../media/images/proteins/adenosine-deaminase.svg?url";
import ceruloplasmin from "../media/images/proteins/ceruloplasmin.svg?url";
import filaggrin from "../media/images/proteins/filaggrin.svg?url";
import intrinsicFactor from "../media/images/proteins/intrinsic-factor.svg?url";

export type ProteinImageId = Extract<
  ProteinEntry["id"],
  "adenosine-deaminase" | "ceruloplasmin" | "filaggrin" | "intrinsic-factor"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/proteins/SOURCES.txt */
export const PROTEIN_IMAGES: Partial<Record<ProteinImageId, string>> = {
  "adenosine-deaminase": extensionAssetUrl(adenosineDeaminase),
  ceruloplasmin: extensionAssetUrl(ceruloplasmin),
  filaggrin: extensionAssetUrl(filaggrin),
  "intrinsic-factor": extensionAssetUrl(intrinsicFactor),
};

export const PROTEIN_IMAGE_ATTRIBUTIONS: Partial<
  Record<ProteinImageId, MediaAttribution>
> = {
  "adenosine-deaminase": {
    label: "Created locally; reference: Adenosine deaminase",
    url: "https://en.wikipedia.org/wiki/Adenosine_deaminase",
  },
  ceruloplasmin: {
    label: "Created locally; reference: Ceruloplasmin",
    url: "https://en.wikipedia.org/wiki/Ceruloplasmin",
  },
  filaggrin: {
    label: "Created locally; reference: Filaggrin",
    url: "https://en.wikipedia.org/wiki/Filaggrin",
  },
  "intrinsic-factor": {
    label: "Created locally; reference: Intrinsic factor",
    url: "https://en.wikipedia.org/wiki/Intrinsic_factor",
  },
};

export const PROTEIN_IMAGE_CAPTIONS: Partial<Record<ProteinImageId, string>> = {
  "adenosine-deaminase":
    "ADA deficiency causes toxic dATP accumulation, impaired DNA synthesis, and SCID with T, B, and NK-cell failure",
  ceruloplasmin:
    "Hepatic ferroxidase and copper carrier — low in Wilson disease, Menkes disease, and copper deficiency",
  filaggrin:
    "Filaggrin aggregates keratin filaments in the stratum corneum — FLG loss-of-function increases atopic dermatitis and ichthyosis vulgaris risk",
  "intrinsic-factor":
    "Gastric parietal cell glycoprotein that binds B12 for ileal absorption — autoantibodies cause pernicious anemia",
};

export function getProteinImageForId(id: string): string | undefined {
  return PROTEIN_IMAGES[id as ProteinImageId];
}

export function getProteinImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return PROTEIN_IMAGE_ATTRIBUTIONS[id as ProteinImageId];
}

export function getProteinImageCaptionForId(id: string): string | undefined {
  return PROTEIN_IMAGE_CAPTIONS[id as ProteinImageId];
}
