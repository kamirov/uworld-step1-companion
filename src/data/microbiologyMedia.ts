import type { MediaAttribution } from "./media";
import type { MicrobiologyEntry } from "./microbiology";

import candidaAlbicans from "../media/images/microbiology/candida-albicans.jpg?url";
import clostridiumPerfringens from "../media/images/microbiology/clostridium-perfringens.jpg?url";
import cryptococcusNeoformans from "../media/images/microbiology/cryptococcus-neoformans.jpg?url";
import escherichiaColi from "../media/images/microbiology/escherichia-coli.jpg?url";
import giardiaLamblia from "../media/images/microbiology/giardia-lamblia.jpg?url";
import haemophilusInfluenzae from "../media/images/microbiology/haemophilus-influenzae.jpg?url";
import hiv from "../media/images/microbiology/hiv.jpg?url";
import mycobacteriumTuberculosis from "../media/images/microbiology/mycobacterium-tuberculosis.jpg?url";
import neisseriaMeningitidis from "../media/images/microbiology/neisseria-meningitidis.jpg?url";
import plasmodiumFalciparum from "../media/images/microbiology/plasmodium-falciparum.jpg?url";
import staphylococcusAureus from "../media/images/microbiology/staphylococcus-aureus.jpg?url";
import streptococcusPneumoniae from "../media/images/microbiology/streptococcus-pneumoniae.jpg?url";
import streptococcusPyogenes from "../media/images/microbiology/streptococcus-pyogenes.jpg?url";
import treponemaPallidum from "../media/images/microbiology/treponema-pallidum.jpg?url";

export type MicrobiologyImageId = MicrobiologyEntry["id"];

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/microbiology/SOURCES.txt */
export const MICROBIOLOGY_IMAGES: Partial<Record<MicrobiologyImageId, string>> =
  {
    "staphylococcus-aureus": extensionAssetUrl(staphylococcusAureus),
    "streptococcus-pyogenes": extensionAssetUrl(streptococcusPyogenes),
    "streptococcus-pneumoniae": extensionAssetUrl(streptococcusPneumoniae),
    "escherichia-coli": extensionAssetUrl(escherichiaColi),
    "haemophilus-influenzae": extensionAssetUrl(haemophilusInfluenzae),
    "neisseria-meningitidis": extensionAssetUrl(neisseriaMeningitidis),
    "clostridium-perfringens": extensionAssetUrl(clostridiumPerfringens),
    "mycobacterium-tuberculosis": extensionAssetUrl(mycobacteriumTuberculosis),
    "treponema-pallidum": extensionAssetUrl(treponemaPallidum),
    hiv: extensionAssetUrl(hiv),
    "candida-albicans": extensionAssetUrl(candidaAlbicans),
    "cryptococcus-neoformans": extensionAssetUrl(cryptococcusNeoformans),
    "plasmodium-falciparum": extensionAssetUrl(plasmodiumFalciparum),
    "giardia-lamblia": extensionAssetUrl(giardiaLamblia),
  };

export const MICROBIOLOGY_IMAGE_ATTRIBUTIONS: Partial<
  Record<MicrobiologyImageId, MediaAttribution>
> = {
  "staphylococcus-aureus": {
    label: "Wikimedia Commons (Dr Graham Beards)",
    url: "https://commons.wikimedia.org/wiki/File:Staphylococcus_aureus_Gram_stain.jpg",
  },
  "streptococcus-pyogenes": {
    label: "CDC PHIL #2110",
    url: "https://phil.cdc.gov/Details.aspx?pid=2110",
  },
  "streptococcus-pneumoniae": {
    label: "CDC PHIL #262",
    url: "https://phil.cdc.gov/Details.aspx?pid=262",
  },
  "escherichia-coli": {
    label: "Wikimedia Commons (Y tambe)",
    url: "https://commons.wikimedia.org/wiki/File:Escherichia_coli_Gram.jpg",
  },
  "haemophilus-influenzae": {
    label: "Wikimedia Commons (Stefan Walkowski, CC BY-SA 4.0)",
    url: "https://commons.wikimedia.org/wiki/File:Haemophilus_influenzae.jpg",
  },
  "neisseria-meningitidis": {
    label: "Wikimedia Commons (Microman12345)",
    url: "https://commons.wikimedia.org/wiki/File:Neisseria_meningitidis_CSF_Gram_1000.jpg",
  },
  "clostridium-perfringens": {
    label: "CDC PHIL #2995",
    url: "https://phil.cdc.gov/Details.aspx?pid=2995",
  },
  "mycobacterium-tuberculosis": {
    label: "CDC PHIL #5789",
    url: "https://phil.cdc.gov/Details.aspx?pid=5789",
  },
  "treponema-pallidum": {
    label: "CDC PHIL #1977",
    url: "https://phil.cdc.gov/Details.aspx?pid=1977",
  },
  hiv: {
    label: "CDC PHIL #10000",
    url: "https://phil.cdc.gov/Details.aspx?pid=10000",
  },
  "candida-albicans": {
    label: "Wikimedia Commons (Dr Graham Beards)",
    url: "https://commons.wikimedia.org/wiki/File:Candida_Gram_stain.jpg",
  },
  "cryptococcus-neoformans": {
    label: "Wikimedia Commons (Dr Graham Beards, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Cryptococcus_neoformans.jpg",
  },
  "plasmodium-falciparum": {
    label: "CDC PHIL #5856",
    url: "https://phil.cdc.gov/Details.aspx?pid=5856",
  },
  "giardia-lamblia": {
    label: "Wikimedia Commons (Ajay Kumar Chaurasiya)",
    url: "https://commons.wikimedia.org/wiki/File:Cysts_of_Giardia_lamblia.jpg",
  },
};

export const MICROBIOLOGY_IMAGE_CAPTIONS: Partial<
  Record<MicrobiologyImageId, string>
> = {
  "staphylococcus-aureus": "Gram stain: Gram-positive cocci in clusters",
  "streptococcus-pyogenes": "Group A Streptococcus (900× magnification)",
  "streptococcus-pneumoniae":
    "Scanning electron micrograph of lancet-shaped diplococci",
  "escherichia-coli": "Gram stain: Gram-negative bacilli",
  "haemophilus-influenzae": "Colonies on chocolate agar",
  "neisseria-meningitidis":
    "Gram stain of CSF: Gram-negative diplococci (1000×)",
  "clostridium-perfringens": "Gram stain of broth culture",
  "mycobacterium-tuberculosis":
    "Ziehl-Neelsen acid-fast stain: red bacilli (1000×)",
  "treponema-pallidum": "Electron micrograph of spirochetes on epithelium",
  hiv: "Scanning EM: HIV-1 budding from lymphocyte (colored)",
  "candida-albicans": "Gram stain: yeast and pseudohyphae",
  "cryptococcus-neoformans": "India ink stain showing capsular halo",
  "plasmodium-falciparum":
    "Giemsa thin smear: ring forms and gametocytes",
  "giardia-lamblia": "Cysts in saline wet mount (1600×)",
};

export function getMicrobiologyImageForId(
  id: string,
): string | undefined {
  return MICROBIOLOGY_IMAGES[id as MicrobiologyImageId];
}

export function getMicrobiologyImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return MICROBIOLOGY_IMAGE_ATTRIBUTIONS[id as MicrobiologyImageId];
}

export function getMicrobiologyImageCaptionForId(
  id: string,
): string | undefined {
  return MICROBIOLOGY_IMAGE_CAPTIONS[id as MicrobiologyImageId];
}
