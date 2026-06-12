import type { MediaAttribution } from "./media";
import type { MusculoskeletalEntry } from "./musculoskeletal";

import acromion from "../media/images/musculoskeletal/acromion.jpg?url";
import sarcomereDiagram from "../media/images/musculoskeletal/sarcomere-diagram.svg?url";

export type MUSCULOSKELETALImageId = Extract<
  MusculoskeletalEntry["id"],
  | "acromion"
  | "sarcomere"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/musculoskeletal/SOURCES.txt */
export const MUSCULOSKELETAL_IMAGES: Partial<Record<MUSCULOSKELETALImageId, string>> = {
  "acromion": extensionAssetUrl(acromion),
  "sarcomere": extensionAssetUrl(sarcomereDiagram),
};

export const MUSCULOSKELETAL_IMAGE_ATTRIBUTIONS: Partial<
  Record<MUSCULOSKELETALImageId, MediaAttribution>
> = {
  "acromion": { label: "Wikimedia Commons (Acromion of scapula02.png)", url: "https://commons.wikimedia.org/wiki/File:Acromion_of_scapula02.png" },
  "sarcomere": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:sarcomere-diagram.svg" },
};

export const MUSCULOSKELETAL_IMAGE_CAPTIONS: Partial<Record<MUSCULOSKELETALImageId, string>> = {
  "acromion": "Clinical or pathologic image illustrating acromion",
  "sarcomere": "Sarcomere bands: Z line (boundaries), M line (center), A band (myosin length), I band (actin only), H zone (thick filaments only)",
};

export function getMusculoskeletalImageForId(id: string): string | undefined {
  return MUSCULOSKELETAL_IMAGES[id as MUSCULOSKELETALImageId];
}

export function getMusculoskeletalImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return MUSCULOSKELETAL_IMAGE_ATTRIBUTIONS[id as MUSCULOSKELETALImageId];
}

export function getMusculoskeletalImageCaptionForId(id: string): string | undefined {
  return MUSCULOSKELETAL_IMAGE_CAPTIONS[id as MUSCULOSKELETALImageId];
}
