import type { MediaAttribution } from "./media";
import type { PathogenesisEntry } from "./pathogenesis";

import bloodBrainBarrier from "../media/images/pathogenesis/blood-brain-barrier.svg?url";

export type PathogenesisImageId = Extract<
  PathogenesisEntry["id"],
  "blood-brain-barrier"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/pathogenesis/SOURCES.txt */
export const PATHOGENESIS_IMAGES: Partial<
  Record<PathogenesisImageId, string>
> = {
  "blood-brain-barrier": extensionAssetUrl(bloodBrainBarrier),
};

export const PATHOGENESIS_IMAGE_ATTRIBUTIONS: Partial<
  Record<PathogenesisImageId, MediaAttribution>
> = {
  "blood-brain-barrier": {
    label: "Wikimedia Commons (Meninges diagram.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Meninges_diagram.svg",
  },
};

export const PATHOGENESIS_IMAGE_CAPTIONS: Partial<
  Record<PathogenesisImageId, string>
> = {
  "blood-brain-barrier":
    "CNS meningeal layers and neurovascular unit — tight junctions and astrocyte end-feet restrict paracellular passage at the blood-brain barrier",
};

export function getPathogenesisImageForId(id: string): string | undefined {
  return PATHOGENESIS_IMAGES[id as PathogenesisImageId];
}

export function getPathogenesisImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return PATHOGENESIS_IMAGE_ATTRIBUTIONS[id as PathogenesisImageId];
}

export function getPathogenesisImageCaptionForId(
  id: string,
): string | undefined {
  return PATHOGENESIS_IMAGE_CAPTIONS[id as PathogenesisImageId];
}
