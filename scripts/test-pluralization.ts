import {
  canonicalAliasKey,
  getAllMatchForms,
  getPluralForms,
  isGeneratedPluralOf,
  isInherentlySingularEndingInS,
  repairTruncatedSingularName,
  shouldSkipPluralization,
  singularizeName,
} from "../src/content/pluralization.ts";

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

assert(
  getPluralForms("neutrophil").includes("neutrophils"),
  "neutrophil -> neutrophils",
);
assert(
  getPluralForms("red blood cell").includes("red blood cells"),
  "phrase pluralization",
);
assert(getPluralForms("wbc").includes("wbcs"), "acronym pluralization");
assert(getPluralForms("menses").length === 0, "menses skipped");
assert(
  getPluralForms("bacterium").includes("bacteria"),
  "irregular bacterium -> bacteria",
);
assert(
  isGeneratedPluralOf("neutrophils", "neutrophil"),
  "detect generated plural",
);
assert(
  isGeneratedPluralOf("bacteria", "bacterium"),
  "detect irregular plural",
);
assert(shouldSkipPluralization("diabetes"), "diabetes skipped");
assert(
  canonicalAliasKey("Neutrophil") === canonicalAliasKey("neutrophil"),
  "canonical key normalization",
);
assert(
  getAllMatchForms("neutrophil").length >= 2,
  "all match forms include singular and plural",
);
assert(singularizeName("Hydrolysis") === null, "do not singularize hydrolysis");
assert(
  isInherentlySingularEndingInS("Hydrolysis"),
  "hydrolysis is inherently singular",
);
assert(
  repairTruncatedSingularName("Hydrolysi") === "Hydrolysis",
  "repair truncated hydrolysi",
);
assert(
  repairTruncatedSingularName("Latissimus Dorsi") === null,
  "do not repair latissimus dorsi",
);
assert(
  repairTruncatedSingularName("Heinz Bodie") === "Heinz Body",
  "repair heinz bodie -> heinz body",
);
assert(
  singularizeName("Heinz Bodies") === "Heinz Body",
  "singularize heinz bodies -> heinz body",
);

console.log("Pluralization tests OK");
