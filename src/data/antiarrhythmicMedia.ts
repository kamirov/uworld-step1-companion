import type { MediaAttribution } from "./media";
import type { AntiarrhythmicClass } from "./medications";
import { getMedicationById } from "./medications";

import classIa from "../media/images/antiarrhythmics/class-ia.svg?url";
import classIb from "../media/images/antiarrhythmics/class-ib.svg?url";
import classIc from "../media/images/antiarrhythmics/class-ic.svg?url";
import classII from "../media/images/antiarrhythmics/class-ii.png?url";
import classIII from "../media/images/antiarrhythmics/class-iii.svg?url";
import classIV from "../media/images/antiarrhythmics/class-iv.jpg?url";

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

export const ANTIARRHYTHMIC_ACTION_POTENTIAL_IMAGES: Record<
  AntiarrhythmicClass,
  string
> = {
  Ia: extensionAssetUrl(classIa),
  Ib: extensionAssetUrl(classIb),
  Ic: extensionAssetUrl(classIc),
  II: extensionAssetUrl(classII),
  III: extensionAssetUrl(classIII),
  IV: extensionAssetUrl(classIV),
};

/** See src/media/images/antiarrhythmics/SOURCES.txt */
export const ANTIARRHYTHMIC_ACTION_POTENTIAL_ATTRIBUTIONS: Record<
  AntiarrhythmicClass,
  MediaAttribution
> = {
  Ia: {
    label: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/File:Action_potential_class_Ia.svg",
  },
  Ib: {
    label: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/File:Action_potential_Class_Ib.svg",
  },
  Ic: {
    label: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/File:Action_potential_class_Ic.svg",
  },
  II: {
    label: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Effect_of_antiarrythmics_on_nodal_action_potential.png",
  },
  III: {
    label: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/File:Action_potential_Class_III.svg",
  },
  IV: {
    label: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:IV_class_action.jpg",
  },
};

export function getAntiarrhythmicClassForMedication(
  id: string,
): AntiarrhythmicClass | undefined {
  return getMedicationById(id)?.antiarrhythmicClass;
}

export function getAntiarrhythmicImageForMedication(
  id: string,
): string | undefined {
  const drugClass = getAntiarrhythmicClassForMedication(id);
  return drugClass
    ? ANTIARRHYTHMIC_ACTION_POTENTIAL_IMAGES[drugClass]
    : undefined;
}

export function getAntiarrhythmicAttributionForMedication(
  id: string,
): MediaAttribution | undefined {
  const drugClass = getAntiarrhythmicClassForMedication(id);
  return drugClass
    ? ANTIARRHYTHMIC_ACTION_POTENTIAL_ATTRIBUTIONS[drugClass]
    : undefined;
}
