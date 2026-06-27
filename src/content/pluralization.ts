/** Strip styling/invisible chars so bold, Unicode styled, and plain text dedupe together. */
function normalizeForComparison(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u00AD\u200B-\u200D\u2060\uFEFF]/g, "")
    .replace(/[\u2212\u207B\uFE63]/g, "-")
    .replace(/\s/g, " ");
}

function normalizedWordKey(matchText: string): string {
  return normalizeForComparison(matchText).replace(/\s+/g, " ").trim();
}

/** Terms that should never receive automatic plural forms. */
export const PLURALIZATION_SKIP = new Set([
  "menses",
  "diabetes",
  "diabetes mellitus",
  "ards",
  "hiv",
  "aids",
  "ibs",
  "copd",
  "gerd",
  "pcos",
  "sle",
  "ra",
  "tb",
  "hbv",
  "hcv",
  "hbv infection",
  "hcv infection",
  "status",
  "stress",
  "gross",
  "as",
  "is",
  "us",
  "ms",
  "es",
  "os",
  "gas",
  "bus",
  "caries",
  "series",
  "species",
  "lens",
  "atlas",
  "virus",
  "campus",
]);

/** Singular alias -> irregular plural match forms (lowercase). */
export const IRREGULAR_PLURALS: Readonly<Record<string, readonly string[]>> = {
  bacterium: ["bacteria"],
  coccus: ["cocci"],
  bacillus: ["bacilli"],
  fungus: ["fungi"],
  nucleus: ["nuclei"],
  nucleolus: ["nucleoli"],
  alveolus: ["alveoli"],
  glomerulus: ["glomeruli"],
  thrombus: ["thrombi"],
  embolus: ["emboli"],
  calculus: ["calculi"],
  diverticulum: ["diverticula"],
  focus: ["foci"],
  corpus: ["corpora"],
  viscus: ["viscera"],
  meninx: ["meninges"],
  diagnosis: ["diagnoses"],
  prognosis: ["prognoses"],
  synthesis: ["syntheses"],
  thesis: ["theses"],
  crisis: ["crises"],
  metamorphosis: ["metamorphoses"],
  neurosis: ["neuroses"],
  psychosis: ["psychoses"],
  thrombosis: ["thromboses"],
  stenosis: ["stenoses"],
  sclerosis: ["scleroses"],
  necrosis: ["necroses"],
  fibrosis: ["fibroses"],
  apoptosis: ["apoptoses"],
  mitosis: ["mitoses"],
  meiosis: ["meioses"],
  phagocytosis: ["phagocytoses"],
  pinocytosis: ["pinocytoses"],
  exocytosis: ["exocytoses"],
  endocytosis: ["endocytoses"],
  osmosis: ["osmoses"],
  homeostasis: ["homeostases"],
  hemostasis: ["hemostases"],
  metastasis: ["metastases"],
  emphasis: ["emphases"],
  hypothesis: ["hypotheses"],
  synopsis: ["synopses"],
  electrolysis: ["electrolyses"],
  dialysis: ["dialyses"],
  paralysis: ["paralyses"],
  analysis: ["analyses"],
  biopsy: ["biopsies"],
  index: ["indices", "indexes"],
  appendix: ["appendices", "appendixes"],
  vertebra: ["vertebrae"],
  larva: ["larvae"],
  formula: ["formulae", "formulas"],
  ganglion: ["ganglia"],
  mitochondrion: ["mitochondria"],
  criterion: ["criteria"],
  phenomenon: ["phenomena"],
  medium: ["media"],
  child: ["children"],
  foot: ["feet"],
  tooth: ["teeth"],
  goose: ["geese"],
  mouse: ["mice"],
  louse: ["lice"],
  ovum: ["ova"],
  testis: ["testes"],
  epididymis: ["epididymides"],
  pelvis: ["pelves"],
  radius: ["radii"],
  phalanx: ["phalanges"],
  matrix: ["matrices"],
  apex: ["apices"],
  vortex: ["vortices"],
  cortex: ["cortices"],
  atrium: ["atria"],
  septum: ["septa"],
  foramen: ["foramina"],
  nevus: ["nevi"],
  colon: ["colons", "cola"],
  ovary: ["ovaries"],
  artery: ["arteries"],
  vein: ["veins"],
  capillary: ["capillaries"],
  nephron: ["nephrons"],
  villus: ["villi"],
  papilla: ["papillae"],
  ampulla: ["ampullae"],
  lacuna: ["lacunae"],
  fundus: ["fundi"],
  genus: ["genera"],
  stratum: ["strata"],
  datum: ["data"],
};

const ACRONYM_RE = /^[a-z0-9]{1,6}$/i;
const ES_SUFFIX_RE = /(?:s|ss|x|z|ch|sh)$/i;
const CONSONANT_Y_RE = /[^aeiou]y$/i;

/** Greek/Latin medical terms that are singular but end in "s". */
const LONG_SINGULAR_S_SUFFIX_RE = /(?:osis|iasis|esis|asis|ysis)$/i;

/** Short singular nouns ending in -sis (stem < 4 chars). */
const SHORT_SIS_SINGULARS = new Set([
  "sepsis",
  "crisis",
  "lysis",
  "thesis",
  "gnosis",
  "ptosis",
  "miosis",
  "stasis",
]);

/** Truncated forms produced by incorrectly stripping one "s". */
const TRUNCATED_SUFFIX_RE = /(?:si|osi|esi|asi|iasi|ysi)$/i;

/** Truncated -ies plurals where "bodies" became "bodie" instead of "body". */
const IE_TRUNCATED_SUFFIX_RE = /ie$/i;

function preserveLastWordCasing(originalLast: string, repairedLower: string): string {
  if (originalLast === originalLast.toUpperCase()) return repairedLower.toUpperCase();
  if (originalLast[0] === originalLast[0]?.toUpperCase()) {
    return repairedLower[0]!.toUpperCase() + repairedLower.slice(1);
  }
  return repairedLower;
}

function singularizeLastWord(originalLast: string, lastKey: string): string | null {
  if (!lastKey.endsWith("s") || lastKey.endsWith("ss")) return null;

  const candidates = [
    lastKey.endsWith("ies") ? `${lastKey.slice(0, -3)}y` : null,
    lastKey.endsWith("es") && !lastKey.endsWith("ies") ? lastKey.slice(0, -2) : null,
    lastKey.slice(0, -1),
  ].filter((value): value is string => Boolean(value));

  for (const candidate of candidates) {
    if (shouldSkipPluralization(candidate)) continue;
    if (isInherentlySingularEndingInS(candidate)) continue;
    const plurals = getPluralForms(candidate).map(normalizeAlias);
    if (plurals.includes(lastKey)) {
      return preserveLastWordCasing(originalLast, candidate);
    }
  }

  return null;
}

export function isInherentlySingularEndingInS(text: string): boolean {
  const key = normalizeAlias(text);
  if (!key) return false;
  if (PLURALIZATION_SKIP.has(key)) return true;

  const lastWord = key.split(" ").pop() ?? key;
  if (LONG_SINGULAR_S_SUFFIX_RE.test(lastWord)) return true;
  if (lastWord.endsWith("sis")) {
    const stem = lastWord.slice(0, -3);
    return stem.length >= 4 || SHORT_SIS_SINGULARS.has(lastWord);
  }
  return false;
}

function preserveNameCasing(original: string, repairedLower: string): string {
  const parts = original.split(/\s+/);
  const repairedParts = repairedLower.split(/\s+/);
  return parts
    .map((part, index) => {
      const repaired = repairedParts[index] ?? part;
      if (part === part.toUpperCase()) return repaired.toUpperCase();
      if (part[0] === part[0]?.toUpperCase()) {
        return repaired[0]!.toUpperCase() + repaired.slice(1);
      }
      return repaired;
    })
    .join(" ");
}

/** Undo bad singularization that stripped trailing "s" from -sis/-osis/etc. terms. */
function repairSTruncatedName(name: string): string | null {
  const key = normalizeAlias(name);
  if (!key || isInherentlySingularEndingInS(name)) return null;

  const parts = key.split(" ");
  const lastPart = parts[parts.length - 1]!;
  if (!TRUNCATED_SUFFIX_RE.test(lastPart)) return null;

  const nameParts = name.split(/\s+/);
  const last = nameParts[nameParts.length - 1]!;
  const repairedLast = `${last}s`;
  const repaired =
    nameParts.length === 1
      ? repairedLast
      : [...nameParts.slice(0, -1), repairedLast].join(" ");

  if (!isInherentlySingularEndingInS(repaired)) return null;
  return preserveNameCasing(name, repaired);
}

function repairIeTruncatedName(name: string): string | null {
  const key = normalizeAlias(name);
  if (!key || isInherentlySingularEndingInS(name)) return null;

  const keyParts = key.split(" ");
  const lastPart = keyParts[keyParts.length - 1]!;
  if (!IE_TRUNCATED_SUFFIX_RE.test(lastPart)) return null;

  const nameParts = name.split(/\s+/);
  const last = nameParts[nameParts.length - 1]!;
  const withS = `${last}s`;
  const withSKey = normalizeAlias(withS);
  if (
    PLURALIZATION_SKIP.has(withSKey) ||
    NAME_SINGULAR_EXCEPTIONS.has(withSKey) ||
    isInherentlySingularEndingInS(withS)
  ) {
    const repaired =
      nameParts.length === 1
        ? withS
        : [...nameParts.slice(0, -1), withS].join(" ");
    return preserveNameCasing(name, repaired);
  }

  const candidate = `${last.slice(0, -2)}y`;
  const impliedPlural = `${last}s`;
  if (!isGeneratedPluralOf(impliedPlural, candidate)) return null;

  const repaired =
    nameParts.length === 1
      ? candidate
      : [...nameParts.slice(0, -1), candidate].join(" ");

  return preserveNameCasing(name, repaired);
}

export function repairTruncatedSingularName(name: string): string | null {
  return repairIeTruncatedName(name) ?? repairSTruncatedName(name);
}

function normalizeAlias(alias: string): string {
  return normalizedWordKey(alias);
}

function pluralizeToken(token: string): string[] {
  const lower = token.toLowerCase();
  if (!lower) return [];

  const irregular = IRREGULAR_PLURALS[lower];
  if (irregular) return [...irregular];

  if (lower.endsWith("s")) return [];

  if (CONSONANT_Y_RE.test(lower)) {
    return [`${lower.slice(0, -1)}ies`];
  }

  if (ES_SUFFIX_RE.test(lower)) {
    return [`${lower}es`];
  }

  if (ACRONYM_RE.test(lower)) {
    return [`${lower}s`];
  }

  return [`${lower}s`];
}

function pluralizePhrase(alias: string): string[] {
  const trimmed = alias.trim();
  if (!trimmed) return [];

  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) {
    return pluralizeToken(parts[0]!);
  }

  const last = parts[parts.length - 1]!;
  const prefix = parts.slice(0, -1).join(" ");
  return pluralizeToken(last).map((pluralLast) =>
    prefix ? `${prefix} ${pluralLast}` : pluralLast,
  );
}

export function shouldSkipPluralization(alias: string): boolean {
  const key = normalizeAlias(alias);
  if (!key) return true;
  if (PLURALIZATION_SKIP.has(key)) return true;
  if (key.endsWith("s") && !IRREGULAR_PLURALS[key]) return true;
  return false;
}

export function getPluralForms(singular: string): string[] {
  if (shouldSkipPluralization(singular)) return [];
  const forms = pluralizePhrase(singular);
  const singularKey = normalizeAlias(singular);
  return forms.filter((form) => normalizeAlias(form) !== singularKey);
}

export function getAllMatchForms(singular: string): string[] {
  const singularKey = normalizeAlias(singular);
  if (!singularKey) return [];
  const plurals = getPluralForms(singular);
  const seen = new Set<string>([singularKey]);
  const result = [singular];
  for (const plural of plurals) {
    const key = normalizeAlias(plural);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(plural);
    }
  }
  return result;
}

export function canonicalAliasKey(singular: string): string {
  return normalizeAlias(singular);
}

function regularPluralForms(singular: string): string[] {
  if (shouldSkipPluralization(singular)) return [];
  return pluralizePhrase(singular).map(normalizeAlias);
}

export function isGeneratedPluralOf(plural: string, singular: string): boolean {
  const pluralKey = normalizeAlias(plural);
  const singularKey = normalizeAlias(singular);
  if (!pluralKey || !singularKey || pluralKey === singularKey) return false;

  const irregular = IRREGULAR_PLURALS[singularKey];
  if (irregular?.some((form) => normalizeAlias(form) === pluralKey)) {
    return true;
  }

  return regularPluralForms(singular).includes(pluralKey);
}

export function findPluralAliases(aliases: readonly string[]): string[] {
  const toRemove: string[] = [];

  for (let i = 0; i < aliases.length; i++) {
    const alias = aliases[i]!;
    for (let j = 0; j < aliases.length; j++) {
      if (i === j) continue;
      if (isGeneratedPluralOf(alias, aliases[j]!)) {
        toRemove.push(alias);
        break;
      }
    }
  }

  return toRemove;
}

/** Display names that should not be singularized. */
export const NAME_SINGULAR_EXCEPTIONS = new Set([
  "menses",
  "diabetes mellitus",
  "ards",
  "hiv",
  "aids",
  "copd",
  "gerd",
  "pcos",
  "ibs",
  "meninges",
  "viscera",
  "bacteria",
  "data",
  "media",
  "criteria",
  "phenomena",
  "mitochondria",
  "glomeruli",
  "alveoli",
  "intestines",
  "lungs",
  "lymph nodes",
  "peyer patches",
  "seminal vesicles",
  "seminiferous tubules",
  "emissary veins",
  "bridging veins",
  "communicating arteries",
  "common cardinal veins",
  "ductus arteriosus",
  "ductus venosus",
  "metanephros",
  "mesonephros",
  "caries",
  "facies",
]);

export function singularizeName(name: string): string | null {
  const key = normalizeAlias(name);
  if (NAME_SINGULAR_EXCEPTIONS.has(key)) return null;
  if (isInherentlySingularEndingInS(name)) return null;

  for (const [singular, plurals] of Object.entries(IRREGULAR_PLURALS)) {
    if (plurals.some((plural) => normalizeAlias(plural) === key)) {
      return titleCase(singular);
    }
  }

  const nameParts = name.split(/\s+/);
  const keyParts = key.split(" ");
  const lastKey = keyParts[keyParts.length - 1]!;
  const lastName = nameParts[nameParts.length - 1]!;

  const singularLast = singularizeLastWord(lastName, lastKey);
  if (!singularLast) return null;

  if (nameParts.length === 1) return singularLast;
  return [...nameParts.slice(0, -1), singularLast].join(" ");
}

function titleCase(text: string): string {
  return text.replace(/\b\p{L}/gu, (ch) => ch.toUpperCase());
}
