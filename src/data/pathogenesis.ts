export interface PathogenesisEntry {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  examples: string[];
  boardsPearls: string[];
  distinguishFrom?: string[];
  pediatrics?: string;
}

export const PATHOGENESIS: PathogenesisEntry[] = [
  {
    id: "bacterial-translocation",
    name: "Bacterial Translocation",
    aliases: [
      "bacterial translocation",
      "gut bacterial translocation",
      "intestinal bacterial translocation",
      "bacterial translocation from gut",
    ],
    definition:
      "Passage of viable bacteria or bacterial products from the gastrointestinal lumen across the intestinal mucosal barrier into mesenteric lymph nodes, portal circulation, and potentially systemic circulation.",
    examples: [
      "Cirrhosis with portal hypertension — gut permeability ↑ → translocation → spontaneous bacterial peritonitis (SBP)",
      "Severe burns, trauma, and critical illness — impaired gut barrier → sepsis from enteric flora",
      "Immunocompromised states — impaired mucosal immunity permits translocation",
      "Necrotizing enterocolitis (NEC) in neonates — bacterial invasion of bowel wall",
    ],
    boardsPearls: [
      "SBP in cirrhotic ascites — think translocation of gut flora (E. coli, Klebsiella, Streptococcus)",
      "Prophylactic antibiotics (e.g. norfloxacin) in high-risk cirrhosis reduce SBP recurrence",
      "vs hematogenous spread — translocation is gut-to-systemic, not seeding from a distant bloodstream focus",
      "LPS/endotoxin translocation contributes to systemic inflammation in sepsis and liver disease",
    ],
    distinguishFrom: [
      "Contiguous spread — direct extension along adjacent tissue, not across gut mucosa",
      "Hematogenous dissemination — bloodstream carriage to distant organs",
    ],
    pediatrics:
      "NEC in preterm infants — translocation of gut bacteria through immature mucosa; pneumatosis intestinalis and sepsis are red flags.",
  },
  {
    id: "contiguous-spread",
    name: "Contiguous Spread",
    aliases: [
      "contiguous spread",
      "contiguous extension",
      "direct extension",
      "direct spread",
      "local spread",
      "locally invasive spread",
    ],
    definition:
      "Spread of infection or malignancy by direct extension from the primary site into immediately adjacent tissues, without transport through blood or lymphatic vessels.",
    examples: [
      "Cellulitis extending along subcutaneous tissue from a wound",
      "Dental abscess → periapical infection → mandibular osteomyelitis",
      "Sinusitis → orbital cellulitis via thin orbital wall (subperiosteal abscess)",
      "Colorectal cancer invading adjacent bladder or abdominal wall",
      "Epidural abscess spreading from adjacent vertebral osteomyelitis or discitis",
    ],
    boardsPearls: [
      "Orbital cellulitis from ethmoid sinusitis — classic contiguous spread in children",
      "Osteomyelitis from adjacent soft-tissue infection or open fracture — direct inoculation or contiguous route",
      "vs hematogenous — no bloodstream intermediate; infection moves tissue-to-tissue",
      "vs lymphatic spread — no regional node involvement required for initial extension",
    ],
    distinguishFrom: [
      "Hematogenous dissemination — bacteria travel via blood to distant sites",
      "Lymphatic spread — organisms reach regional lymph nodes before distant spread",
    ],
    pediatrics:
      "Pediatric orbital cellulitis often follows ethmoid sinusitis via contiguous spread — assess extraocular movements and vision urgently.",
  },
  {
    id: "hematogenous-dissemination",
    name: "Hematogenous Dissemination",
    aliases: [
      "hematogenous dissemination",
      "hematogenous spread",
      "hematogenous dissemination/spread",
      "hematogenic spread",
      "hematogenic dissemination",
      "blood-borne spread",
      "blood-borne dissemination",
      "bloodstream spread",
      "via the bloodstream",
    ],
    definition:
      "Spread of microorganisms, tumor cells, or emboli through the bloodstream to seed distant organs or tissues distant from the primary site of infection or malignancy.",
    examples: [
      "Infective endocarditis → septic emboli to kidneys, spleen, brain",
      "Miliary tuberculosis — hematogenous seeding of lungs and other organs",
      "Osteomyelitis in children — metaphyseal infection via hematogenous route (S. aureus)",
      "Metastatic cancer to liver, lung, bone via arterial/portal circulation",
      "Bacterial meningitis in neonates — hematogenous crossing of BBB",
    ],
    boardsPearls: [
      "Acute hematogenous osteomyelitis in child — fever + bone pain + ↑ ESR/CRP; metaphysis of long bones",
      "Miliary TB on CXR — countless small nodules from hematogenous dissemination",
      "Septic emboli from right-sided endocarditis → lungs; left-sided → systemic organs",
      "vs contiguous spread — distant sites involved without direct tissue contact",
    ],
    distinguishFrom: [
      "Contiguous spread — direct local extension only",
      "Lymphatic spread — regional node involvement first (e.g. sentinel node)",
      "Bacterial translocation — gut mucosa to circulation, not from a distant established focus",
    ],
    pediatrics:
      "Hematogenous osteomyelitis and septic arthritis peak in young children; suspect in febrile child refusing to bear weight or use a limb.",
  },
  {
    id: "anti-drug-antibodies",
    name: "Anti-drug antibodies (ADAs)",
    aliases: [
      "anti-drug antibodies",
      "antidrug antibodies",
      "anti drug antibodies",
      "adas",
      "drug antibodies",
      "neutralizing anti-drug antibodies",
    ],
    definition:
      "Host antibodies generated against a therapeutic biologic drug (especially monoclonal antibodies) that can neutralize the drug, accelerate clearance, or cause infusion reactions and secondary loss of treatment response.",
    examples: [
      "Anti-infliximab antibodies in Crohn disease or RA — chimeric mAb is more immunogenic; may cause loss of response",
      "Anti-adalimumab antibodies — reduced drug levels and flare despite adherence",
      "Anti-factor VIII alloantibodies in hemophilia A — inhibitor development blocks replacement therapy",
      "Anti-insulin antibodies (exogenous insulin) — rarely clinically significant with modern analogs",
      "Methotrexate co-therapy with anti-TNF agents — lowers ADA formation and improves durability of response",
    ],
    boardsPearls: [
      "Chimeric (e.g., infliximab, rituximab) > humanized > fully human (e.g., adalimumab) — ↓ immunogenicity down the spectrum",
      "Loss of biologic efficacy → consider nonadherence, disease progression, or ADA-mediated neutralization",
      "ADAs can cause acute infusion reactions (fever, urticaria, hypotension) or delayed secondary failure",
      "vs drug allergy — ADAs are often IgG neutralizing antibodies; true IgE-mediated allergy is a separate mechanism",
      "Concomitant immunosuppression (methotrexate, azathioprine) reduces ADA formation to anti-TNF therapy",
    ],
    distinguishFrom: [
      "Autoantibodies (RF, anti-CCP, ANA) — directed against self antigens, not the drug molecule",
      "IgE-mediated drug hypersensitivity — immediate-type allergy, not neutralizing anti-drug IgG",
      "Antidrug antibodies vs anti-TNF therapy — ADAs are antibodies *to the drug*; anti-TNF drugs are antibodies *to TNF*",
    ],
    pediatrics:
      "Pediatric IBD on infliximab — same ADA risk; methotrexate often added to reduce immunogenicity and prolong remission.",
  },
  {
    id: "leukocyte-migration",
    name: "Leukocyte Migration",
    aliases: [
      "leukocyte migration",
      "leukocyte trafficking",
      "leukocyte recruitment",
      "leukocyte extravasation",
      "wbc migration",
      "white blood cell migration",
    ],
    definition:
      "Directed movement of leukocytes from the bloodstream into tissues during inflammation, proceeding through margination, endothelial rolling, activation, firm adhesion, transmigration (diapedesis), and chemotaxis along a chemokine gradient.",
    examples: [
      "Acute bacterial infection — neutrophil recruitment to site via IL-8/CXCL8 and complement C5a",
      "Atherosclerosis — monocyte adhesion to activated endothelium and migration into intima",
      "Autoimmune synovitis — lymphocyte and macrophage infiltration in rheumatoid arthritis",
      "Corticosteroids ↓ leukocyte migration by suppressing adhesion molecule expression and cytokines",
      "Leukocyte adhesion deficiency (LAD) — defective integrins → recurrent infections without pus",
    ],
    boardsPearls: [
      "Rolling: selectins (E-selectin, P-selectin); firm adhesion: integrins (LFA-1) bind ICAM-1/VCAM-1; diapedesis through endothelium",
      "Chemokines (e.g., IL-8) create gradient guiding leukocytes to infection site",
      "TNF-α and IL-1 ↑ endothelial adhesion molecules — key step upstream of migration",
      "LAD type 1 — CD18/β₂ integrin defect; delayed umbilical cord separation, poor wound healing, ↑ neutrophils but no pus",
      "Corticosteroids and leukocyte demargination — steroids cause apparent leukocytosis by releasing marginated pool",
    ],
    distinguishFrom: [
      "Hematogenous dissemination — organisms travel in blood to distant sites, not leukocyte egress into tissue",
      "Chemotaxis alone — one step of migration; full process includes adhesion and transmigration",
      "Leukocytosis — ↑ WBC count in blood; does not by itself mean successful tissue migration",
    ],
    pediatrics:
      "LAD presents in infancy with recurrent bacterial infections, delayed cord separation, and impaired pus formation despite neutrophilia.",
  },
  {
    id: "granuloma",
    name: "Granuloma",
    aliases: [
      "granuloma",
      "granulomas",
      "granulomatous inflammation",
      "caseating granuloma",
      "caseating granulomas",
      "noncaseating granuloma",
      "noncaseating granulomas",
      "non-caseating granuloma",
    ],
    definition:
      "Organized aggregate of activated macrophages (epithelioid histiocytes), often with multinucleated giant cells, usually surrounded by lymphocytes, forming a focal chronic inflammatory nodule to contain persistent antigen that cannot be cleared.",
    examples: [
      "Tuberculosis — caseating granulomas with central necrosis; AFB-positive",
      "Sarcoidosis — noncaseating granulomas; bilateral hilar lymphadenopathy, ↑ ACE",
      "Crohn disease — noncaseating transmural granulomas in bowel wall",
      "Foreign-body granuloma — suture, silica, berylliosis",
      "Schistosoma eggs — granulomatous periportal fibrosis in liver",
      "PPD skin test — type IV hypersensitivity granuloma at injection site",
    ],
    boardsPearls: [
      "Caseating (cheese-like necrosis) → think TB; noncaseating → sarcoidosis, Crohn disease, berylliosis",
      "TNF-α is central to granuloma formation and maintenance — anti-TNF therapy can reactivate latent TB",
      "Multinucleated giant cells (Langhans type with horseshoe nuclei in TB) and epithelioid macrophages are hallmarks",
      "Sarcoidosis: noncaseating granulomas + ↑ ACE + hypercalcemia (macrophage 1α-hydroxylase)",
      "vs abscess — pus and liquefactive necrosis, not organized epithelioid granuloma",
    ],
    distinguishFrom: [
      "Abscess — neutrophil-rich pus cavity, not organized macrophage granuloma",
      "Necrotizing vasculitis (GPA) — necrotizing granulomatous inflammation of vessels, not classic infectious granuloma",
      "Malignancy — granulomatous reaction can mimic tumor; biopsy required",
      "Acute suppurative inflammation — neutrophil predominance without granuloma architecture",
    ],
    pediatrics:
      "TB in children may show Ghon complex with caseating granuloma; chronic granulomatous disease is a neutrophil oxidative burst defect (name is misleading — not a granuloma disease per se).",
  },
  {
    id: "enterohepatic-recirculation",
    name: "Enterohepatic Recirculation",
    aliases: [
      "enterohepatic recirculation",
      "enterohepatic circulation",
      "entero-hepatic recirculation",
      "entero hepatic recirculation",
    ],
    definition:
      "Cycling of drugs or metabolites from the liver into bile, into the intestine, and back into the systemic circulation after reabsorption — often after intestinal deconjugation by gut bacteria.",
    examples: [
      "Estrogen and oral contraceptives — glucuronide conjugates excreted in bile → bacterial β-glucuronidase deconjugates → reabsorption prolongs hormone exposure",
      "Morphine metabolites (e.g., morphine-6-glucuronide) undergo enterohepatic cycling → prolonged opioid effect",
      "Conjugated bilirubin secreted in bile → gut bacteria deconjugate → urobilinogen → partial reabsorption",
      "Cholestyramine interrupts recirculation by binding bile acids and some drugs in the gut lumen (e.g., digoxin overdose adjunct)",
      "Antibiotics altering gut flora can ↓ deconjugation and change drug/hormone levels (classically discussed with oral contraceptives)",
    ],
    boardsPearls: [
      "Liver conjugates (often glucuronidation) → bile excretion → gut bacterial deconjugation → intestinal reabsorption → back to liver",
      "Prolongs half-life of many lipophilic drugs and hormone metabolites",
      "Neonatal jaundice worsened by ↑ enterohepatic circulation of bilirubin — sterile gut clears slowly; early feeding and phototherapy help",
      "Bile acid sequestrants (cholestyramine) bind substances in gut and interrupt recirculation",
      "vs first-pass metabolism — enterohepatic recirculation is post-absorption cycling, not initial gut/liver presystemic loss",
    ],
    distinguishFrom: [
      "First-pass (presystemic) metabolism — drug metabolized before reaching systemic circulation on initial oral dose",
      "Renal reabsorption — tubular recycling in kidney, not bile-intestine-liver loop",
      "Biliary excretion without reabsorption — permanent elimination in stool",
    ],
    pediatrics:
      "Physiologic neonatal jaundice is amplified by enterohepatic circulation of bilirubin; frequent feeding and meconium passage ↓ reabsorption. Breast milk jaundice also involves this pathway.",
  },
  {
    id: "calcification",
    name: "Calcification",
    aliases: [
      "calcification",
      "calcifications",
      "tissue calcification",
      "pathologic calcification",
      "dystrophic calcification",
      "metastatic calcification",
    ],
    definition:
      "Deposition of calcium salts (primarily hydroxyapatite) in tissues; classified as dystrophic (damaged tissue with normal serum calcium) or metastatic (normal tissue with abnormal calcium/phosphate homeostasis).",
    examples: [
      "Dystrophic: atherosclerotic plaques, caseous TB lymph nodes, fat necrosis (breast trauma), damaged heart valves, healed granulomas",
      "Metastatic: nephrocalcinosis and renal failure in hyperparathyroidism or CKD; lung and gastric mucosa calcification with hypercalcemia",
      "Monckeberg medial calcific sclerosis — calcification of arterial media (often diabetes, elderly)",
      "Psammona bodies — laminated calcifications in papillary thyroid carcinoma, meningioma, serous ovarian tumors",
      "Pericardial calcification in chronic constrictive pericarditis",
      "Eggshell calcification of hilar lymph nodes in silicosis",
    ],
    boardsPearls: [
      "Dystrophic = dead/damaged tissue + normal Ca²⁺/PO₄³⁻; metastatic = normal tissue + ↑ Ca²⁺ or ↑ PO₄³⁻",
      "Metastatic calcification favors interstitial tissues: kidney, lung, gastric mucosa, media of arteries",
      "Hyperparathyroidism, vitamin D toxicity, milk-alkali syndrome, sarcoidosis (↑ 1,25-OH vitamin D) → metastatic calcification",
      "CKD → hyperphosphatemia + secondary hyperparathyroidism → vascular and soft-tissue calcification",
      "vs ossification — bone formation with organized osteoid and lamellae; calcification is calcium salt deposition without true bone matrix",
    ],
    distinguishFrom: [
      "Ossification — organized bone with osteoblasts/osteoid; heterotopic ossification after trauma",
      "Chondrocalcinosis — calcium pyrophosphate crystals in cartilage (pseudogout), not hydroxyapatite dystrophic deposit",
      "Radiopaque foreign body — metal/glass on imaging, not biologic calcification",
      "Hematogenous dissemination — term for spread via blood, not calcium deposition",
    ],
    pediatrics:
      "Congenital CMV — periventricular intracranial calcifications; congenital toxoplasmosis — more diffuse calcifications plus chorioretinitis and hydrocephalus.",
  },
  {
    id: "eosinophilic-inflammation",
    name: "Eosinophilic Inflammation",
    aliases: [
      "eosinophilic",
      "eosinophilic inflammation",
      "eosinophil-mediated inflammation",
      "eosinophilic infiltrate",
      "tissue eosinophilia",
    ],
    definition:
      "Inflammatory response dominated by eosinophil recruitment and activation, typically driven by type 2 (Th2) cytokines; on histology, \"eosinophilic\" also describes structures staining pink with eosin dye on H&E.",
    examples: [
      "Asthma and allergic rhinitis — airway eosinophilic inflammation with IL-4, IL-5, IL-13",
      "Eosinophilic esophagitis — dysphagia, food impaction, esophageal rings/furrows, tissue eosinophils",
      "Helminth and parasitic infections — eosinophils combat multicellular parasites",
      "Drug hypersensitivity and DRESS — peripheral eosinophilia with organ involvement",
      "EGPA (eosinophilic granulomatosis with polyangiitis) — asthma + eosinophilia + vasculitis",
      "Bullous pemphigoid — subepidermal blisters with eosinophilic dermal infiltrate",
      "Lewy bodies — eosinophilic intracytoplasmic inclusions in Parkinson disease (staining descriptor)",
    ],
    boardsPearls: [
      "Th2 cytokines IL-5 (eosinophil growth/survival) and IL-4/IL-13 drive eosinophilic inflammation",
      "Eosinophils + allergy/parasites; neutrophils + acute bacterial infection — classic pairing",
      "Peripheral eosinophilia often accompanies tissue eosinophilic inflammation but can be absent locally",
      "Dupilumab blocks IL-4Rα → ↓ type 2 inflammation (atopic dermatitis, eosinophilic asthma, EoE)",
      "Before attributing eosinophilia to autoimmune disease, rule out parasites (especially with steroids planned)",
    ],
    distinguishFrom: [
      "Neutrophilic inflammation — acute bacterial infection, pus, IL-8/C5a chemotaxis",
      "Lymphocytic inflammation — viral infection, chronic autoimmune (e.g., lymphocytic thyroiditis)",
      "Eosinophilia (lab finding) — elevated blood eosinophil count; not synonymous with tissue infiltration",
      "Basophilic staining — blue/purple on H&E (nuclei, basophil granules), opposite staining property",
    ],
    pediatrics:
      "Eosinophilic esophagitis in children/adolescents — feeding difficulty or dysphagia; atopy and food allergy common. Parasitic infection must be excluded before diagnosing primary eosinophilic disorders.",
  },
  {
    id: "hyperplasia",
    name: "Hyperplasia",
    aliases: [
      "hyperplasia",
      "cellular hyperplasia",
      "tissue hyperplasia",
    ],
    definition:
      "Increase in the number of cells in a tissue or organ, causing enlargement; an adaptive or pathologic response to stimulation, hormonal drive, or chronic injury.",
    examples: [
      "Benign prostatic hyperplasia — androgen-driven prostate gland enlargement",
      "Endometrial hyperplasia — unopposed estrogen → ↑ endometrial cancer risk",
      "Congenital adrenal hyperplasia — ACTH-driven adrenal cortical enlargement",
      "Gingival hyperplasia — nifedipine, phenytoin, cyclosporine",
      "Lymphoid hyperplasia — reactive lymph node enlargement in infection",
      "Compensatory hyperplasia — liver regeneration after partial hepatectomy",
    ],
    boardsPearls: [
      "Hyperplasia = ↑ cell number; hypertrophy = ↑ cell size without division",
      "Often reversible if stimulus removed (unlike metaplasia/dysplasia progression risks)",
      "Endometrial hyperplasia with atypia → endometrial carcinoma risk",
      "BPH — hyperplasia of stromal and glandular elements, not prostate cancer",
      "vs neoplasia — hyperplasia is regulated and polyclonal; neoplasia is monoclonal",
    ],
    distinguishFrom: [
      "Hypertrophy — larger cells (e.g., LV hypertrophy), not increased cell count",
      "Metaplasia — one adult cell type replaced by another (Barrett esophagus)",
      "Dysplasia — disordered growth with architectural/cytologic atypia",
      "Neoplasia — monoclonal uncontrolled proliferation (benign or malignant)",
    ],
    pediatrics:
      "Physiologic thymic hyperplasia in infants can mimic mediastinal mass on imaging; congenital adrenal hyperplasia presents with virilization or salt-wasting in neonates.",
  },
  {
    id: "sclerosis",
    name: "Sclerosis",
    aliases: [
      "sclerosis",
      "fibrosis",
      "tissue sclerosis",
      "organ sclerosis",
    ],
    definition:
      "Pathologic hardening of tissue from excessive deposition of collagen and extracellular matrix, replacing normal parenchyma and impairing function; distinct from the disease name systemic sclerosis (scleroderma).",
    examples: [
      "Systemic sclerosis — skin and visceral fibrosis (scleroderma disease)",
      "Atherosclerotic plaque sclerosis — hardened arterial wall",
      "Multiple sclerosis — CNS demyelinating plaques (name uses \"sclerosis\" for hard scar-like lesions)",
      "Cirrhosis — hepatic fibrosis and nodular regeneration",
      "Glomerulosclerosis in chronic kidney disease",
      "Radiation fibrosis of lung or mediastinum",
    ],
    boardsPearls: [
      "\"Sclerosis\" = fibrotic hardening; systemic sclerosis is a specific autoimmune disease",
      "CREST/scleroderma — immune-mediated fibrosis, not simple age-related sclerosis",
      "Sclerosis is often irreversible — unlike many hyperplastic changes",
      "MS plaques are sclerotic scars in CNS white matter — different organ, same histologic concept",
      "Scleroderma renal crisis — fibroproliferative vascular lesion in kidney, not benign sclerosis",
    ],
    distinguishFrom: [
      "Hyperplasia — increased cell number, not matrix deposition",
      "Systemic sclerosis (disease) — specific autoimmune fibrosing disorder; term \"sclerosis\" here is pathologic descriptor",
      "Calcification — calcium deposits, not collagen fibrosis",
      "Hyaline arteriolosclerosis — vascular change in hypertension/diabetes, related but distinct pattern",
    ],
    pediatrics:
      "Localized morphea (scleroderma) in children causes skin sclerosis without necessarily progressing to systemic sclerosis; monitor for extracutaneous involvement.",
  },
  {
    id: "hyperkeratosis",
    name: "Hyperkeratosis",
    aliases: [
      "hyperkeratosis",
      "hyperkeratotic",
      "stratum corneum thickening",
      "orthokeratosis",
      "parakeratosis",
    ],
    definition:
      "Thickening of the stratum corneum from excess keratin production or retention; may show retained nuclei in corneocytes (parakeratosis) or anucleate cells (orthokeratosis).",
    examples: [
      "Psoriasis — parakeratosis with silvery scale and Munro microabscesses",
      "Actinic keratosis — sun-damaged rough plaques; premalignant",
      "Corns and calluses — friction-induced localized hyperkeratosis",
      "Keratosis pilaris — follicular hyperkeratosis on extensor arms",
      "Subungual hyperkeratosis — psoriasis or onychomycosis under nail",
      "Acanthosis nigricans — velvety hyperkeratotic plaques (insulin resistance)",
    ],
    boardsPearls: [
      "Hyperkeratosis = thick stratum corneum; hyperplasia = ↑ epidermal cell layers (acanthosis)",
      "Parakeratosis — nuclei retained in stratum corneum (psoriasis, actinic keratosis)",
      "Psoriasis: acanthosis + parakeratosis + hypogranulosis classic triad",
      "Actinic keratosis → can progress to squamous cell carcinoma",
      "vs lichenification — thickening from chronic rubbing (eczema), not primary keratin disorder alone",
    ],
    distinguishFrom: [
      "Hyperplasia — increased cell number in tissue; hyperkeratosis is specifically cornified layer thickening",
      "Hypertrophy — enlarged cells, not excess keratin layer",
      "Ichthyosis — generalized scaling disorders; hyperkeratosis describes histologic finding",
      "Hypergranulosis — thickened granular layer (lichen planus), opposite of hypogranulosis in psoriasis",
    ],
    pediatrics:
      "Keratosis pilaris common in atopic children; congenital ichthyoses present at birth with diffuse hyperkeratotic scaling.",
  },
  {
    id: "extravasation",
    name: "Extravasation",
    aliases: [
      "extravasation",
      "extravasated",
      "extravasated blood",
      "extravasated cells",
      "vascular extravasation",
    ],
    definition:
      "Escape of blood cells, fluid, or infused substances from vessels into surrounding tissues through damaged or permeable vessel walls.",
    examples: [
      "Leukocyte extravasation — diapedesis during inflammation (see leukocyte migration)",
      "RBC extravasation — bruise (ecchymosis), hemosiderin-laden macrophages, cholesterol granulomas in atherosclerosis",
      "IV chemotherapy extravasation — doxorubicin, vincristine → severe local tissue necrosis",
      "Contrast or hyperosmolar fluid extravasation — compartment swelling and injury",
      "Vascular permeability in burns, sepsis, or anaphylaxis — plasma extravasation → edema",
    ],
    boardsPearls: [
      "Extravasated RBCs → hemosiderin (golden-brown macrophages) after bruise resorption",
      "Atherosclerotic plaque cholesterol from extravasated RBC membranes and LDL",
      "Chemotherapy extravasation emergency — stop infusion, elevate limb, local antidotes per agent",
      "Leukocyte extravasation = key step in inflammation; distinct from bacteria hematogenous spread",
      "Extravasation ≠ diapedesis only — includes fluid, drugs, and erythrocytes leaving vessels",
    ],
    distinguishFrom: [
      "Leukocyte migration — focused on WBC recruitment; extravasation is broader (RBC, fluid, drugs)",
      "Hematoma — collected extravasated blood forming a localized clot",
      "Transudate vs exudate — fluid shifts with different protein content; extravasation emphasizes vessel egress",
      "Hematogenous dissemination — microbes in bloodstream seeding distant sites",
    ],
    pediatrics:
      "Extravasation of IV infusions in infants — small veins, high risk of tissue injury; use appropriate cannula size and monitor site.",
  },
];

const pathogenesisById = new Map(
  PATHOGENESIS.map((entry) => [entry.id, entry]),
);

export function getPathogenesisById(
  id: string,
): PathogenesisEntry | undefined {
  return pathogenesisById.get(id);
}

export interface PathogenesisAliasMatch {
  alias: string;
  pathogenesisId: string;
}

export function buildPathogenesisAliasIndex(): PathogenesisAliasMatch[] {
  const matches: PathogenesisAliasMatch[] = [];
  for (const entry of PATHOGENESIS) {
    for (const alias of entry.aliases) {
      matches.push({
        alias: alias.toLowerCase(),
        pathogenesisId: entry.id,
      });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
