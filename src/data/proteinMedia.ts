import type { MediaAttribution } from "./media";
import type { ProteinEntry } from "./proteins";

import adenosineDeaminase from "../media/images/proteins/adenosine-deaminase.jpg?url";
import amyloidPrecursorProtein from "../media/images/proteins/amyloid-precursor-protein.png?url";
import betaAmyloid from "../media/images/proteins/beta-amyloid.jpg?url";
import ceruloplasmin from "../media/images/proteins/ceruloplasmin.jpg?url";
import filaggrin from "../media/images/proteins/filaggrin.png?url";
import immunoglobulinHeavyChain from "../media/images/proteins/immunoglobulin-heavy-chain.svg?url";
import immunoglobulinLightChain from "../media/images/proteins/immunoglobulin-light-chain.png?url";
import intrinsicFactor from "../media/images/proteins/intrinsic-factor.png?url";
import phenylalanineHydroxylase from "../media/images/proteins/phenylalanine-hydroxylase.jpg?url";
import tyrosineHydroxylase from "../media/images/proteins/tyrosine-hydroxylase.png?url";
import fourteenThreeThreeProtein from "../media/images/proteins/14-3-3-protein.jpg?url";
import plasmin from "../media/images/proteins/plasmin.png?url";
import prionProtein from "../media/images/proteins/prion-protein.jpg?url";

export type ProteinImageId = Extract<
  ProteinEntry["id"],
  | "adenosine-deaminase"
  | "amyloid-precursor-protein"
  | "beta-amyloid"
  | "ceruloplasmin"
  | "filaggrin"
  | "immunoglobulin-heavy-chain"
  | "immunoglobulin-light-chain"
  | "intrinsic-factor"
  | "phenylalanine-hydroxylase"
  | "tyrosine-hydroxylase"
  | "14-3-3-protein"
  | "plasmin"
  | "prion-protein"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/proteins/SOURCES.txt */
export const PROTEIN_IMAGES: Partial<Record<ProteinImageId, string>> = {
  "adenosine-deaminase": extensionAssetUrl(adenosineDeaminase),
  "amyloid-precursor-protein": extensionAssetUrl(amyloidPrecursorProtein),
  "beta-amyloid": extensionAssetUrl(betaAmyloid),
  ceruloplasmin: extensionAssetUrl(ceruloplasmin),
  filaggrin: extensionAssetUrl(filaggrin),
  "immunoglobulin-heavy-chain": extensionAssetUrl(immunoglobulinHeavyChain),
  "immunoglobulin-light-chain": extensionAssetUrl(immunoglobulinLightChain),
  "intrinsic-factor": extensionAssetUrl(intrinsicFactor),
  "phenylalanine-hydroxylase": extensionAssetUrl(phenylalanineHydroxylase),
  "tyrosine-hydroxylase": extensionAssetUrl(tyrosineHydroxylase),
  "14-3-3-protein": extensionAssetUrl(fourteenThreeThreeProtein),
  plasmin: extensionAssetUrl(plasmin),
  "prion-protein": extensionAssetUrl(prionProtein),
};

export const PROTEIN_IMAGE_ATTRIBUTIONS: Partial<
  Record<ProteinImageId, MediaAttribution>
> = {
  "adenosine-deaminase": {
    label: "Wikimedia Commons (Person with Job's syndrome.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Person_with_Job%27s_syndrome.jpg",
  },
  "amyloid-precursor-protein": {
    label: "Wikimedia Commons (APP processing.png)",
    url: "https://commons.wikimedia.org/wiki/File:APP_processing.png",
  },
  "beta-amyloid": {
    label:
      "Wikimedia Commons (Cerebral amyloid angiopathy -2a- amyloid beta - high mag.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Cerebral_amyloid_angiopathy_-2a-_amyloid_beta_-_high_mag.jpg",
  },
  ceruloplasmin: {
    label: "Wikimedia Commons (Kayser-Fleischer ring.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Kayser-Fleischer_ring.jpg",
  },
  filaggrin: {
    label: "Wikimedia Commons (502 Layers of epidermis (no labels).png)",
    url: "https://commons.wikimedia.org/wiki/File:502_Layers_of_epidermis_(no_labels).png",
  },
  "immunoglobulin-heavy-chain": {
    label: "Wikimedia Commons (AntibodyChains.svg)",
    url: "https://commons.wikimedia.org/wiki/File:AntibodyChains.svg",
  },
  "immunoglobulin-light-chain": {
    label: "Wikimedia Commons (Antibody IgG1 structure.png, CC BY-SA 4.0)",
    url: "https://commons.wikimedia.org/wiki/File:Antibody_IgG1_structure.png",
  },
  "intrinsic-factor": {
    label: "Wikimedia Commons (Histology of gastric chief cell.png)",
    url: "https://commons.wikimedia.org/wiki/File:Histology_of_gastric_chief_cell.png",
  },
  "phenylalanine-hydroxylase": {
    label: "Wikimedia Commons (Phenylalanine hydroxylase.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Phenylalanine_hydroxylase.jpg",
  },
  "tyrosine-hydroxylase": {
    label: "Wikimedia Commons (Tyrosine hydroxylase showing all four subunits.png)",
    url: "https://commons.wikimedia.org/wiki/File:Tyrosine_hydroxylase_showing_all_four_subunits.png",
  },
  "14-3-3-protein": {
    label: "Wikimedia Commons (Mechanisms of amyloid fibril formation.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Mechanisms_of_amyloid_fibril_formation.jpg",
  },
  plasmin: {
    label: "Wikimedia Commons (Coagulation cascade.png)",
    url: "https://commons.wikimedia.org/wiki/File:Coagulation_cascade.png",
  },
  "prion-protein": {
    label: "Wikimedia Commons (Mechanisms of amyloid fibril formation.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Mechanisms_of_amyloid_fibril_formation.jpg",
  },
};

export const PROTEIN_IMAGE_CAPTIONS: Partial<Record<ProteinImageId, string>> = {
  "adenosine-deaminase":
    "ADA deficiency causes toxic dATP accumulation, impaired DNA synthesis, and SCID with T, B, and NK-cell failure",
  "amyloid-precursor-protein":
    "APP amyloidogenic processing — beta-secretase and gamma-secretase cleavage releases beta-amyloid peptide",
  "beta-amyloid":
    "Beta-amyloid immunostaining — extracellular Aβ deposits form neuritic plaques and cerebral amyloid angiopathy",
  ceruloplasmin:
    "Hepatic ferroxidase and copper carrier — low in Wilson disease, Menkes disease, and copper deficiency",
  filaggrin:
    "Filaggrin aggregates keratin filaments in the stratum corneum — FLG loss-of-function increases atopic dermatitis and ichthyosis vulgaris risk",
  "immunoglobulin-heavy-chain":
    "Schematic antibody cartoon labeling heavy chains, light chains, Fab antigen-binding arms, and Fc effector stem",
  "immunoglobulin-light-chain":
    "IgG1 crystal structure showing paired κ and λ light chains with heavy chains in the Fab and Fc regions",
  "intrinsic-factor":
    "Gastric parietal cell glycoprotein that binds B12 for ileal absorption — autoantibodies cause pernicious anemia",
  "phenylalanine-hydroxylase":
    "Phenylalanine hydroxylase — converts phenylalanine to tyrosine using BH₄; PAH deficiency causes PKU",
  "tyrosine-hydroxylase":
    "Tyrosine hydroxylase tetramer — rate-limiting enzyme converting tyrosine to L-DOPA in catecholamine synthesis",
  "14-3-3-protein":
    "CSF 14-3-3 protein — supportive marker of neuronal injury in Creutzfeldt-Jakob disease",
  plasmin:
    "Plasmin — serine protease effector of fibrinolysis that degrades fibrin within the coagulation-fibrinolysis balance",
  "prion-protein":
    "Misfolded PrP^Sc propagates spongiform encephalopathy — rapidly progressive dementia and myoclonus in CJD",
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
