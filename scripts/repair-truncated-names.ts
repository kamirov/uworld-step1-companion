import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { CELLS } from "../src/data/cells.ts";
import { CLINICAL_STRATEGIES } from "../src/data/clinicalStrategies.ts";
import { CONDITIONS } from "../src/data/conditions.ts";
import { ECG_FINDINGS } from "../src/data/ecgFindings.ts";
import { HEART_MURMURS } from "../src/data/heartMurmurs.ts";
import { HEART_SOUNDS } from "../src/data/heartSounds.ts";
import { HEMODYNAMICS } from "../src/data/hemodynamics.ts";
import { LAB_VALUES } from "../src/data/labValues.ts";
import { MEDICATIONS } from "../src/data/medications.ts";
import { METABOLISM } from "../src/data/metabolism.ts";
import { MICROBIOLOGY } from "../src/data/microbiology.ts";
import { MUSCULOSKELETAL } from "../src/data/musculoskeletal.ts";
import { NEPHRON_SEGMENTS } from "../src/data/nephron.ts";
import { ORGANS } from "../src/data/organs.ts";
import { PATHOGENESIS } from "../src/data/pathogenesis.ts";
import { PROCEDURES } from "../src/data/procedures.ts";
import { PROTEINS } from "../src/data/proteins.ts";
import { SIGNALING_MOLECULES } from "../src/data/signaling.ts";
import { SYMPTOMS } from "../src/data/symptoms.ts";
import {
  isInherentlySingularEndingInS,
  repairTruncatedSingularName,
} from "../src/content/pluralization.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "../src/data");

const DATA_FILES: { file: string; entries: readonly { name: string }[] }[] = [
  { file: "cells.ts", entries: CELLS },
  { file: "clinicalStrategies.ts", entries: CLINICAL_STRATEGIES },
  { file: "conditions.ts", entries: CONDITIONS },
  { file: "ecgFindings.ts", entries: ECG_FINDINGS },
  { file: "heartMurmurs.ts", entries: HEART_MURMURS },
  { file: "heartSounds.ts", entries: HEART_SOUNDS },
  { file: "hemodynamics.ts", entries: HEMODYNAMICS },
  { file: "labValues.ts", entries: LAB_VALUES },
  { file: "medications.ts", entries: MEDICATIONS },
  { file: "metabolism.ts", entries: METABOLISM },
  { file: "microbiology.ts", entries: MICROBIOLOGY },
  { file: "musculoskeletal.ts", entries: MUSCULOSKELETAL },
  { file: "nephron.ts", entries: NEPHRON_SEGMENTS },
  { file: "organs.ts", entries: ORGANS },
  { file: "pathogenesis.ts", entries: PATHOGENESIS },
  { file: "procedures.ts", entries: PROCEDURES },
  { file: "proteins.ts", entries: PROTEINS },
  { file: "signaling.ts", entries: SIGNALING_MOLECULES },
  { file: "symptoms.ts", entries: SYMPTOMS },
];

function replaceName(content: string, oldName: string, newName: string): string {
  return content.replaceAll(`name: "${oldName}"`, `name: "${newName}"`);
}

let totalRepaired = 0;

for (const { file, entries } of DATA_FILES) {
  const path = join(DATA_DIR, file);
  let content = readFileSync(path, "utf8");
  let fileRepairs = 0;

  for (const entry of entries) {
    if (isInherentlySingularEndingInS(entry.name)) continue;
    const repaired = repairTruncatedSingularName(entry.name);
    if (!repaired || repaired === entry.name) continue;

    const before = content;
    content = replaceName(content, entry.name, repaired);
    if (content !== before) {
      console.log(`  ${entry.name} -> ${repaired}`);
      fileRepairs += 1;
      totalRepaired += 1;
    }
  }

  if (fileRepairs > 0) {
    writeFileSync(path, content, "utf8");
    console.log(`${file}: repaired ${fileRepairs} names`);
  }
}

console.log(`Done. Repaired ${totalRepaired} truncated names.`);
