export type SignalingType =
  | "Peptide hormone"
  | "Cytokine"
  | "Growth factor"
  | "Neurotransmitter"
  | "Hormone";

export interface SignalingEntry {
  id: string;
  name: string;
  aliases: string[];
  type: SignalingType;
  source?: string;
  receptor?: string;
  function: string;
  clinicalRelevance: string[];
  boardsPearls: string[];
  distinguishFrom?: string[];
  pediatrics?: string;
}

export const SIGNALING_MOLECULES: SignalingEntry[] = [
  {
    id: "bnp",
    name: "Brain natriuretic peptide (BNP)",
    aliases: [
      "brain natriuretic peptide",
      "b-type natriuretic peptide",
      "b type natriuretic peptide",
      "bnp",
      "nt-probnp",
      "nt probnp",
    ],
    type: "Peptide hormone",
    source: "Ventricular cardiomyocytes (released with myocardial stretch)",
    receptor: "Natriuretic peptide receptors (guanylyl cyclase–linked)",
    function:
      "Counter-regulatory hormone to RAAS: promotes natriuresis, diuresis, and vasodilation; reduces preload and afterload.",
    clinicalRelevance: [
      "↑ in heart failure (ventricular volume/pressure overload)",
      "Used to distinguish cardiac vs pulmonary dyspnea",
      "Guanylyl cyclase activation → ↑ cGMP",
    ],
    boardsPearls: [
      "Stretched ventricle releases BNP — not synthesized in the brain despite the name",
      "HF vignette: dyspnea + ↑ BNP/NT-proBNP + pulmonary edema",
      "ANP (atria) vs BNP (ventricles) — both natriuretic peptides",
    ],
    distinguishFrom: [
      "ANP — atrial stretch, not ventricular",
      "Aldosterone — retains Na⁺/water; BNP promotes natriuresis",
      "ADH — water retention; opposite effect on volume",
    ],
    pediatrics:
      "Congenital heart disease with volume overload can elevate BNP; interpret against age-specific norms when available.",
  },
  {
    id: "active-vitamin-d",
    name: "1,25-Dihydroxycholecalciferol (calcitriol)",
    aliases: [
      "1,25-dihydroxycholecalciferol",
      "1,25-dihydroxyvitamin d",
      "1,25 dihydroxycholecalciferol",
      "1,25 dihydroxyvitamin d",
      "calcitriol",
      "active vitamin d",
    ],
    type: "Hormone",
    source: "Renal proximal tubule (1α-hydroxylation of 25-OH vitamin D)",
    receptor: "Intracellular vitamin D receptor (VDR) → nuclear transcription",
    function:
      "↑ intestinal Ca²⁺ and phosphate absorption; with PTH, mobilizes bone mineral; feedback inhibits PTH secretion.",
    clinicalRelevance: [
      "Chronic kidney disease → ↓ 1α-hydroxylase → secondary hyperparathyroidism",
      "Vitamin D deficiency → rickets/osteomalacia",
      "Hypercalcemia with granulomatous disease (macrophage 1α-hydroxylase)",
    ],
    boardsPearls: [
      "PTH ↑ → renal 1α-hydroxylase → ↑ calcitriol (unless CKD)",
      "25-OH vitamin D = storage form; 1,25-(OH)₂D = active hormone",
      "Sarcoidosis/histoplasmosis: extrarenal 1α-hydroxylase → hypercalcemia",
    ],
    distinguishFrom: [
      "25-hydroxyvitamin D — storage/measurement form, not active hormone",
      "PTH — raises serum Ca²⁺; calcitriol is downstream effector",
    ],
    pediatrics:
      "Rickets from vitamin D deficiency or CKD — leg bowing, widened growth plates; calcitriol replacement in renal osteodystrophy.",
  },
  {
    id: "gaba",
    name: "Gamma-aminobutyric acid (GABA)",
    aliases: [
      "gamma-aminobutyric acid",
      "gamma aminobutyric acid",
      "gaba",
    ],
    type: "Neurotransmitter",
    source: "GABAergic interneurons (synthesized from glutamate via GAD)",
    receptor: "GABA-A (Cl⁻ channel) and GABA-B (Gi-coupled)",
    function:
      "Primary inhibitory neurotransmitter in the CNS; hyperpolarizes postsynaptic neurons via Cl⁻ influx (GABA-A).",
    clinicalRelevance: [
      "Benzodiazepines and barbiturates potentiate GABA-A",
      "↓ GABAergic tone in anxiety and epilepsy",
      "GABA cannot cross BBB — peripheral GABA supplements ineffective for CNS",
    ],
    boardsPearls: [
      "Benzo + barbiturate MOA: enhance GABA-A → ↑ Cl⁻ conductance",
      "Alcohol withdrawal: ↓ GABA / ↑ glutamate → seizures, DTs",
      "Vigabatrin inhibits GABA breakdown; tiagabine blocks GABA reuptake",
    ],
    distinguishFrom: [
      "Glutamate — primary excitatory neurotransmitter",
      "Glycine — inhibitory, especially in spinal cord",
    ],
    pediatrics:
      "Neonatal seizures may involve GABAergic immaturity; phenobarbital enhances GABA-A in neonatal epilepsy.",
  },
  {
    id: "il-2",
    name: "Interleukin-2 (IL-2)",
    aliases: [
      "interleukin-2",
      "interleukin 2",
      "il-2",
      "il 2",
    ],
    type: "Cytokine",
    source: "Activated CD4⁺ T helper cells",
    receptor: "IL-2 receptor (high-affinity on activated T cells)",
    function:
      "T-cell growth factor: drives clonal expansion and survival of antigen-activated T cells; supports regulatory and effector T-cell populations.",
    clinicalRelevance: [
      "Aldesleukin (recombinant IL-2) for metastatic melanoma and renal cell carcinoma",
      "IL-2 signaling blockade (basiliximab) prevents transplant rejection",
      "Capillary leak syndrome with high-dose IL-2 therapy",
    ],
    boardsPearls: [
      "IL-2 = T-cell proliferation signal after antigen activation",
      "Basiliximab: anti-CD25 (IL-2 receptor α chain) for transplant induction",
      "High-dose IL-2 toxicity: capillary leak, hypotension, pulmonary edema",
    ],
    distinguishFrom: [
      "IL-1 — fever, acute inflammation; not primary T-cell growth factor",
      "IL-6 — acute-phase response, B-cell stimulation",
      "Interferon-γ — macrophage activation, TH1 response",
    ],
    pediatrics:
      "SCID from IL-2 receptor γ-chain defects (X-linked SCID); basiliximab used cautiously in pediatric transplant.",
  },
  {
    id: "pdgf",
    name: "Platelet-derived growth factor (PDGF)",
    aliases: [
      "platelet-derived growth factor",
      "platelet derived growth factor",
      "pdgf",
    ],
    type: "Growth factor",
    source: "Platelets, macrophages, endothelial cells, smooth muscle cells",
    receptor: "Receptor tyrosine kinase (PDGFR-α/β)",
    function:
      "Chemotactic and mitogenic for fibroblasts and smooth muscle cells; key mediator of wound healing and vascular remodeling.",
    clinicalRelevance: [
      "Atherosclerosis: PDGF drives smooth muscle migration and intimal proliferation",
      "Glioblastoma can overexpress PDGF/PDGFR",
      "Imatinib inhibits PDGFR among other tyrosine kinases",
    ],
    boardsPearls: [
      "PDGF released at injury → SMC proliferation in vessel wall",
      "Atherosclerotic plaque: macrophages and SMCs secrete PDGF",
      "Imatinib: BCR-ABL, c-KIT, and PDGFR tyrosine kinase inhibitor",
    ],
    distinguishFrom: [
      "EGF — epithelial proliferation",
      "VEGF — angiogenesis, endothelial growth",
      "TGF-β — fibrosis and extracellular matrix deposition",
    ],
    pediatrics:
      "Wound healing same PDGF pathway; PDGF-receptor mutations rare in juvenile myelomonocytic leukemia context.",
  },
];

const signalingById = new Map(
  SIGNALING_MOLECULES.map((entry) => [entry.id, entry]),
);

export function getSignalingById(id: string): SignalingEntry | undefined {
  return signalingById.get(id);
}

export interface SignalingAliasMatch {
  alias: string;
  signalingId: string;
}

export function buildSignalingAliasIndex(): SignalingAliasMatch[] {
  const matches: SignalingAliasMatch[] = [];
  for (const entry of SIGNALING_MOLECULES) {
    for (const alias of entry.aliases) {
      matches.push({ alias: alias.toLowerCase(), signalingId: entry.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
