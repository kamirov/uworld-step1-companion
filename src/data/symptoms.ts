export interface SymptomEntry {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  mechanism: string;
  thinkOf: string[];
  pairWith: string[];
  distinguishFrom?: string[];
}

export const SYMPTOMS: SymptomEntry[] = [
  {
    id: "exertional-dyspnea",
    name: "Exertional Dyspnea",
    aliases: ["exertional dyspnea"],
    definition:
      "Shortness of breath triggered by physical activity that was previously tolerated.",
    mechanism:
      "Exercise increases cardiac output and O₂ demand; dyspnea appears when CO, O₂ delivery, or gas exchange cannot keep pace.",
    thinkOf: [
      "Heart failure",
      "Coronary artery disease / ischemia",
      "Aortic stenosis",
      "Mitral regurgitation",
      "Pulmonary hypertension",
      "COPD / interstitial lung disease",
      "Anemia",
      "Deconditioning or obesity",
    ],
    pairWith: [
      "Chest pain → ischemia",
      "Syncope with exertion → aortic stenosis",
      "Orthopnea or PND → left heart failure",
      "Wheezing → asthma vs cardiac asthma",
      "Peripheral edema → volume overload",
    ],
    distinguishFrom: [
      "Orthopnea — dyspnea when lying flat",
      "PND — abrupt dyspnea waking patient from sleep",
      "Resting dyspnea — suggests more severe cardiopulmonary disease",
    ],
  },
  {
    id: "shortness-of-breath",
    name: "Shortness of Breath",
    aliases: ["shortness of breath", "dyspnea"],
    definition:
      "Subjective sensation of uncomfortable or inadequate breathing (dyspnea), at rest or with activity.",
    mechanism:
      "Arises when ventilatory demand exceeds capacity, when chemoreceptors sense hypoxemia or hypercapnia, or when J-receptors detect pulmonary congestion or microatelectasis.",
    thinkOf: [
      "Heart failure",
      "COPD / asthma",
      "Pulmonary embolism",
      "Pneumonia",
      "Anemia",
      "Metabolic acidosis (DKA, sepsis)",
      "Anxiety / hyperventilation",
    ],
    pairWith: [
      "Exertional onset → cardiac or pulmonary limitation",
      "Orthopnea or PND → left heart failure",
      "Pleuritic pain, hypoxia → PE",
      "Wheezing → obstructive lung disease",
      "Tachypnea with acidosis → Kussmaul breathing",
    ],
    distinguishFrom: [
      "Exertional dyspnea — specifically triggered by activity",
      "Tachypnea — increased rate without subjective air hunger",
      "Hyperventilation — low PaCO₂, often anxiety or acidosis compensation",
    ],
  },
  {
    id: "easy-fatigability",
    name: "Easy Fatigability",
    aliases: ["easy fatigability"],
    definition:
      "Disproportionate tiredness or exhaustion with ordinary activity that was previously well tolerated.",
    mechanism:
      "Reduced O₂ delivery (low CO, anemia), impaired O₂ utilization (mitochondrial disease, hypothyroidism), deconditioning, or increased metabolic demand can all lower exercise tolerance.",
    thinkOf: [
      "Anemia",
      "Heart failure",
      "Hypothyroidism",
      "Chronic kidney disease",
      "Mitral regurgitation",
      "Depression / chronic fatigue",
      "Deconditioning",
    ],
    pairWith: [
      "Dyspnea on exertion → cardiac or pulmonary cause",
      "Pallor, tachycardia → anemia",
      "Weight gain, cold intolerance → hypothyroidism",
      "Elevated JVP, edema → heart failure",
      "Low mood, sleep disturbance → depression",
    ],
    distinguishFrom: [
      "Exertional dyspnea — primary complaint is breathlessness, not fatigue",
      "Muscle weakness — difficulty generating force, not general tiredness",
      "Daytime sleepiness → consider sleep apnea or narcolepsy",
    ],
  },
  {
    id: "orthopnea",
    name: "Orthopnea",
    aliases: ["orthopnea"],
    definition:
      "Dyspnea that develops or worsens when lying flat, relieved by sitting or standing.",
    mechanism:
      "Recumbency redistributes fluid to the pulmonary circulation and increases venous return, raising pulmonary capillary pressure in a failing left ventricle.",
    thinkOf: [
      "Left-sided heart failure",
      "Volume overload",
      "Severe mitral regurgitation",
      "Advanced COPD (less classic)",
    ],
    pairWith: [
      "PND → classic LV failure pattern",
      "Peripheral edema, S3 → systolic HF",
      "Paroxysmal cough or frothy sputum → pulmonary edema",
      "Number of pillows used → severity marker",
    ],
    distinguishFrom: [
      "PND — occurs after sleep onset, not immediately on lying down",
      "Exertional dyspnea — triggered by activity, not position",
    ],
  },
  {
    id: "pnd",
    name: "Paroxysmal Nocturnal Dyspnea (PND)",
    aliases: ["paroxysmal nocturnal dyspnea", "pnd"],
    definition:
      "Sudden episodes of dyspnea that awaken the patient from sleep, often with a sensation of suffocation.",
    mechanism:
      "After hours supine, fluid shifts and increased venous return raise LV filling pressures; compensatory sympathetic surge worsens afterload and precipitates pulmonary edema.",
    thinkOf: [
      "Left ventricular failure",
      "Ischemic cardiomyopathy",
      "Hypertensive heart disease",
      "Mitral regurgitation",
    ],
    pairWith: [
      "Orthopnea → bilateral LV failure",
      "S3 gallop, crackles → pulmonary congestion",
      "Elevated JVP, edema → volume overload",
      "History of MI or hypertension",
    ],
    distinguishFrom: [
      "Orthopnea — present when lying down, not specifically after sleep",
      "Nocturnal asthma — wheeze, allergic history, less crackles",
      "Sleep apnea — snoring, daytime somnolence, not frothy edema",
    ],
  },
  {
    id: "pleuritic-chest-pain",
    name: "Pleuritic Chest Pain",
    aliases: ["pleuritic chest pain", "pleuritic pain"],
    definition:
      "Sharp chest pain that worsens with inspiration or coughing due to pleural irritation.",
    mechanism:
      "Inflammation of the parietal pleura (which is innervated) produces localized pain accentuated by chest wall movement.",
    thinkOf: [
      "Pulmonary embolism",
      "Pneumonia / pleurisy",
      "Pneumothorax",
      "Pericarditis (can be pleuritic)",
      "Viral pleuritis",
    ],
    pairWith: [
      "Tachycardia, hypoxia, immobilization → PE",
      "Fever, cough, infiltrate → pneumonia",
      "Sudden unilateral dyspnea, diminished breath sounds → pneumothorax",
      "Positional relief sitting forward → pericarditis",
    ],
    distinguishFrom: [
      "Pressure-like pain with exertion → angina",
      "Tearing pain radiating to the back → aortic dissection",
      "Reproducible with palpation → musculoskeletal",
    ],
  },
  {
    id: "tearing-chest-pain",
    name: "Tearing Chest Pain",
    aliases: ["tearing chest pain", "tearing pain"],
    definition:
      "Sudden, severe chest pain described as ripping or tearing, often maximal at onset.",
    mechanism:
      "Intimal tear in the aorta with dissection creates a false lumen; pain reflects acute aortic wall separation.",
    thinkOf: [
      "Aortic dissection",
      "Aortic rupture",
    ],
    pairWith: [
      "Hypertension or connective tissue disease (Marfan, Ehlers-Danlos)",
      "Pulse or BP differential between arms",
      "Widened mediastinum on CXR",
      "Neurologic deficits → branch vessel compromise",
    ],
    distinguishFrom: [
      "Pleuritic pain — worse with breathing, not classic ripping radiation",
      "STEMI — crushing pressure, not tearing to the back",
      "PE — pleuritic, tachycardic, hypoxic without pulse deficit",
    ],
  },
  {
    id: "syncope",
    name: "Syncope",
    aliases: ["syncope"],
    definition:
      "Transient loss of consciousness due to global cerebral hypoperfusion, with rapid spontaneous recovery.",
    mechanism:
      "A sudden drop in cardiac output or systemic vascular resistance reduces cerebral blood flow below the level needed to maintain awareness.",
    thinkOf: [
      "Vasovagal (neurally mediated)",
      "Orthostatic hypotension",
      "Cardiac arrhythmia",
      "Aortic stenosis",
      "Pulmonary embolism",
      "Subclavian steal",
    ],
    pairWith: [
      "Exertional → aortic stenosis or HOCM",
      "Palpitations or known heart disease → arrhythmia",
      "Prolonged standing, prodrome → vasovagal",
      "Positional change, antihypertensives → orthostatic",
      "Chest pain, dyspnea, hypoxia → PE",
    ],
    distinguishFrom: [
      "Presyncope — same mechanism, no complete LOC",
      "Seizure — postictal state, tongue biting, prolonged confusion",
      "Hypoglycemia — diaphoresis, responds to glucose",
    ],
  },
  {
    id: "presyncope",
    name: "Presyncope",
    aliases: ["presyncope", "pre-syncope"],
    definition:
      "Sensation of imminent faint (lightheadedness, weakness, visual changes) without full loss of consciousness.",
    mechanism:
      "Same cerebral hypoperfusion as syncope, but perfusion recovers before consciousness is fully lost.",
    thinkOf: [
      "Vasovagal",
      "Orthostatic hypotension",
      "Arrhythmia",
      "Volume depletion",
      "Carotid sinus hypersensitivity",
    ],
    pairWith: [
      "Medications (antihypertensives, diuretics)",
      "Dehydration, bleeding",
      "Palpitations → arrhythmia workup",
      "Positional symptoms → orthostatic vitals",
    ],
    distinguishFrom: [
      "Syncope — complete LOC",
      "Vertigo — spinning sensation, usually inner ear",
      "Anxiety / hyperventilation — paresthesias, situational",
    ],
  },
  {
    id: "cyanosis",
    name: "Cyanosis",
    aliases: ["cyanosis"],
    definition:
      "Bluish discoloration of skin or mucous membranes from increased deoxygenated hemoglobin in capillaries.",
    mechanism:
      "Visible when reduced (deoxygenated) Hb ≥ ~5 g/dL in capillaries; reflects hypoxemia, poor perfusion, or abnormal hemoglobin.",
    thinkOf: [
      "Right-to-left shunt (congenital heart disease, Eisenmenger)",
      "Severe lung disease (COPD, ARDS)",
      "Pulmonary embolism",
      "Methemoglobinemia",
      "Cold exposure / peripheral vasoconstriction",
    ],
    pairWith: [
      "Clubbing → chronic hypoxemia (CF, congenital heart disease)",
      "Polycythemia → chronic hypoxic drive",
      "Chocolate-colored blood → methemoglobinemia",
      "Differential cyanosis → PDA with R→L shunt",
    ],
    distinguishFrom: [
      "Central cyanosis — lips/tongue (hypoxemia or abnormal Hb)",
      "Peripheral cyanosis — cool extremities (low flow, not always hypoxemia)",
      "Acrocyanosis of newborn — benign peripheral cyanosis",
    ],
  },
  {
    id: "clubbing",
    name: "Clubbing",
    aliases: ["clubbing", "digital clubbing"],
    definition:
      "Bulbous enlargement of the distal digits with loss of the normal nail-bed angle.",
    mechanism:
      "Chronic platelet activation and growth factor release (often from intrapulmonary shunting) stimulate connective tissue proliferation at the nail bed.",
    thinkOf: [
      "Cystic fibrosis",
      "Bronchiectasis",
      "Lung cancer (non-small cell)",
      "Idiopathic pulmonary fibrosis",
      "Cyanotic congenital heart disease",
      "Inflammatory bowel disease",
    ],
    pairWith: [
      "Cyanosis → congenital heart disease",
      "Chronic cough, sputum → bronchiectasis / CF",
      "Weight loss, smoking → lung malignancy",
      "GI symptoms → IBD-associated clubbing",
    ],
    distinguishFrom: [
      "Nail hypertrophy without loss of Lovibond angle → pseudo-clubbing",
      "Acute clubbing is rare — think chronic process",
    ],
  },
  {
    id: "jaundice",
    name: "Jaundice",
    aliases: ["jaundice"],
    definition:
      "Yellow discoloration of skin and sclera from accumulation of bilirubin.",
    mechanism:
      "Hyperbilirubinemia deposits in tissues; may arise from increased production, hepatocellular dysfunction, or biliary obstruction.",
    thinkOf: [
      "Hemolysis (unconjugated)",
      "Hepatitis, cirrhosis (mixed/hepatocellular)",
      "Choledocholithiasis, pancreatic cancer (conjugated / obstructive)",
      "Gilbert syndrome (mild unconjugated)",
    ],
    pairWith: [
      "Dark urine, pale stools → obstructive pattern",
      "Pruritus → cholestasis",
      "RUQ pain, fever, hypotension → cholangitis",
      "AST/ALT >> alk phos → hepatocellular",
      "Alk phos ↑, GGT ↑ → cholestatic",
    ],
    distinguishFrom: [
      "Carotenemia — orange skin, sclera spared",
      "Prehepatic vs hepatic vs posthepatic — use fractionated bilirubin",
    ],
  },
  {
    id: "pruritus",
    name: "Pruritus",
    aliases: ["pruritus"],
    definition:
      "An unpleasant sensation provoking the urge to scratch, without primary skin lesions required.",
    mechanism:
      "Mediated by histamine, bile salts, opioids, and other pruritogens; cholestatic bile salt deposition is a classic cause of generalized itch.",
    thinkOf: [
      "Cholestasis (biliary obstruction, primary biliary cholangitis)",
      "Chronic kidney disease / uremia",
      "Iron deficiency",
      "Polycythemia vera",
      "Scabies, atopic dermatitis",
      "Medications (opioids)",
    ],
    pairWith: [
      "Jaundice → cholestatic liver disease",
      "Burrowing tracks → scabies",
      "Aquagenic itch after hot shower → polycythemia vera",
      "Elevated creatinine → uremic pruritus",
    ],
    distinguishFrom: [
      "Localized itch with rash → primary dermatologic condition",
      "Generalized itch without rash → systemic cause (cholestasis, CKD, hematologic)",
    ],
  },
  {
    id: "hemoptysis",
    name: "Hemoptysis",
    aliases: ["hemoptysis"],
    definition:
      "Coughing up blood or blood-streaked sputum originating from the lower respiratory tract.",
    mechanism:
      "Bleeding from bronchial or pulmonary vasculature, often from infection, malignancy, or elevated pulmonary pressures eroding airways.",
    thinkOf: [
      "Bronchiectasis",
      "Tuberculosis",
      "Lung cancer",
      "Pulmonary embolism / infarction",
      "Mitral stenosis (pulmonary venous hypertension)",
      "Goodpasture / granulomatosis with polyangiitis",
    ],
    pairWith: [
      "Fever, night sweats, weight loss → TB or malignancy",
      "Recurrent infections, copious sputum → bronchiectasis / CF",
      "Hematuria → pulmonary-renal syndrome",
      "Diastolic rumble, AF → mitral stenosis",
    ],
    distinguishFrom: [
      "Hematemesis — coffee-ground or acidic, history of vomiting",
      "Epistaxis with posterior drip — bleeding from nose",
      "True hemoptysis is frothy and bright red",
    ],
  },
  {
    id: "melena",
    name: "Melena",
    aliases: ["melena"],
    definition:
      "Black, tarry stools from digested blood, typically indicating upper GI bleeding.",
    mechanism:
      "Hemoglobin is broken down by gastric acid and intestinal bacteria into hematin, producing dark, sticky, malodorous stool.",
    thinkOf: [
      "Peptic ulcer disease",
      "Esophageal varices",
      "Mallory-Weiss tear",
      "Gastritis (NSAIDs, alcohol)",
      "Malignancy (gastric, esophageal)",
    ],
    pairWith: [
      "Hematemesis → active upper GI bleed",
      "NSAID or alcohol use → PUD / gastritis",
      "Cirrhosis, jaundice → varices",
      "Lightheadedness, tachycardia → hemodynamic instability",
    ],
    distinguishFrom: [
      "Hematochezia — bright red blood per rectum, often lower GI",
      "Iron supplements or bismuth — black stool but not tarry / malodorous",
    ],
  },
  {
    id: "hematochezia",
    name: "Hematochezia",
    aliases: ["hematochezia"],
    definition:
      "Passage of bright red blood per rectum, usually from lower GI bleeding but can occur with rapid upper GI bleeding.",
    mechanism:
      "Fresh blood passes through the colon when bleeding is distal (or massive and rapid from proximal sources).",
    thinkOf: [
      "Hemorrhoids",
      "Anal fissure",
      "Diverticulosis",
      "Ischemic colitis",
      "Inflammatory bowel disease",
      "Colorectal cancer",
      "Angiodysplasia",
    ],
    pairWith: [
      "Painful defecation, tear at anus → fissure",
      "Painless bleeding → hemorrhoids or diverticulosis",
      "Age >50, weight loss → colorectal cancer",
      "Hypotension with maroon stools → brisk upper GI bleed",
    ],
    distinguishFrom: [
      "Melena — black, tarry upper GI bleed",
      "Hematuria — blood from urinary tract",
    ],
  },
];

const symptomById = new Map(SYMPTOMS.map((s) => [s.id, s]));

export function getSymptomById(id: string): SymptomEntry | undefined {
  return symptomById.get(id);
}

export interface SymptomAliasMatch {
  alias: string;
  symptomId: string;
}

export function buildSymptomAliasIndex(): SymptomAliasMatch[] {
  const matches: SymptomAliasMatch[] = [];
  for (const symptom of SYMPTOMS) {
    for (const alias of symptom.aliases) {
      matches.push({ alias: alias.toLowerCase(), symptomId: symptom.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
