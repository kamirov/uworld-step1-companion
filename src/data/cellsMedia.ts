import type { MediaAttribution } from "./media";
import type { CellEntry } from "./cells";

import bLymphocyteBlausen from "../media/images/cells/b-lymphocyte-blausen.png?url";
import gapJunction from "../media/images/cells/gap-junction.svg?url";
import immunologicalMemory from "../media/images/cells/immunological-memory.png?url";
import langhansGiantCell from "../media/images/cells/langhans-giant-cell.jpg?url";
import mastCell from "../media/images/cells/mast-cell.jpg?url";
import melanocyte from "../media/images/cells/melanocyte.jpg?url";
import mitochondrialRespiratoryChain from "../media/images/cells/mitochondrial-respiratory-chain.svg?url";

export type CELLImageId = Extract<
  CellEntry["id"],
  | "naive-b-lymphocyte"
  | "gap-junction"
  | "memory-t-lymphocyte"
  | "langhans-giant-cell"
  | "mast-cell"
  | "melanocyte"
  | "oxidative-phosphorylation"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/cells/SOURCES.txt */
export const CELL_IMAGES: Partial<Record<CELLImageId, string>> = {
  "naive-b-lymphocyte": extensionAssetUrl(bLymphocyteBlausen),
  "gap-junction": extensionAssetUrl(gapJunction),
  "memory-t-lymphocyte": extensionAssetUrl(immunologicalMemory),
  "langhans-giant-cell": extensionAssetUrl(langhansGiantCell),
  "mast-cell": extensionAssetUrl(mastCell),
  "melanocyte": extensionAssetUrl(melanocyte),
  "oxidative-phosphorylation": extensionAssetUrl(mitochondrialRespiratoryChain),
};

export const CELL_IMAGE_ATTRIBUTIONS: Partial<
  Record<CELLImageId, MediaAttribution>
> = {
  "naive-b-lymphocyte": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:b-lymphocyte-blausen.png" },
  "gap-junction": { label: "Wikimedia Commons (Gap cell junction-uk.svg)", url: "https://commons.wikimedia.org/wiki/File:Gap_cell_junction-uk.svg" },
  "memory-t-lymphocyte": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:immunological-memory.png" },
  "langhans-giant-cell": { label: "Wikimedia Commons (Langhans Giant Cell (10189844503).jpg)", url: "https://commons.wikimedia.org/wiki/File:Langhans_Giant_Cell_(10189844503).jpg" },
  "mast-cell": { label: "Wikimedia Commons (Mast cell.jpg)", url: "https://commons.wikimedia.org/wiki/File:Mast_cell.jpg" },
  "melanocyte": { label: "Wikimedia Commons (Melanin Development in Melanocytes.svg)", url: "https://commons.wikimedia.org/wiki/File:Melanin_Development_in_Melanocytes.svg" },
  "oxidative-phosphorylation": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:mitochondrial-respiratory-chain.svg" },
};

export const CELL_IMAGE_CAPTIONS: Partial<Record<CELLImageId, string>> = {
  "naive-b-lymphocyte": "B lymphocyte with surface immunoglobulin (BCR) — naïve B cells express IgM and IgD awaiting first antigen encounter",
  "gap-junction": "Gap junction (connexon) channels connecting adjacent cells for direct cytoplasmic communication",
  "memory-t-lymphocyte": "Immunological memory: long-lived memory B and T lymphocytes enable rapid secondary responses on re-exposure",
  "langhans-giant-cell": "Langhans giant cell with horseshoe-arranged nuclei at the periphery — seen in granulomatous inflammation",
  "mast-cell": "Mast cell with granules containing histamine and heparin — key effector in type I hypersensitivity",
  "melanocyte": "Melanocyte dendritic processes transferring melanin to surrounding keratinocytes",
  "oxidative-phosphorylation": "Inner mitochondrial membrane respiratory chain: complexes I–IV pass electrons to O₂; proton pumping drives ATP synthase (Complex V)",
};

export function getCellImageForId(id: string): string | undefined {
  return CELL_IMAGES[id as CELLImageId];
}

export function getCellImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return CELL_IMAGE_ATTRIBUTIONS[id as CELLImageId];
}

export function getCellImageCaptionForId(id: string): string | undefined {
  return CELL_IMAGE_CAPTIONS[id as CELLImageId];
}
