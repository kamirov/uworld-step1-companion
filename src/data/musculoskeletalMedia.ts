import type { MediaAttribution } from "./media";
import type { MusculoskeletalEntry } from "./musculoskeletal";

import sarcomereDiagram from "../media/images/musculoskeletal/sarcomere-diagram.svg?url";

export type MusculoskeletalImageId = MusculoskeletalEntry["id"];

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/musculoskeletal/SOURCES.txt */
export const MUSCULOSKELETAL_IMAGES: Partial<
  Record<MusculoskeletalImageId, string>
> = {
  sarcomere: extensionAssetUrl(sarcomereDiagram),
};

export const MUSCULOSKELETAL_IMAGE_ATTRIBUTIONS: Partial<
  Record<MusculoskeletalImageId, MediaAttribution>
> = {
  sarcomere: {
    label: "Wikimedia Commons (SlothMcCarty, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Sarcomere_diagram.svg",
  },
};

export const MUSCULOSKELETAL_IMAGE_CAPTIONS: Partial<
  Record<MusculoskeletalImageId, string>
> = {
  sarcomere:
    "Sarcomere bands: Z line (boundaries), M line (center), A band (myosin length), I band (actin only), H zone (thick filaments only)",
};

export function getMusculoskeletalImageForId(
  id: string,
): string | undefined {
  return MUSCULOSKELETAL_IMAGES[id as MusculoskeletalImageId];
}

export function getMusculoskeletalImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return MUSCULOSKELETAL_IMAGE_ATTRIBUTIONS[id as MusculoskeletalImageId];
}

export function getMusculoskeletalImageCaptionForId(
  id: string,
): string | undefined {
  return MUSCULOSKELETAL_IMAGE_CAPTIONS[id as MusculoskeletalImageId];
}
