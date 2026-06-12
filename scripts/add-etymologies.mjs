#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { generateEtymology } from "./etymology-generator.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, "../src/data");

const FILES = [
  { file: "conditions.ts", array: "CONDITIONS", interface: "ConditionEntry" },
  { file: "medications.ts", array: "MEDICATIONS", interface: "MedicationEntry" },
  { file: "microbiology.ts", array: "MICROBIOLOGY", interface: "MicrobiologyEntry" },
  { file: "cells.ts", array: "CELLS", interface: "CellEntry" },
  { file: "symptoms.ts", array: "SYMPTOMS", interface: "SymptomEntry" },
  { file: "labValues.ts", array: "LAB_VALUES", interface: "LabValueEntry" },
  { file: "proteins.ts", array: "PROTEINS", interface: "ProteinEntry" },
  { file: "pathogenesis.ts", array: "PATHOGENESIS", interface: "PathogenesisEntry" },
  { file: "organs.ts", array: "ORGANS", interface: "OrganEntry" },
  { file: "signaling.ts", array: "SIGNALING_MOLECULES", interface: "SignalingEntry" },
  { file: "musculoskeletal.ts", array: "MUSCULOSKELETAL", interface: "MusculoskeletalEntry" },
  { file: "hemodynamics.ts", array: "HEMODYNAMICS", interface: "HemodynamicEntry" },
  { file: "nephron.ts", array: "NEPHRON_SEGMENTS", interface: "NephronSegmentEntry" },
  { file: "heartMurmurs.ts", array: "HEART_MURMURS", interface: "HeartMurmurEntry" },
  { file: "procedures.ts", array: "PROCEDURES", interface: "ProcedureEntry" },
  { file: "heartSounds.ts", array: "HEART_SOUNDS", interface: "HeartSoundEntry" },
  { file: "clinicalStrategies.ts", array: "CLINICAL_STRATEGIES", interface: "ClinicalStrategyEntry" },
  { file: "ecgFindings.ts", array: "ECG_FINDINGS", interface: "EcgFindingEntry" },
];

function escapeString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function addInterfaceField(content, interfaceName) {
  const pattern = new RegExp(
    `(export interface ${interfaceName} \\{[\\s\\S]*?name: string;)\\n`,
  );
  if (content.includes("etymology: string;")) return content;
  return content.replace(pattern, "$1\n  etymology: string;\n");
}

function extractEntries(content) {
  const entries = [];
  const entryRegex = /\{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*name:\s*"((?:[^"\\]|\\.)*)",/g;
  let match;
  while ((match = entryRegex.exec(content)) !== null) {
    entries.push({
      id: match[1],
      name: match[2].replace(/\\"/g, '"'),
      index: match.index,
      fullMatch: match[0],
    });
  }
  return entries;
}

function processFile({ file, interface: interfaceName }) {
  const filePath = join(dataDir, file);
  let content = readFileSync(filePath, "utf8");
  content = addInterfaceField(content, interfaceName);

  const entries = extractEntries(content);
  let added = 0;
  let skipped = 0;

  // Process in reverse to preserve indices
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i];
    const afterName = content.slice(
      entry.index,
      entry.index + entry.fullMatch.length + 80,
    );

    const hasEtymology = /name:\s*"(?:[^"\\]|\\.)*",\s*\n\s*etymology:\s*"((?:[^"\\]|\\.)*)",/.exec(
      afterName,
    );
    if (hasEtymology && process.argv.includes("--only-missing")) {
      skipped++;
      continue;
    }
    if (hasEtymology && !process.argv.includes("--force")) {
      skipped++;
      continue;
    }
    if (hasEtymology) {
      const oldBlock = hasEtymology[0];
      const etymology = generateEtymology(entry.id, entry.name);
      const escapedName = entry.name.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
      const newBlock = `name: "${escapedName}",\n    etymology: "${escapeString(etymology)}",`;
      const start = entry.index + afterName.indexOf(oldBlock);
      content =
        content.slice(0, start) + newBlock + content.slice(start + oldBlock.length);
      added++;
      continue;
    }

    const etymology = generateEtymology(entry.id, entry.name);
    const insert = `${entry.fullMatch}\n    etymology: "${escapeString(etymology)}",`;
    content =
      content.slice(0, entry.index) +
      insert +
      content.slice(entry.index + entry.fullMatch.length);
    added++;
  }

  writeFileSync(filePath, content);
  console.log(`${file}: ${added} added, ${skipped} already had etymology`);
  return { added, skipped, total: entries.length };
}

let totalAdded = 0;
let totalEntries = 0;

for (const config of FILES) {
  const result = processFile(config);
  totalAdded += result.added;
  totalEntries += result.total;
}

console.log(`\nDone: ${totalAdded} etymologies added across ${totalEntries} entries.`);
