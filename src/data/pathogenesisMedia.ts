import type { MediaAttribution } from "./media";
import type { PathogenesisEntry } from "./pathogenesis";

import bloodBrainBarrier from "../media/images/pathogenesis/blood-brain-barrier.svg?url";
import lowFiberDiet from "../media/images/pathogenesis/low-fiber-diet.jpg?url";
import meconium from "../media/images/pathogenesis/meconium.jpg?url";

export type PathogenesisImageId = Extract<
  PathogenesisEntry["id"],
  "blood-brain-barrier" | "low-fiber-diet" | "meconium"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/pathogenesis/SOURCES.txt */
export const PATHOGENESIS_IMAGES: Partial<
  Record<PathogenesisImageId, string>
> = {
  "blood-brain-barrier": extensionAssetUrl(bloodBrainBarrier),
  "low-fiber-diet": extensionAssetUrl(lowFiberDiet),
  meconium: extensionAssetUrl(meconium),
};

export const PATHOGENESIS_IMAGE_ATTRIBUTIONS: Partial<
  Record<PathogenesisImageId, MediaAttribution>
> = {
  "blood-brain-barrier": {
    label: "Wikimedia Commons (Meninges diagram.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Meninges_diagram.svg",
  },
  "low-fiber-diet": {
    label: "Wikimedia Commons (Inflammed mucous layer of the intestinal villi depicting Celiac disease.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Inflammed_mucous_layer_of_the_intestinal_villi_depicting_Celiac_disease.jpg",
  },
  meconium: {
    label: "Wikimedia Commons (Biliary atresia.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Biliary_atresia.jpg",
  },
};

export const PATHOGENESIS_IMAGE_CAPTIONS: Partial<
  Record<PathogenesisImageId, string>
> = {
  "blood-brain-barrier":
    "CNS meningeal layers and neurovascular unit — tight junctions and astrocyte end-feet restrict paracellular passage at the blood-brain barrier",
  "low-fiber-diet":
    "Low dietary fiber reduces stool bulk and slows transit — predisposes to constipation and diverticulosis",
  meconium:
    "Neonatal intestinal obstruction — failure to pass meconium suggests Hirschsprung disease or meconium ileus",
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
