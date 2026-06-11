export interface HemodynamicEntry {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  factors: string[];
}

export const HEMODYNAMICS: HemodynamicEntry[] = [
  {
    id: "preload",
    name: "Preload",
    aliases: ["preload"],
    definition:
      "End-diastolic ventricular volume (EDV) and the stretch on the ventricular wall before contraction. Greater preload increases sarcomere stretch and stroke volume via the Frank-Starling mechanism.",
    factors: [
      "↑ Preload: increased venous return (blood transfusion, fluid loading), sympathetic tone, supine position, muscle pump during exercise, mitral regurgitation",
      "↓ Preload: decreased venous return (hemorrhage, dehydration, diuretics, venodilators), standing, tamponade, pulmonary embolism, mitral stenosis",
    ],
  },
  {
    id: "afterload",
    name: "Afterload",
    aliases: ["afterload"],
    definition:
      "The resistance or pressure the ventricle must overcome to eject blood. For the left ventricle, afterload is primarily determined by systemic vascular resistance and aortic pressure.",
    factors: [
      "↑ Afterload: hypertension, increased SVR (vasoconstriction), aortic stenosis, coarctation of the aorta",
      "↓ Afterload: vasodilators, decreased SVR (sepsis, anaphylaxis), aortic regurgitation (lower diastolic pressure)",
    ],
  },
  {
    id: "ejection-fraction",
    name: "Ejection Fraction",
    aliases: ["ejection fraction"],
    definition:
      "The percentage of end-diastolic volume ejected per beat: EF = (stroke volume / EDV) × 100%. Normal LVEF is roughly 55–70%.",
    factors: [
      "↓ EF: systolic heart failure, myocardial infarction, cardiomyopathy, increased afterload, severe mitral regurgitation",
      "↑ EF: positive inotropes (dobutamine, digoxin), decreased afterload, hyperdynamic states (anemia, hyperthyroidism)",
    ],
  },
  {
    id: "hypovolemia",
    name: "Hypovolemia",
    aliases: ["hypovolemia", "hypovolaemia"],
    definition:
      "Decreased effective circulating intravascular volume, leading to reduced preload, tissue hypoperfusion, and compensatory sympathetic activation.",
    factors: [
      "Causes: hemorrhage, vomiting/diarrhea, burns, diuretics, third-spacing (pancreatitis, sepsis), inadequate intake",
      "Signs: tachycardia, hypotension, dry mucous membranes, decreased skin turgor, ↓ urine output",
      "Labs: ↑ BUN:Cr (prerenal), hemoconcentration (↑ Hct/Hgb), metabolic acidosis with poor perfusion",
      "Compensatory response: ↑ sympathetic tone, ↑ RAAS, ↑ ADH → tachycardia, vasoconstriction, oliguria",
      "Peds: infants decompensate quickly — tachycardia and lethargy may precede hypotension",
    ],
  },
  {
    id: "pcwp",
    name: "Pulmonary Capillary Wedge Pressure",
    aliases: [
      "pulmonary capillary wedge pressure",
      "pulmonary capillary wedge",
      "pulmonary wedge pressure",
      "pcwp",
      "pawp",
    ],
    definition:
      "Indirect estimate of left atrial pressure obtained by inflating a balloon at the tip of a Swan-Ganz catheter to occlude a pulmonary artery branch; the distal pressure reflects retrograde transmission from the left atrium.",
    factors: [
      "Normal PCWP ~6–12 mmHg",
      "↑ PCWP: left-sided heart failure, mitral stenosis/regurgitation, volume overload",
      "↓ PCWP: hypovolemia, hemorrhage",
      "Measured during right heart catheterization",
      "PCWP ≈ LAP (except mitral stenosis — gradient between wedge and LV)",
    ],
  },
];

const hemodynamicById = new Map(HEMODYNAMICS.map((h) => [h.id, h]));

export function getHemodynamicById(id: string): HemodynamicEntry | undefined {
  return hemodynamicById.get(id);
}

export interface HemodynamicAliasMatch {
  alias: string;
  hemodynamicId: string;
}

export function buildHemodynamicAliasIndex(): HemodynamicAliasMatch[] {
  const matches: HemodynamicAliasMatch[] = [];
  for (const term of HEMODYNAMICS) {
    for (const alias of term.aliases) {
      matches.push({ alias: alias.toLowerCase(), hemodynamicId: term.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
