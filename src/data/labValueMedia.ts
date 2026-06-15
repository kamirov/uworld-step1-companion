import type { LabValueEntry } from "./labValues";
import type { MediaAttribution } from "./media";

import dhrFlow from "../media/images/lab-values/dihydrorhodamine-flow-cytometry.svg?url";
import oligoclonalBands from "../media/images/lab-values/oligoclonal-bands.svg?url";
import methylmalonicAcid from "../media/images/lab-values/methylmalonic-acid.png?url";
import erythrocyteTransketolase from "../media/images/lab-values/erythrocyte-transketolase.png?url";
import erythrocyteG6pd from "../media/images/lab-values/erythrocyte-glucose-6-phosphate-dehydrogenase.jpg?url";
import fiveHiaa from "../media/images/lab-values/5-hydroxyindoleacetic-acid.svg?url";
import homovanillicAcid from "../media/images/lab-values/homovanillic-acid.png?url";

export type LabValueImageId = Extract<
  LabValueEntry["id"],
  | "dihydrorhodamine-flow-cytometry"
  | "oligoclonal-bands"
  | "methylmalonic-acid"
  | "erythrocyte-transketolase"
  | "erythrocyte-glucose-6-phosphate-dehydrogenase"
  | "5-hydroxyindoleacetic-acid"
  | "homovanillic-acid"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/lab-values/SOURCES.txt */
export const LAB_VALUE_IMAGES: Partial<Record<LabValueImageId, string>> = {
  "dihydrorhodamine-flow-cytometry": extensionAssetUrl(dhrFlow),
  "oligoclonal-bands": extensionAssetUrl(oligoclonalBands),
  "methylmalonic-acid": extensionAssetUrl(methylmalonicAcid),
  "erythrocyte-transketolase": extensionAssetUrl(erythrocyteTransketolase),
  "erythrocyte-glucose-6-phosphate-dehydrogenase":
    extensionAssetUrl(erythrocyteG6pd),
  "5-hydroxyindoleacetic-acid": extensionAssetUrl(fiveHiaa),
  "homovanillic-acid": extensionAssetUrl(homovanillicAcid),
};

export const LAB_VALUE_IMAGE_ATTRIBUTIONS: Partial<
  Record<LabValueImageId, MediaAttribution>
> = {
  "dihydrorhodamine-flow-cytometry": {
    label: "Created locally; reference: Flow cytometry",
    url: "https://en.wikipedia.org/wiki/Flow_cytometry",
  },
  "oligoclonal-bands": {
    label: "Created locally; reference: Oligoclonal band",
    url: "https://en.wikipedia.org/wiki/Oligoclonal_band",
  },
  "methylmalonic-acid": {
    label: "Wikimedia Commons (Hypersegmented neutrophil.png)",
    url: "https://commons.wikimedia.org/wiki/File:Hypersegmented_neutrophil.png",
  },
  "erythrocyte-transketolase": {
    label: "Local reference; thiamine cofactor diagram",
    url: "https://en.wikipedia.org/wiki/Transketolase",
  },
  "erythrocyte-glucose-6-phosphate-dehydrogenase": {
    label:
      "Wikimedia Commons (Some erythrocytic morphologies and intraerythrocytic inclusions...)",
    url: "https://commons.wikimedia.org/wiki/File:Some_erythrocytic_morphologies_and_intraerythrocytic_inclusions_found_in_peripheral_blood_smears_of_quokkas_on_Rottnest_Island_(also_found_in_quokkas_on_mainland_Western_Australia).png",
  },
  "5-hydroxyindoleacetic-acid": {
    label: "Local reference; oligoclonal band diagram",
    url: "https://en.wikipedia.org/wiki/5-Hydroxyindoleacetic_acid",
  },
  "homovanillic-acid": {
    label: "Wikimedia Commons (Tyrosine hydroxylase showing all four subunits.png)",
    url: "https://commons.wikimedia.org/wiki/File:Tyrosine_hydroxylase_showing_all_four_subunits.png",
  },
};

export const LAB_VALUE_IMAGE_CAPTIONS: Partial<
  Record<LabValueImageId, string>
> = {
  "dihydrorhodamine-flow-cytometry":
    "DHR test: normal neutrophils convert DHR to fluorescent rhodamine; CGD shows low/absent fluorescence",
  "oligoclonal-bands":
    "CSF-specific IgG bands not present in serum — intrathecal synthesis in MS",
  "methylmalonic-acid":
    "Hypersegmented neutrophil in megaloblastic anemia — ↑ methylmalonic acid supports B12 deficiency workup",
  "erythrocyte-transketolase":
    "Thiamine-dependent transketolase in the erythrocyte pentose phosphate pathway — functional B1 status assay",
  "erythrocyte-glucose-6-phosphate-dehydrogenase":
    "Heinz bodies in G6PD deficiency — oxidant hemolysis with impaired NADPH/glutathione protection",
  "5-hydroxyindoleacetic-acid":
    "Urinary 5-HIAA — serotonin metabolite elevated in carcinoid syndrome",
  "homovanillic-acid":
    "HVA — dopamine metabolite; ↑ in neuroblastoma with VMA",
};

export function getLabValueImageForId(id: string): string | undefined {
  return LAB_VALUE_IMAGES[id as LabValueImageId];
}

export function getLabValueImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return LAB_VALUE_IMAGE_ATTRIBUTIONS[id as LabValueImageId];
}

export function getLabValueImageCaptionForId(id: string): string | undefined {
  return LAB_VALUE_IMAGE_CAPTIONS[id as LabValueImageId];
}
