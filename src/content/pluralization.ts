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

function normalizeAlias(alias: string): string {
  return normalizedWordKey(alias);
}

function pluralizeToken(token: string): string[] {
  const lower = token.toLowerCase();
  if (!lower) return [];

  const irregular = IRREGULAR_PLURALS[lower];
  if (irregular) return [...irregular];

  if (lower.endsWith("s")) return [];

  if (ACRONYM_RE.test(lower)) {
    return [`${lower}s`];
  }

  if (ES_SUFFIX_RE.test(lower)) {
    return [`${lower}es`];
  }

  if (CONSONANT_Y_RE.test(lower)) {
    return [`${lower.slice(0, -1)}ies`];
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
]);

export function singularizeName(name: string): string | null {
  const key = normalizeAlias(name);
  if (NAME_SINGULAR_EXCEPTIONS.has(key)) return null;

  for (const [singular, plurals] of Object.entries(IRREGULAR_PLURALS)) {
    if (plurals.some((plural) => normalizeAlias(plural) === key)) {
      return titleCase(singular);
    }
  }

  if (!key.endsWith("s") || key.endsWith("ss")) return null;

  const candidates = [
    key.slice(0, -1),
    key.endsWith("ies") ? `${key.slice(0, -3)}y` : null,
    key.endsWith("es") ? key.slice(0, -2) : null,
  ].filter((value): value is string => Boolean(value));

  for (const candidate of candidates) {
    if (shouldSkipPluralization(candidate)) continue;
    const plurals = getPluralForms(candidate).map(normalizeAlias);
    if (plurals.includes(key)) {
      return titleCase(candidate);
    }
  }

  return null;
}

function titleCase(text: string): string {
  return text.replace(/\b\p{L}/gu, (ch) => ch.toUpperCase());
}
