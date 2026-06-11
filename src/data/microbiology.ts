export type MicrobeType =
  | "gram-positive-cocci"
  | "gram-positive-rod"
  | "gram-negative-cocci"
  | "gram-negative-rod"
  | "acid-fast"
  | "spirochete"
  | "atypical-bacteria"
  | "anaerobe"
  | "virus"
  | "fungus"
  | "parasite";

export interface MicrobiologyEntry {
  id: string;
  name: string;
  aliases: string[];
  type: MicrobeType;
  definition: string;
  morphology?: string[];
  virulenceFactors?: string[];
  transmission?: string[];
  diseases: string[];
  classicPresentation?: string[];
  diagnosis?: string[];
  treatment?: string[];
  distinguishFrom?: string[];
  boardsPearls: string[];
  pediatrics?: string;
}

export const MICROBIOLOGY: MicrobiologyEntry[] = [
  {
    id: "staphylococcus-aureus",
    name: "Staphylococcus aureus",
    aliases: [
      "staphylococcus aureus",
      "s. aureus",
      "staph aureus",
      "staph",
      "staphylococcus",
    ],
    type: "gram-positive-cocci",
    definition:
      "Gram-positive cocci in clusters; catalase-positive and coagulase-positive. Leading cause of skin/soft tissue infection, bacteremia, and device-related infection.",
    morphology: [
      "Gram+ cocci in grape-like clusters",
      "Catalase+ (distinguishes staphylococci from streptococci)",
      "Coagulase+ (S. aureus vs coagulase− S. epidermidis)",
      "Golden colonies on agar; β-hemolytic",
    ],
    virulenceFactors: [
      "Protein A — binds IgG Fc, inhibits opsonization",
      "Coagulase — converts fibrinogen to fibrin (wall off infection)",
      "TSST-1 — toxic shock syndrome",
      "Enterotoxins — preformed; rapid food poisoning",
      "PVL — necrotizing skin/soft tissue infection",
    ],
    transmission: ["Direct contact", "Contaminated fomites and devices"],
    diseases: [
      "Abscess, cellulitis, impetigo",
      "Endocarditis (especially IV drug use, prosthetic valves)",
      "Osteomyelitis and septic arthritis",
      "Toxic shock syndrome",
      "Scalded skin syndrome (exfoliative toxin in infants)",
      "Food poisoning (preformed toxin, <6 h)",
    ],
    classicPresentation: [
      "Honey-crusted impetigo",
      "Purulent abscess with surrounding erythema",
      "Acute bacterial endocarditis with new murmur and embolic phenomena",
    ],
    diagnosis: [
      "Gram stain and culture",
      "Methicillin resistance → MRSA (oxacillin/cefoxitin screen)",
      "Blood cultures in bacteremia/endocarditis",
    ],
    treatment: [
      "MSSA: nafcillin, oxacillin, cefazolin",
      "MRSA: vancomycin, daptomycin, linezolid (site-dependent)",
      "Mild SSTI: TMP-SMX, doxycycline (if MRSA prevalent)",
    ],
    distinguishFrom: [
      "S. epidermidis — coagulase−; common culture contaminant on devices",
      "Streptococcus pyogenes — chains, bacitracin sensitive, coagulase−",
    ],
    boardsPearls: [
      "Coagulase+ = S. aureus until proven otherwise",
      "Preformed enterotoxin → vomiting within hours; reheated rice syndrome",
      "MRSA: prior antibiotics, health care exposure, purulent SSTI",
    ],
    pediatrics:
      "Scalded skin syndrome in neonates/infants — exfoliative toxin from phage-infected S. aureus; Nikolsky sign.",
  },
  {
    id: "streptococcus-pyogenes",
    name: "Streptococcus pyogenes",
    aliases: [
      "streptococcus pyogenes",
      "s. pyogenes",
      "group a streptococcus",
      "group a strep",
      "gas",
      "group a streptococci",
    ],
    type: "gram-positive-cocci",
    definition:
      "Group A β-hemolytic streptococcus (GAS); Gram-positive cocci in chains. Major cause of pharyngitis, skin infection, and invasive post-streptococcal sequelae.",
    morphology: [
      "Gram+ cocci in chains",
      "β-hemolysis on blood agar",
      "Group A carbohydrate (Lancefield)",
      "Bacitracin sensitive (vs Group B strep)",
      "PYR positive",
    ],
    virulenceFactors: [
      "M protein — antiphagocytic; rheumatogenic strains",
      "Streptolysin O (ASO antibody target)",
      "Streptokinase, hyaluronidase — spread",
      "Erythrogenic toxin — scarlet fever rash",
    ],
    transmission: ["Respiratory droplets", "Direct contact with lesions"],
    diseases: [
      "Strep pharyngitis",
      "Impetigo, erysipelas, cellulitis, necrotizing fasciitis",
      "Scarlet fever",
      "Rheumatic fever (post-infectious)",
      "Post-streptococcal glomerulonephritis",
      "Toxic shock–like syndrome (invasive GAS)",
    ],
    classicPresentation: [
      "Exudative pharyngitis + tender anterior cervical LAD, no cough",
      "Sandpaper rash with circumoral pallor (scarlet fever)",
      "Erysipelas — sharply demarcated, raised erythema",
    ],
    diagnosis: [
      "Rapid strep antigen or throat culture",
      "ASO titer ↑ after pharyngitis (not skin infection)",
      "Anti-DNase B for skin GAS infections",
    ],
    treatment: [
      "Pharyngitis: penicillin or amoxicillin (prevent rheumatic fever)",
      "Penicillin allergy: cephalexin or clindamycin",
      "Necrotizing infection: penicillin + clindamycin + surgery",
    ],
    distinguishFrom: [
      "S. aureus — clusters, coagulase+; impetigo can be either",
      "Group B strep (S. agalactiae) — bacitracin resistant; neonatal sepsis",
      "Viruses — pharyngitis with cough, rhinorrhea, no exudate",
    ],
    boardsPearls: [
      "Treat strep pharyngitis to prevent rheumatic fever, not PSGN",
      "Centor criteria guide testing/treatment",
      "Necrotizing fasciitis: pain out of proportion, crepitus, surgical emergency",
    ],
    pediatrics:
      "Scarlet fever common in children; rheumatic fever still seen where antibiotics are delayed.",
  },
  {
    id: "streptococcus-pneumoniae",
    name: "Streptococcus pneumoniae",
    aliases: [
      "streptococcus pneumoniae",
      "s. pneumoniae",
      "pneumococcus",
      "pneumococcal",
      "diplococcus pneumoniae",
    ],
    type: "gram-positive-cocci",
    definition:
      "Encapsulated Gram-positive lancet-shaped diplococcus; α-hemolytic. Leading bacterial cause of community-acquired pneumonia, meningitis, otitis media, and sinusitis.",
    morphology: [
      "Gram+ lancet-shaped diplococci",
      "α-hemolysis (green zone on blood agar)",
      "Optochin sensitive; bile soluble",
      "Quellung reaction positive (capsular swelling with antisera)",
    ],
    virulenceFactors: [
      "Polysaccharide capsule — antiphagocytic (#1 virulence factor)",
      "IgA protease",
      "Pneumolysin — pore-forming toxin",
    ],
    transmission: ["Respiratory droplets", "Nasopharyngeal colonization"],
    diseases: [
      "Community-acquired pneumonia (rust-colored sputum, lobar consolidation)",
      "Meningitis (adults and children)",
      "Otitis media and sinusitis",
      "Bacteremia and sepsis",
      "Sepsis in asplenic patients",
    ],
    classicPresentation: [
      "Rust-colored sputum with sudden fever and pleuritic chest pain",
      "Consolidation with dullness, bronchial breath sounds, egophony",
      "Meningitis in elderly or post-splenectomy patient",
    ],
    diagnosis: [
      "Gram stain/culture of sputum, blood, CSF",
      "Urine pneumococcal antigen (pneumonia/meningitis)",
      "CSF: ↑ WBC, ↓ glucose, ↑ protein; Gram+ diplococci",
    ],
    treatment: [
      "CAP: amoxicillin, ceftriaxone, or respiratory fluoroquinolone (severity-guided)",
      "Meningitis: ceftriaxone + vancomycin (+ dexamethasone)",
      "Penicillin-resistant strains → vancomycin or ceftriaxone (MIC-guided)",
    ],
    distinguishFrom: [
      "Viridans streptococci — optochin resistant; subacute endocarditis",
      "H. influenzae — Gram− coccobacilli; requires factors V and X",
      "Klebsiella — Gram− rod; currant jelly sputum in alcoholics",
    ],
    boardsPearls: [
      "Asplenic/hyposplenic patients: overwhelming post-splenectomy sepsis risk — vaccinate",
      "Rust-colored sputum classic but not sensitive/specific",
      "Dexamethasone with first antibiotic dose in pneumococcal meningitis ↓ mortality",
    ],
    pediatrics:
      "Leading bacterial cause of otitis media; PCV13 vaccination dramatically ↓ invasive pneumococcal disease.",
  },
  {
    id: "escherichia-coli",
    name: "Escherichia coli",
    aliases: [
      "escherichia coli",
      "e. coli",
      "e coli",
      "e.coli",
    ],
    type: "gram-negative-rod",
    definition:
      "Gram-negative rod; facultative anaerobe and normal gut flora. Most common cause of UTI and a leading cause of neonatal meningitis, sepsis, and gastroenteritis (pathogenic strains).",
    morphology: [
      "Gram− bacilli (rods)",
      "Lactose fermenter (pink colonies on MacConkey agar)",
      "Oxidase negative (Enterobacteriaceae)",
    ],
    virulenceFactors: [
      "P fimbriae (pyelonephritis-associated) — bind uroepithelium",
      "K capsule — neonatal meningitis strains",
      "LT and ST enterotoxins (ETEC)",
      "Shiga-like toxin (EHEC / O157:H7)",
      "Intimin (EHEC attachment)",
    ],
    transmission: [
      "Fecal-oral (gastroenteritis strains)",
      "Ascension from perineum (UTI)",
      "Contaminated food/water (EHEC, ETEC)",
    ],
    diseases: [
      "Uncomplicated and complicated UTI, pyelonephritis",
      "Neonatal meningitis and sepsis (K1 strains)",
      "EHEC hemorrhagic colitis → HUS",
      "ETEC traveler's diarrhea",
      "Sepsis (especially urosepsis)",
    ],
    classicPresentation: [
      "Dysuria, frequency, suprapubic pain (cystitis)",
      "Flank pain, fever, CVA tenderness (pyelonephritis)",
      "Bloody diarrhea → anemia, thrombocytopenia, renal failure (EHEC/HUS)",
    ],
    diagnosis: [
      "Urine culture >10⁵ CFU/mL (standard criteria)",
      "Stool culture for EHEC; do not give empiric fluoroquinolones in bloody diarrhea (HUS risk)",
      "CSF culture in neonatal meningitis",
    ],
    treatment: [
      "Uncomplicated UTI: nitrofurantoin, TMP-SMX, fosfomycin",
      "Pyelonephritis/sepsis: ceftriaxone, fluoroquinolone",
      "EHEC: supportive care only — antibiotics may ↑ HUS risk",
    ],
    distinguishFrom: [
      "Proteus — urease+, struvite stones, ammonia smell",
      "Klebsiella — thick mucoid capsule; alcoholics with aspiration",
      "Salmonella/Shigella — non-lactose fermenters; bloody diarrhea workup differs",
    ],
    boardsPearls: [
      "#1 cause of UTI overall",
      "EHEC O157:H7 — avoid antibiotics; monitor for HUS (triad: anemia, thrombocytopenia, AKI)",
      "Neonatal meningitis E. coli — look for K1 capsule strains",
    ],
    pediatrics:
      "Neonatal E. coli sepsis/meningitis — early-onset (vertical) vs late-onset; ampicillin + gentamicin empirically.",
  },
  {
    id: "haemophilus-influenzae",
    name: "Haemophilus influenzae",
    aliases: [
      "haemophilus influenzae",
      "h. influenzae",
      "h influenzae",
      "haemophilus",
    ],
    type: "gram-negative-rod",
    definition:
      "Gram-negative coccobacillus requiring hemin (factor X) and NAD (factor V). Type b (Hib) capsule is invasive; nontypeable strains cause mucosal infections.",
    morphology: [
      "Gram− pleomorphic coccobacilli",
      "Requires factors V and X (chocolate agar)",
      "Type b polysaccharide capsule (invasive strains)",
    ],
    virulenceFactors: [
      "Polyribosylribitol phosphate (PRP) capsule — Hib antiphagocytic",
      "IgA protease",
      "Pili for mucosal attachment (nontypeable)",
    ],
    transmission: ["Respiratory droplets"],
    diseases: [
      "Epiglottitis (Hib — now rare with vaccination)",
      "Meningitis (Hib)",
      "Otitis media and sinusitis (nontypeable)",
      "Community-acquired pneumonia (especially COPD/elders)",
      "Purulent pericarditis",
    ],
    classicPresentation: [
      "Epiglottitis — drooling, tripod posture, stridor (medical emergency)",
      "Meningitis in unvaccinated child",
      "Otitis media after viral URI",
    ],
    diagnosis: [
      "Culture on chocolate agar",
      "Gram stain of epiglottic swab (look before intubation if safe)",
      "CSF culture in meningitis",
    ],
    treatment: [
      "Meningitis/epiglottitis: ceftriaxone or cefotaxime",
      "Otitis media: amoxicillin-clavulanate (β-lactamase producing strains common)",
      "Epiglottitis: secure airway first, then IV antibiotics",
    ],
    distinguishFrom: [
      "S. pneumoniae — Gram+ diplococci; otitis and meningitis overlap",
      "Bordetella pertussis — also requires special media; whooping cough",
      "Moraxella catarrhalis — otitis; produces β-lactamase",
    ],
    boardsPearls: [
      "Hib vaccine → epiglottitis and invasive Hib disease now rare in vaccinated children",
      "Epiglottitis — do not agitate child; OR for airway, not blind tongue depressor exam",
      "Nontypeable H. influenzae common in COPD exacerbations and otitis",
    ],
    pediatrics:
      "Hib conjugate vaccine at 2, 4, 6, 12–15 months; unvaccinated or immunocompromised children at highest risk for invasive disease.",
  },
  {
    id: "neisseria-meningitidis",
    name: "Neisseria meningitidis",
    aliases: [
      "neisseria meningitidis",
      "n. meningitidis",
      "meningococcus",
      "meningococcal",
      "meningococci",
    ],
    type: "gram-negative-cocci",
    definition:
      "Gram-negative diplococcus (kidney bean-shaped pairs); oxidase positive. Causes meningitis and rapidly progressive meningococcemia with purpura.",
    morphology: [
      "Gram− diplococci (coffee bean/kidney bean pairs)",
      "Oxidase positive",
      "Thayer-Martin selective media (VCN inhibitors)",
    ],
    virulenceFactors: [
      "Polysaccharide capsule — serogroups A, B, C, W, Y",
      "Lipooligosaccharide (LOS) endotoxin — shock, DIC",
      "IgA protease",
    ],
    transmission: [
      "Respiratory droplets",
      "Close contact in crowded settings (dorms, military)",
    ],
    diseases: [
      "Meningitis",
      "Meningococcemia with purpura/petechiae",
      "Waterhouse-Friderichsen syndrome (adrenal hemorrhage)",
      "Chronic meningococcemia",
    ],
    classicPresentation: [
      "Acute meningitis + non-blanching purpuric rash",
      "Rapid shock and DIC in meningococcemia",
      "Leg pain, cold extremities in early sepsis (children)",
    ],
    diagnosis: [
      "Gram stain/culture of CSF or blood",
      "Classic CSF Gram− diplococci intracellularly",
      "PCR and latex agglutination if culture negative post-antibiotics",
    ],
    treatment: [
      "Ceftriaxone or cefotaxime empirically for bacterial meningitis",
      "Close contacts: chemoprophylaxis (rifampin, ciprofloxacin, or ceftriaxone)",
      "Aggressive supportive care for shock/DIC",
    ],
    distinguishFrom: [
      "N. gonorrhoeae — same genus; sexually transmitted; also Gram− diplococci",
      "S. pneumoniae — Gram+ diplococci; meningitis overlap",
      "Rickettsia — rash and fever; treat with doxycycline",
    ],
    boardsPearls: [
      "Non-blanching rash + fever = meningococcemia until proven otherwise",
      "Chemoprophylaxis for close contacts mandatory",
      "Quadrivalent conjugate vaccine (ACWY) + MenB for adolescents/college",
    ],
    pediatrics:
      "Children <5 and adolescents 16–23 peak incidence; petechiae in febrile child requires urgent evaluation.",
  },
  {
    id: "clostridium-perfringens",
    name: "Clostridium perfringens",
    aliases: [
      "clostridium perfringens",
      "c. perfringens",
      "clostridium",
    ],
    type: "anaerobe",
    definition:
      "Gram-positive, spore-forming anaerobic rod. Produces α-toxin (lecithinase/phospholipase C) causing gas gangrene and a common form of food poisoning.",
    morphology: [
      "Gram+ rod (may Gram-variable in tissue)",
      "Spore-forming anaerobe",
      "Non-motile (vs C. tetani)",
      "Double zone hemolysis on blood agar",
    ],
    virulenceFactors: [
      "α-toxin (lecithinase) — myonecrosis, hemolysis",
      "θ-toxin (perfringolysin O)",
      "Enterotoxin — food poisoning (heat-labile, reheated meat)",
    ],
    transmission: [
      "Soil contamination of wounds",
      "Ingestion of reheated meat (food poisoning)",
    ],
    diseases: [
      "Gas gangrene (clostridial myonecrosis)",
      "Food poisoning (8–16 h incubation, self-limited)",
      "Necrotizing enteritis (rare; pigbel in Papua New Guinea)",
    ],
    classicPresentation: [
      "Crepitus, bronze skin, severe pain after traumatic wound (gas gangrene)",
      "Watery diarrhea + cramps after cafeteria/reheated meat (food poisoning)",
    ],
    diagnosis: [
      "Gram stain of wound — Gram+ rods, few WBCs (leukemoid reaction later)",
      "X-ray/CT — gas in tissues",
      "Food outbreak: short incubation, no fever/vomiting prominent",
    ],
    treatment: [
      "Gas gangrene: penicillin + clindamycin + urgent surgical debridement",
      "Hyperbaric oxygen adjunct for myonecrosis",
      "Food poisoning: supportive care only",
    ],
    distinguishFrom: [
      "C. difficile — antibiotic-associated colitis, toxin-mediated",
      "C. tetani — spastic paralysis, lockjaw; tetanospasmin",
      "C. botulinum — flaccid paralysis; preformed toxin in food",
    ],
    boardsPearls: [
      "α-toxin = lecithinase; destroys cell membranes → gas gangrene",
      "Surgical emergency — antibiotics alone insufficient for myonecrosis",
      "C. perfringens food poisoning: reheated meat, short incubation, no fever",
    ],
    pediatrics:
      "Pediatric gas gangrene rare; consider necrotizing fasciitis overlap in toxic-appearing child with extremity pain.",
  },
  {
    id: "mycobacterium-tuberculosis",
    name: "Mycobacterium tuberculosis",
    aliases: [
      "mycobacterium tuberculosis",
      "m. tuberculosis",
      "m tuberculosis",
      "tuberculosis",
      "tb",
      "tubercle bacillus",
    ],
    type: "acid-fast",
    definition:
      "Acid-fast, aerobic rod with mycolic acid-rich cell wall. Causes pulmonary and extrapulmonary tuberculosis; latent infection can reactivate.",
    morphology: [
      "Acid-fast bacilli (Ziehl-Neelsen/Kinyoun — red rods on blue background)",
      "Slow-growing; Lowenstein-Jensen or liquid culture",
      "Cannot Gram stain well (waxy envelope)",
    ],
    virulenceFactors: [
      "Mycolic acid/cord factor — granuloma formation",
      "Sulfatides — prevent phagosome-lysosome fusion",
      "Lipoarabinomannan — immunomodulatory",
    ],
    transmission: ["Airborne droplet nuclei from active pulmonary TB"],
    diseases: [
      "Primary pulmonary TB (Ghon focus + hilar LAD)",
      "Reactivation TB (upper lobe cavitary disease)",
      "Miliary TB",
      "Extrapulmonary: meningitis, Pott disease, adrenalitis",
    ],
    classicPresentation: [
      "Chronic cough, hemoptysis, night sweats, weight loss, fever",
      "Upper lobe cavitary infiltrate on CXR",
      "Meningitis — basilar, subacute, lymphocytic CSF",
    ],
    diagnosis: [
      "PPD/IGRA for latent infection",
      "AFB smear and culture (gold standard for active disease)",
      "Quantiferon/T-SPOT for latent (not active disease monitoring)",
      "CXR: upper lobe cavities, Ghon complex in primary",
    ],
    treatment: [
      "Active TB: RIPE (rifampin, isoniazid, pyrazinamide, ethambutol) × 2 months, then RI × 4 months",
      "Latent TB: isoniazid × 9 months or rifampin × 4 months",
      "Always check HIV; DOT recommended",
    ],
    distinguishFrom: [
      "M. avium complex — immunocompromised; non-tuberculous mycobacteria",
      "Nocardia — weakly acid-fast, filamentous; sulfonamide treatment",
      "Histoplasma — endemic fungi; intracellular yeasts in macrophages",
    ],
    boardsPearls: [
      "Acid-fast = mycolic acid in cell wall; red on Ziehl-Neelsen",
      "Isoniazid + rifampin — hepatotoxicity; pyridoxine with INH prevents neuropathy",
      "Ethambutol — optic neuritis (color vision); check before and during therapy",
    ],
    pediatrics:
      "Primary TB in children — hilar LAD, Ghon focus; may progress to miliary TB; BCG vaccinated infants have + PPD without active disease.",
  },
  {
    id: "treponema-pallidum",
    name: "Treponema pallidum",
    aliases: [
      "treponema pallidum",
      "t. pallidum",
      "syphilis",
      "spirochete syphilis",
    ],
    type: "spirochete",
    definition:
      "Spirochete causative agent of syphilis; cannot be cultured on routine media. Diagnosed by dark-field microscopy (primary chancre), serology, or CSF studies.",
    morphology: [
      "Spiral/spirochete — too thin for Gram stain",
      "Dark-field microscopy of chancre exudate",
      "Silver stain (Warthin-Starry) on biopsy",
    ],
    virulenceFactors: [
      "Outer membrane lacks LPS; few surface proteins",
      "Evades immune clearance → chronic stages",
    ],
    transmission: ["Sexual contact", "Vertical (congenital syphilis)"],
    diseases: [
      "Primary syphilis (painless chancre)",
      "Secondary syphilis (diffuse rash, condyloma lata)",
      "Latent and tertiary syphilis (gummas, tabes dorsalis, aortitis)",
      "Congenital syphilis",
      "Neurosyphilis",
    ],
    classicPresentation: [
      "Painless indurated chancre with clean base",
      "Palmar/plantar rash + lymphadenopathy (secondary)",
      "Argyl Robertson pupils, tabes dorsalis (tertiary/neuro)",
    ],
    diagnosis: [
      "Non-treponemal: RPR/VDRL (screen, track disease activity)",
      "Treponemal: FTA-ABS, TP-PA (confirmatory)",
      "Dark-field of chancre fluid (primary)",
      "CSF VDRL for neurosyphilis",
    ],
    treatment: [
      "Primary/secondary/latent early: benzathine penicillin G IM",
      "Neurosyphilis: IV penicillin G",
      "Penicillin allergy: desensitization (preferred in pregnancy)",
    ],
    distinguishFrom: [
      "Haemophilus ducreyi — painful chancroid",
      "Herpes simplex — painful grouped vesicles",
      "Lyme disease (Borrelia) — erythema migrans, different serology",
    ],
    boardsPearls: [
      "Painless chancre = syphilis until proven otherwise",
      "Jarisch-Herxheimer reaction after penicillin in early syphilis",
      "RPR/VDRL false positives: pregnancy, SLE, viral infections",
    ],
    pediatrics:
      "Congenital syphilis — saddle nose, saber shins, Hutchinson teeth, snuffles; treat mother and infant with penicillin.",
  },
  {
    id: "hiv",
    name: "Human Immunodeficiency Virus",
    aliases: [
      "human immunodeficiency virus",
      "hiv",
      "hiv-1",
      "hiv 1",
      "aids virus",
    ],
    type: "virus",
    definition:
      "Retrovirus (ssRNA) that infects CD4+ T cells and macrophages via CD4 and CCR5/CXCR4 co-receptors. Progressive immunodeficiency leads to AIDS and opportunistic infections.",
    morphology: [
      "Enveloped retrovirus; cone-shaped capsid",
      "Reverse transcriptase — RNA → DNA provirus",
      "Integrates into host genome (latent reservoir)",
    ],
    virulenceFactors: [
      "gp120/gp41 — CD4/CCR5 binding and fusion",
      "Tat, Rev — viral replication regulators",
      "High mutation rate (error-prone RT) → resistance and vaccine difficulty",
    ],
    transmission: [
      "Sexual contact",
      "Blood/blood products, needle sharing",
      "Vertical (perinatal)",
    ],
    diseases: [
      "Acute retroviral syndrome",
      "Chronic HIV infection",
      "AIDS (CD4 <200 or AIDS-defining illness)",
      "Opportunistic infections (PCP, toxoplasmosis, CMV, MAC, etc.)",
    ],
    classicPresentation: [
      "Mononucleosis-like illness 2–4 weeks post-exposure",
      "Oral thrush, weight loss, chronic diarrhea at low CD4",
      "PCP: dry cough, hypoxia, diffuse interstitial infiltrates (CD4 <200)",
    ],
    diagnosis: [
      "HIV-1/2 antigen/antibody combo assay (4th gen)",
      "HIV RNA viral load (acute infection, monitoring)",
      "CD4 count and % for staging and prophylaxis",
    ],
    treatment: [
      "ART: 2 NRTIs + INSTI (or other third agent) — treat all diagnosed patients",
      "Start ASAP; one pill daily regimens common",
      "Prophylaxis: TMP-SMX for PCP when CD4 <200",
    ],
    distinguishFrom: [
      "EBV/CMV acute mono-like illness — check HIV Ag/Ab and viral load",
      "HTLV-1 — also retrovirus; adult T-cell leukemia, myelopathy",
      "Primary immunodeficiency — early onset, family history",
    ],
    boardsPearls: [
      "CCR5 antagonist (maraviroc) only if tropism assay shows R5 virus",
      "Integrase inhibitors — weight gain side effect; excellent efficacy",
      "PrEP with tenofovir/emtricitabine for high-risk seronegative patients",
    ],
    pediatrics:
      "Vertical transmission reduced by maternal ART and zidovudine prophylaxis; breast-feeding counseling in resource-limited settings.",
  },
  {
    id: "candida-albicans",
    name: "Candida albicans",
    aliases: [
      "candida albicans",
      "c. albicans",
      "candida",
      "candidiasis",
    ],
    type: "fungus",
    definition:
      "Dimorphic fungus (yeast at 37°C, pseudohyphae in tissue). Normal flora that causes mucocutaneous and invasive disease in immunocompromised and antibiotic-disrupted hosts.",
    morphology: [
      "Gram+ yeast with pseudohyphae (Gram stain)",
      "Germ tube test positive (incubate in serum ~2 h)",
      "Creamy white colonies on agar",
    ],
    virulenceFactors: [
      "Adhesins (ALS family)",
      "Biofilm formation (catheters, prosthetics)",
      "Phenotypic switching",
      "Secreted aspartyl proteases",
    ],
    transmission: ["Endogenous overgrowth", "Direct contact (mucocutaneous)"],
    diseases: [
      "Oral thrush",
      "Esophageal candidiasis (HIV, immunosuppression)",
      "Vulvovaginal candidiasis",
      "Candidemia and invasive candidiasis",
      "Chronic mucocutaneous candidiasis (immunodeficiency)",
    ],
    classicPresentation: [
      "White plaques on buccal mucosa/tongue that scrape off (thrush)",
      "Odynophagia in esophageal candidiasis",
      "Curdy vaginal discharge with pruritus",
    ],
    diagnosis: [
      "KOH prep or Gram stain — yeast and pseudohyphae",
      "Germ tube test",
      "Blood cultures in candidemia (may need multiple sets)",
    ],
    treatment: [
      "Mucocutaneous: nystatin, clotrimazole, fluconazole",
      "Esophageal/invasive: fluconazole; echinocandin if severe or azole-resistant",
      "Candidemia: echinocandin first line; remove central lines",
    ],
    distinguishFrom: [
      "Oral hairy leukoplakia (EBV) — lateral tongue, does not scrape off",
      "Cryptococcus — encapsulated yeast in CSF; India ink",
      "Aspergillus — septate hyphae, angioinvasion; not yeast forms in tissue",
    ],
    boardsPearls: [
      "Germ tube+ at 37°C = C. albicans (rapid ID)",
      "Fluconazole prophylaxis only in select high-risk neutropenia — resistance concerns",
      "Echinocandins (caspofungin) for serious invasive disease",
    ],
    pediatrics:
      "Neonatal thrush common; check for diaper candidiasis; consider immunodeficiency if chronic mucocutaneous candidiasis.",
  },
  {
    id: "cryptococcus-neoformans",
    name: "Cryptococcus neoformans",
    aliases: [
      "cryptococcus neoformans",
      "cryptococcus",
      "cryptococcal",
    ],
    type: "fungus",
    definition:
      "Encapsulated yeast found in pigeon droppings and soil. Causes meningitis (especially HIV/AIDS) and pulmonary cryptococcosis.",
    morphology: [
      "Encapsulated yeast (mucicarmine or India ink highlights capsule)",
      "Narrow-based budding",
      "Urease positive",
      "Not dimorphic (unlike Histoplasma/Blastomyces)",
    ],
    virulenceFactors: [
      "Polysaccharide capsule — antiphagocytic; antigen detectable in CSF/serum",
      "Melanin production (phenoloxidase)",
      "Laccase",
    ],
    transmission: ["Inhalation of environmental yeast/spores"],
    diseases: [
      "Cryptococcal meningitis",
      "Cryptococcal pneumonia",
      "Disseminated disease in immunocompromised",
    ],
    classicPresentation: [
      "Subacute headache, fever, altered mental status in AIDS (CD4 low)",
      "↑ opening pressure on LP",
      "Pulmonary nodules in immunocompetent hosts",
    ],
    diagnosis: [
      "CSF India ink — encapsulated yeast",
      "Cryptococcal antigen (CSF/serum) — highly sensitive",
      "Culture on Sabouraud agar",
    ],
    treatment: [
      "Induction: amphotericin B + flucytosine × 2 weeks",
      "Consolidation/maintenance: fluconazole (long course in HIV)",
      "Serial LP for elevated ICP",
    ],
    distinguishFrom: [
      "Candida — pseudohyphae; not typically meningitis in same pattern",
      "Coccidioides — spherules in tissue; endemic Southwest",
      "Histoplasma — intracellular in macrophages; endemic Ohio/Mississippi valleys",
    ],
    boardsPearls: [
      "India ink and cryptococcal antigen in CSF — think AIDS + meningitis",
      "Amphotericin + flucytosine induction; fluconazole maintenance",
      "Elevated ICP management critical — repeat LPs or shunt",
    ],
    pediatrics:
      "Pediatric cryptococcal meningitis rare outside severe immunosuppression; consider HIV, T-cell defects.",
  },
  {
    id: "plasmodium-falciparum",
    name: "Plasmodium falciparum",
    aliases: [
      "plasmodium falciparum",
      "p. falciparum",
      "falciparum malaria",
      "malaria",
      "cerebral malaria",
    ],
    type: "parasite",
    definition:
      "Most virulent malaria species; transmitted by Anopheles mosquito. Ring forms may show headphone/applique appearance; sequesters in microvasculature causing cerebral malaria and severe disease.",
    morphology: [
      "Giemsa-stained thin smear — ring forms, trophozoites, schizonts, gametocytes",
      "Multiple rings per RBC; banana-shaped gametocytes (P. falciparum only)",
      "Applique/headphone ring forms at RBC periphery",
    ],
    virulenceFactors: [
      "PfEMP1 — cytoadherence to endothelium (sequestration)",
      "RBC rosetting",
      "High parasitemia without spleen clearance in naïve hosts",
    ],
    transmission: ["Anopheles mosquito bite", "Blood transfusion, vertical (rare)"],
    diseases: [
      "Uncomplicated malaria",
      "Severe/cerebral malaria",
      "Blackwater fever (hemolysis, hemoglobinuria)",
      "Maternal/fetal complications in pregnancy",
    ],
    classicPresentation: [
      "Cyclical fever, chills, sweats (may be irregular in falciparum)",
      "Travel to/endemic area without prophylaxis",
      "Altered mental status, seizures (cerebral malaria)",
      "Jaundice, anemia, thrombocytopenia",
    ],
    diagnosis: [
      "Thick and thin Giemsa blood smears (gold standard)",
      "Rapid diagnostic tests (HRP2, pLDH)",
      "Repeat smears if initial negative but suspicion high",
    ],
    treatment: [
      "Uncomplicated: artemisinin-based combination therapy (ACT)",
      "Severe: IV artesunate (preferred over quinine in US)",
      "Add doxycycline/clindamycin per guidelines",
    ],
    distinguishFrom: [
      "P. vivax/ovale — hypnozoites (relapse); require primaquine",
      "P. malariae — band forms; low parasitemia",
      "Babesia — similar rings; US Northeast; maltese cross; no travel to tropics",
    ],
    boardsPearls: [
      "P. falciparum only species with banana gametocytes",
      "Cerebral malaria = P. falciparum emergency; IV artesunate",
      "Sickle cell trait confers partial protection against falciparum",
    ],
    pediatrics:
      "Children in endemic areas bear highest mortality; cerebral malaria presents with seizures and coma; hypoglycemia common.",
  },
  {
    id: "giardia-lamblia",
    name: "Giardia lamblia",
    aliases: [
      "giardia lamblia",
      "giardia",
      "giardiasis",
      "g. lamblia",
    ],
    type: "parasite",
    definition:
      "Flagellated protozoan with trophozoite and cyst forms. Causes foul-smelling fatty diarrhea after ingestion of cysts from contaminated water.",
    morphology: [
      "Trophozoites — pear-shaped with two nuclei (face-like)",
      "Cysts — oval with 4 nuclei mature",
      "Seen in stool O&P or antigen assay",
    ],
    virulenceFactors: [
      "Adherence disc (ventral sucking disk)",
      "Cyst wall survives chlorination better than many bacteria",
    ],
    transmission: [
      "Fecal-oral (contaminated water — camping, daycare)",
      "Person-to-person (daycare, MSM)",
    ],
    diseases: ["Giardiasis — malabsorptive diarrhea"],
    classicPresentation: [
      "Foul-smelling, greasy/fatty stools (steatorrhea)",
      "Bloating, flatulence, no blood",
      "Daycare outbreak or wilderness water exposure",
    ],
    diagnosis: [
      "Stool antigen (ELISA) — preferred",
      "O&P for cysts/trophozoites (may need repeated samples)",
      "String test (duodenal) rarely needed",
    ],
    treatment: [
      "Metronidazole or tinidazole",
      "Nitazoxanide (alternative)",
    ],
    distinguishFrom: [
      "Cryptosporidium — acid-fast oocysts; waterborne; AIDS chronic diarrhea",
      "Entamoeba histolytica — bloody diarrhea, liver abscess",
      "Celiac disease — chronic malabsorption; serology and biopsy",
    ],
    boardsPearls: [
      "Fatty foul stools + camping = Giardia",
      "Does not invade bloodstream — no eosinophilia",
      "Trophozoite has two nuclei — 'clown face' on microscopy",
    ],
    pediatrics:
      "Common daycare pathogen; may cause failure to thrive with chronic infection; treat household contacts if symptomatic.",
  },
];

const microbiologyById = new Map(
  MICROBIOLOGY.map((entry) => [entry.id, entry]),
);

export function getMicrobiologyById(
  id: string,
): MicrobiologyEntry | undefined {
  return microbiologyById.get(id);
}

export interface MicrobiologyAliasMatch {
  alias: string;
  microbiologyId: string;
}

export function buildMicrobiologyAliasIndex(): MicrobiologyAliasMatch[] {
  const matches: MicrobiologyAliasMatch[] = [];
  for (const entry of MICROBIOLOGY) {
    for (const alias of entry.aliases) {
      matches.push({
        alias: alias.toLowerCase(),
        microbiologyId: entry.id,
      });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
