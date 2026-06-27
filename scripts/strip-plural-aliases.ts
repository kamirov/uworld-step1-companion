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
  findPluralAliases,
  singularizeName,
} from "../src/content/pluralization.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "../src/data");

interface DataFileSpec {
  file: string;
  entries: readonly { id: string; name: string; aliases: string[] }[];
}

const DATA_FILES: DataFileSpec[] = [
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

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceName(content: string, oldName: string, newName: string): string {
  return content.replaceAll(`name: "${oldName}"`, `name: "${newName}"`);
}

function removeAliasFromEntryBlock(
  content: string,
  entryId: string,
  alias: string,
): string {
  const idPattern = new RegExp(
    `id:\\s*"${escapeRegex(entryId)}"[\\s\\S]*?aliases:\\s*\\[([\\s\\S]*?)\\]`,
  );
  const match = content.match(idPattern);
  if (!match) return content;

  const fullMatch = match[0]!;
  const aliasesBody = match[1]!;
  const escaped = escapeRegex(alias);
  const cleanedBody = aliasesBody
    .replace(new RegExp(`\\n[ \\t]*"${escaped}",`, "g"), "")
    .replace(new RegExp(`"${escaped}",[ \\t]*`, "g"), "")
    .replace(new RegExp(`\\n[ \\t]*'${escaped}',`, "g"), "")
    .replace(new RegExp(`'${escaped}',[ \\t]*`, "g"), "");

  if (cleanedBody === aliasesBody) return content;
  return content.replace(fullMatch, fullMatch.replace(aliasesBody, cleanedBody));
}

function stripFile(spec: DataFileSpec): {
  removedAliases: number;
  renamedNames: number;
} {
  const path = join(DATA_DIR, spec.file);
  let content = readFileSync(path, "utf8");
  let removedAliases = 0;
  let renamedNames = 0;

  for (const entry of spec.entries) {
    const pluralAliases = findPluralAliases(entry.aliases);
    for (const alias of pluralAliases) {
      const before = content;
      content = removeAliasFromEntryBlock(content, entry.id, alias);
      if (content !== before) removedAliases += 1;
    }

    const singularName = singularizeName(entry.name);
    if (singularName && singularName !== entry.name) {
      const before = content;
      content = replaceName(content, entry.name, singularName);
      if (content !== before) renamedNames += 1;
    }
  }

  writeFileSync(path, content, "utf8");
  return { removedAliases, renamedNames };
}

let totalRemoved = 0;
let totalRenamed = 0;

for (const spec of DATA_FILES) {
  const { removedAliases, renamedNames } = stripFile(spec);
  totalRemoved += removedAliases;
  totalRenamed += renamedNames;
  if (removedAliases > 0 || renamedNames > 0) {
    console.log(
      `${spec.file}: removed ${removedAliases} plural aliases, renamed ${renamedNames} names`,
    );
  }
}

console.log(
  `Done. Removed ${totalRemoved} plural aliases, renamed ${totalRenamed} display names.`,
);
