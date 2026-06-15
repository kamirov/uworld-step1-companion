import type { HemodynamicEntry } from "./hemodynamics";
import type { MediaAttribution } from "./media";

import autoregulation from "../media/images/hemodynamics/autoregulation.png?url";
import intracranialPressure from "../media/images/hemodynamics/intracranial-pressure.jpg?url";

export type HemodynamicImageId = Extract<
  HemodynamicEntry["id"],
  "autoregulation" | "intracranial-pressure"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/hemodynamics/SOURCES.txt */
export const HEMODYNAMIC_IMAGES: Partial<
  Record<HemodynamicImageId, string>
> = {
  autoregulation: extensionAssetUrl(autoregulation),
  "intracranial-pressure": extensionAssetUrl(intracranialPressure),
};

export const HEMODYNAMIC_IMAGE_ATTRIBUTIONS: Partial<
  Record<HemodynamicImageId, MediaAttribution>
> = {
  autoregulation: {
    label: "Wikimedia Commons (Renal corpuscle.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Renal_corpuscle.svg",
  },
  "intracranial-pressure": {
    label: "Wikimedia Commons (Papilledema.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Papilledema.jpg",
  },
};

export const HEMODYNAMIC_IMAGE_CAPTIONS: Partial<
  Record<HemodynamicImageId, string>
> = {
  autoregulation:
    "Renal corpuscle with macula densa — tubuloglomerular feedback is a key renal autoregulation mechanism stabilizing GFR",
  "intracranial-pressure":
    "Fundoscopic papilledema — optic disc swelling from elevated intracranial pressure",
};

export function getHemodynamicImageForId(id: string): string | undefined {
  return HEMODYNAMIC_IMAGES[id as HemodynamicImageId];
}

export function getHemodynamicImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return HEMODYNAMIC_IMAGE_ATTRIBUTIONS[id as HemodynamicImageId];
}

export function getHemodynamicImageCaptionForId(
  id: string,
): string | undefined {
  return HEMODYNAMIC_IMAGE_CAPTIONS[id as HemodynamicImageId];
}
