export interface HeartMurmurEntry {
  id: string;
  name: string;
  aliases: string[];
  meaning: string;
  conditions: string[];
  pediatrics?: string;
}

export const HEART_MURMURS: HeartMurmurEntry[] = [
  {
    id: "crescendo-decrescendo",
    name: "Systolic Crescendo-Decrescendo Murmur",
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
    aliases: [
      "systolic ejection click",
      "ejection click",
      "systolic ejection sound",
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
