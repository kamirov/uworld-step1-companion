export interface EcgFindingEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  interpretation: string;
  territory: string;
  thinkOf: string[];
  distinguishFrom?: string[];
  boardsPearls: string[];
  pediatrics?: string;
}

export const ECG_FINDINGS: EcgFindingEntry[] = [
  {
    id: "inferior-stemi",
    name: "Inferior STEMI (II, III, aVF)",
    etymology: "inferior = lower wall + ST = ECG ST segment + elevation = raised + MI = myocardial infarction",
    aliases: [
      "st-segment elevation in leads ii, iii, and avf",
      "st elevation in leads ii, iii, and avf",
      "st-segment elevation in leads ii, iii, avf",
      "st elevation in leads ii, iii, avf",
      "st-segment elevation in ii, iii, and avf",
      "st elevation in ii, iii, and avf",
    ],
    interpretation:
      "ST-segment elevation in leads II, III, and aVF indicates acute transmural ischemia of the inferior wall — a STEMI pattern requiring urgent reperfusion.",
    territory:
      "Inferior wall — usually right coronary artery (RCA) in right-dominant circulation; circumflex if left-dominant.",
    thinkOf: [
      "Inferior MI (RCA occlusion most common)",
      "Reciprocal ST depression in I and aVL",
      "Bradycardia, AV block (RCA supplies AV node)",
      "RV infarction if ST elevation in V4R (hypotension, JVD, clear lungs)",
    ],
    distinguishFrom: [
      "Pericarditis — diffuse ST elevation with PR depression, not regional",
      "Early repolarization — concave ST elevation, young healthy patients",
      "Brugada — RBBB pattern with ST elevation in V1–V3",
    ],
    boardsPearls: [
      "II, III, aVF = inferior territory → think RCA",
      "Inferior MI + hypotension → check V4R for RV infarct; avoid nitrates/diuretics",
      "Contiguous lead ST elevation defines STEMI territory",
    ],
    pediatrics:
      "Same lead-territory mapping; Kawasaki coronary aneurysm can present with MI patterns in children.",
  },
  {
    id: "electrical-alternans",
    name: "Electrical Alternans",
    etymology: "electrical = cardiac voltage + Latin alternare = alternate",
    aliases: [
      "electrical alternans",
      "qrs alternans",
      "p wave alternans",
    ],
    interpretation:
      "Beat-to-beat alternation in QRS (or P wave) amplitude on ECG, classically from the heart swinging within a large pericardial effusion.",
    territory:
      "Not territorial — global ECG pattern; most often seen in pericardial effusion with tamponade physiology.",
    thinkOf: [
      "Cardiac tamponade with large pericardial effusion",
      "Pericardial effusion (malignancy, viral, uremic, post-MI hemopericardium)",
      "Pair with Beck triad and pulsus paradoxus",
      "Low-voltage QRS may coexist in effusion",
    ],
    distinguishFrom: [
      "Respiratory variation in QRS amplitude — not true beat-to-beat alternans",
      "Ventricular bigeminy — alternating normal and ectopic beats, not smooth amplitude cycling",
      "Pericarditis without effusion — diffuse ST elevation, usually no alternans",
      "Regional STEMI — territorial ST elevation, not alternating QRS amplitude",
    ],
    boardsPearls: [
      "Electrical alternans = swinging heart in large pericardial effusion",
      "Classic tamponade ECG clue alongside low voltage and tachycardia",
      "Tamponade: alternans + JVD + muffled heart sounds + pulsus paradoxus",
      "Echo confirms effusion with RA/RV diastolic collapse — urgent pericardiocentesis",
    ],
    pediatrics:
      "Same association with large effusions in children; bacterial pericarditis or post-surgical effusion can present with alternans and shock.",
  },
  {
    id: "absent-p-waves",
    name: "Absent P Waves",
    etymology: "Latin ab = away + praesens = being before + absent = not present",
    aliases: [
      "absent p waves",
      "absent p wave",
      "no p waves",
      "no p wave",
      "p waves absent",
      "p wave absent",
      "loss of p waves",
      "atrial activity absent on ecg",
    ],
    interpretation:
      "No discernible atrial depolarization waves before QRS complexes, indicating rhythm not driven by normal sinus node P-wave activity.",
    territory:
      "Not territorial — rhythm diagnosis pattern; evaluate rate and QRS width to classify arrhythmia.",
    thinkOf: [
      "Atrial fibrillation — irregularly irregular, fibrillatory baseline, no discrete P waves",
      "Junctional or accelerated junctional rhythm — narrow QRS without preceding P waves",
      "Sinoatrial arrest with junctional escape",
      "Hyperkalemia — may flatten or obscure P waves",
      "Lead misplacement or low-amplitude atrial activity (less common)",
    ],
    distinguishFrom: [
      "P waves buried in QRS or T wave — retrograde P waves in junctional rhythm may be hidden",
      "Flutter waves — sawtooth F waves present, not truly absent atrial activity",
      "Sinus rhythm — upright P before each QRS in lead II",
      "PVC with nonconducted P wave — intermittent, not global absence",
    ],
    boardsPearls: [
      "Absent P waves + irregularly irregular + narrow QRS → atrial fibrillation",
      "AF: no P waves, variable RR intervals, risk of thromboembolism → anticoagulate by CHA₂DS₂-VASc",
      "Junctional rhythm: absent P waves, regular narrow QRS, rate ~40–60",
      "Always check for fibrillatory waves vs flat baseline in AF",
      "vs sinus arrhythmia — P waves present but RR varies with respiration",
    ],
    pediatrics:
      "Supraventricular tachycardia in infants may show absent or abnormal P waves; narrow-complex tachycardia with rate >220 in infant warrants urgent cardioversion/adenosine pathway.",
  },
];

const ecgFindingById = new Map(ECG_FINDINGS.map((entry) => [entry.id, entry]));

export function getEcgFindingById(id: string): EcgFindingEntry | undefined {
  return ecgFindingById.get(id);
}

export interface EcgFindingAliasMatch {
  alias: string;
  ecgFindingId: string;
}

export function buildEcgFindingAliasIndex(): EcgFindingAliasMatch[] {
  const matches: EcgFindingAliasMatch[] = [];
  for (const entry of ECG_FINDINGS) {
    for (const alias of entry.aliases) {
      matches.push({ alias: alias.toLowerCase(), ecgFindingId: entry.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
