export interface ProcedureEntry {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  indications: string[];
  keyMeasurements?: string[];
  complications: string[];
  boardsPearls: string[];
  pediatrics?: string;
}

export const PROCEDURES: ProcedureEntry[] = [
  {
    id: "cardiac-catheterization",
    name: "Cardiac Catheterization",
    aliases: [
      "cardiac catheterization",
      "cardiac cath",
      "left heart catheterization",
      "right heart catheterization",
      "coronary angiography",
    ],
    definition:
      "Invasive procedure inserting catheters into cardiac chambers and/or coronary arteries to measure hemodynamics, obtain angiographic images, and perform interventions (PCI, valvuloplasty).",
    indications: [
      "STEMI/NSTEMI — diagnostic angiography and PCI",
      "Unstable angina refractory to medical therapy",
      "Heart failure workup — hemodynamics, endomyocardial biopsy",
      "Pulmonary hypertension — right heart cath for diagnosis/monitoring",
      "Congenital heart disease evaluation",
    ],
    keyMeasurements: [
      "Right heart cath: RA, RV, PA pressures; PCWP (via balloon wedge)",
      "Left heart cath: LV/LA pressures, aortic pressure",
      "Cardiac output, SVR, PVR calculations",
      "Coronary angiography — stenosis severity, culprit lesion",
    ],
    complications: [
      "Bleeding/hematoma at access site (femoral/radial)",
      "Arrhythmias, coronary dissection, stroke",
      "Contrast nephropathy, allergic reaction",
      "Tamponade (rare, from perforation)",
    ],
    boardsPearls: [
      "Gold standard for coronary anatomy; PCI is definitive reperfusion for STEMI",
      "Right heart cath + Swan-Ganz → PCWP reflects left atrial pressure",
      "Radial access preferred over femoral (↓ bleeding risk)",
    ],
    pediatrics:
      "Same principles; catheter sizes and contrast volumes adjusted for weight. Kawasaki with coronary aneurysms may need cath for stenosis assessment.",
  },
];

const procedureById = new Map(PROCEDURES.map((entry) => [entry.id, entry]));

export function getProcedureById(id: string): ProcedureEntry | undefined {
  return procedureById.get(id);
}

export interface ProcedureAliasMatch {
  alias: string;
  procedureId: string;
}

export function buildProcedureAliasIndex(): ProcedureAliasMatch[] {
  const matches: ProcedureAliasMatch[] = [];
  for (const entry of PROCEDURES) {
    for (const alias of entry.aliases) {
      matches.push({ alias: alias.toLowerCase(), procedureId: entry.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
