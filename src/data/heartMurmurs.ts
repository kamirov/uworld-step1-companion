export interface HeartMurmurEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  meaning: string;
  conditions: string[];
  pediatrics?: string;
}

export const HEART_MURMURS: HeartMurmurEntry[] = [
  {
    id: "crescendo-decrescendo",
    name: "Systolic Crescendo-Decrescendo Murmur",
    etymology: "Greek systole = contraction + Italian crescendo = growing + decrescendo = decreasing + Latin murmur = hum",
    aliases: [
      "systolic crescendo-decrescendo murmur",
      "crescendo-decrescendo murmur",
      "crescendo decrescendo murmur",
      "crescendo-decrescendo systolic murmur",
    ],
    meaning:
      "Diamond-shaped systolic murmur that rises in intensity to mid-systole, then falls — classic ejection murmur from turbulent flow across a stenotic semilunar valve or narrowed outflow tract.",
    conditions: [
      "Aortic stenosis: harsh at RUSB, radiates to carotids, ↓ with Valsalva",
      "Pulmonic stenosis: LUSB, congenital (e.g., ToF); may have ejection click",
      "Physiologic flow murmurs can be soft crescendo-decrescendo in children",
    ],
    pediatrics:
      "Pulmonic stenosis/ToF common congenital cause; calcific AS murmur usually presents later in life.",
  },
  {
    id: "diastolic-rumble",
    name: "Diastolic Rumble",
    etymology: "Greek diastole = dilation/filling + rumble = low rolling sound",
    aliases: [
      "diastolic rumble",
      "rumbling diastolic murmur",
      "low-pitched diastolic rumble",
    ],
    meaning:
      "Low-pitched, rumbling diastolic murmur from turbulent flow across a stenotic AV valve; often follows an opening snap in mitral stenosis.",
    conditions: [
      "Mitral stenosis: apex, after opening snap, ↑ with exercise (↑ flow)",
      "Tricuspid stenosis: lower left sternal border (rare)",
      "Carey-Coombs murmur: mid-diastolic rumble in acute rheumatic fever",
    ],
    pediatrics:
      "Rheumatic MS less common in the US today; still a classic boards descriptor for valve pathology.",
  },
  {
    id: "ejection-click",
    name: "Systolic Ejection Click",
    etymology: "Greek systole = contraction + Latin eicere = throw out + click = sharp sound",
    aliases: [
      "systolic ejection click",
      "ejection click",
      "systolic ejection sound",
      "bicuspid aortic valve",
      "bicuspid aortic valve click",
    ],
    meaning:
      "Brief, high-pitched early systolic sound from abrupt opening of a stenotic semilunar valve or rapid distention of a dilated aorta/pulmonary artery; best heard with the diaphragm.",
    conditions: [
      "Aortic: AS or bicuspid AV at RUSB/apex; does not vary with respiration",
      "Pulmonic: PS at LUSB; often ↓ or merges with S1 during inspiration",
      "Dilated great vessels (e.g., pulmonary hypertension)",
    ],
    pediatrics:
      "Pulmonic ejection click in ToF; bicuspid aortic valve click may precede a murmur for years.",
  },
  {
    id: "harsh-systolic-ejection-murmur",
    name: "Harsh Systolic Ejection Murmur",
    etymology: "harsh = rough + Greek systole = contraction + Latin eicere = throw out + murmur = hum",
    aliases: [
      "harsh systolic ejection murmur",
      "harsh systolic murmur",
      "systolic ejection murmur",
      "ejection murmur",
      "harsh crescendo-decrescendo murmur",
    ],
    meaning:
      "Rough, loud systolic murmur from turbulent flow across a narrowed right or left ventricular outflow tract or stenotic semilunar valve; best heard at LLSB in RVOT obstruction.",
    conditions: [
      "Tetralogy of Fallot: harsh systolic ejection murmur at LLSB from RVOT obstruction (VSD itself is usually silent)",
      "Pulmonic stenosis: LUSB with possible ejection click",
      "HOCM: harsh murmur ↑ with Valsalva/standing, ↓ with squatting",
    ],
    pediatrics:
      "ToF is the classic cyanotic CHD with harsh RVOT murmur; murmur intensity may ↓ during hypercyanotic (tet) spells when RVOT spasm worsens.",
  },
  {
    id: "atrial-septal-defect-murmur",
    name: "ASD Flow Murmur",
    etymology: "ASD = atrial septal defect + flow = movement of blood + murmur = hum",
    aliases: [
      "atrial septal defect murmur",
      "asd murmur",
      "fixed split s2",
      "wide fixed split s2",
    ],
    meaning:
      "Soft systolic ejection/flow murmur at the upper left sternal border from ↑ flow across the pulmonary valve; classic finding is fixed split S2 from delayed pulmonic closure.",
    conditions: [
      "Ostium secundum ASD (most common)",
      "↑ pulmonary blood flow with left-to-right atrial shunt",
      "Fixed split S2 — does not narrow with expiration",
    ],
    pediatrics:
      "ASD murmur is from pulmonary flow, not blood crossing the septum; large ASDs may be asymptomatic until adulthood.",
  },
  {
    id: "patent-ductus-arteriosus-murmur",
    name: "Continuous Machinery Murmur",
    etymology: "continuous = uninterrupted + machinery = machine-like + murmur = hum",
    aliases: [
      "continuous machinery murmur",
      "machinery murmur",
      "patent ductus arteriosus murmur",
      "pda murmur",
    ],
    meaning:
      "Continuous \"machinery-like\" murmur throughout systole and diastole from persistent flow through the ductus arteriosus between aorta and pulmonary artery.",
    conditions: [
      "Patent ductus arteriosus (PDA)",
      "Loudest at left infraclavicular area / upper left sternal border",
      "Bounding pulses and wide pulse pressure with large PDA",
    ],
    pediatrics:
      "Prematurity and congenital rubella classic associations; indomethacin/ibuprofen or coil closure; keep PDA open with prostaglandins in ductal-dependent lesions.",
  },
  {
    id: "aortic-regurgitation-murmur",
    name: "Early Diastolic Decrescendo Murmur",
    etymology: "early = initial + Greek diastole = filling + decrescendo = decreasing + murmur = hum",
    aliases: [
      "early diastolic decrescendo murmur",
      "aortic regurgitation murmur",
      "aortic insufficiency murmur",
      "diastolic blowing murmur",
    ],
    meaning:
      "High-pitched early diastolic murmur that decrescendes, best heard at the left sternal border with the patient leaning forward and exhaling — regurgitant flow from aorta into LV.",
    conditions: [
      "Aortic regurgitation: bicuspid aortic valve, rheumatic fever, endocarditis, aortic dissection",
      "Wide pulse pressure, head bobbing (de Musset), pulsating nail beds (Quincke)",
      "Acute severe AR: pulmonary edema, soft short murmur; chronic AR: LV dilation",
    ],
    pediatrics:
      "Bicuspid aortic valve may have AR before significant AS; rheumatic AR still seen worldwide.",
  },
];

const heartMurmurById = new Map(HEART_MURMURS.map((m) => [m.id, m]));

export function getHeartMurmurById(id: string): HeartMurmurEntry | undefined {
  return heartMurmurById.get(id);
}

export interface HeartMurmurAliasMatch {
  alias: string;
  heartMurmurId: string;
}

export function buildHeartMurmurAliasIndex(): HeartMurmurAliasMatch[] {
  const matches: HeartMurmurAliasMatch[] = [];
  for (const murmur of HEART_MURMURS) {
    for (const alias of murmur.aliases) {
      matches.push({ alias: alias.toLowerCase(), heartMurmurId: murmur.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
