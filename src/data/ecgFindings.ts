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
  {
    id: "qtc-prolongation",
    name: "QTc Prolongation",
    etymology: "QT = ECG interval from Q wave onset to T wave end + c = corrected for heart rate",
    aliases: [
      "qtc prolongation",
      "qtc prolongations",
      "qt prolongation",
      "qt prolongations",
      "prolonged qtc",
      "prolonged qt",
      "prolonged qt interval",
      "prolonged qtc interval",
      "qt interval prolongation",
      "qtc interval prolongation",
      "long qt interval",
      "long qtc",
    ],
    interpretation:
      "Corrected QT interval longer than normal on ECG — reflects delayed ventricular repolarization and increased risk of polymorphic ventricular tachycardia (torsades de pointes).",
    territory:
      "Global repolarization abnormality — not a coronary territory finding; assess across leads for uniform QT prolongation.",
    thinkOf: [
      "Drug-induced — class IA/III antiarrhythmics, macrolides, fluoroquinolones, antipsychotics, TCAs, ondansetron, methadone (hERG/KCNH2 blockade)",
      "Electrolyte disturbances — hypokalemia, hypomagnesemia, hypocalcemia",
      "Congenital long QT syndrome (LQT1–LQT3 channel mutations)",
      "Bradycardia, hypothyroidism, intracranial hemorrhage",
      "Female sex and congenital or acquired QT vulnerability",
    ],
    distinguishFrom: [
      "U wave fusion — can mimic long QT; true QT ends at T-wave return to baseline",
      "Torsades de pointes — arrhythmia consequence of QT prolongation, not the ECG measurement itself",
      "ST-segment elevation — ischemic territory pattern, not repolarization interval prolongation",
      "Normal variant early repolarization — ST elevation without prolonged QT",
    ],
    boardsPearls: [
      "QTc prolongation predisposes to torsades de pointes — polymorphic VT with twisting QRS",
      "Hypocalcemia and hypomagnesemia prolong QT — check electrolytes",
      "hERG (KCNH2) blockade — common mechanism of drug-induced QT prolongation",
      "Treat torsades with IV magnesium; avoid class IA/III drugs in long QT",
      "Congenital long QT — syncope, sudden death in young; avoid QT-prolonging drugs",
      "Bazett correction: QTc = QT / √RR — use for rate correction on boards concept",
    ],
    pediatrics:
      "Congenital long QT may present with syncope, seizures, or sudden death in children; avoid erythromycin and other QT-prolonging drugs in known LQTS.",
  },
  {
    id: "escape-rhythm",
    name: "Escape Rhythm",
    etymology:
      "Latin ex + capere = to take out + rhythm = measured beat — subsidiary pacemaker takes over when higher pacemaker fails",
    aliases: [
      "escape rhythm",
      "escape rhythms",
      "junctional escape rhythm",
      "junctional escape",
      "ventricular escape rhythm",
      "ventricular escape",
      "idioventricular escape",
      "escape beat",
      "escape beats",
      "subsidiary pacemaker rhythm",
    ],
    interpretation:
      "Backup cardiac rhythm generated by a subsidiary pacemaker (AV junction or ventricle) when the sinoatrial node fails to depolarize or conduct — a protective mechanism preventing asystole.",
    territory:
      "Not territorial — rhythm diagnosis; classify by rate and QRS width to distinguish junctional vs ventricular escape.",
    thinkOf: [
      "Sinoatrial arrest or severe sinus bradycardia with junctional escape (narrow QRS, rate ~40–60)",
      "Complete heart block with ventricular escape (wide QRS, rate ~20–40)",
      "Digoxin toxicity, inferior MI, Lyme carditis — AV node injury → junctional escape",
      "Accelerated idioventricular rhythm post-MI (wide QRS, rate 60–100) — reperfusion marker",
    ],
    distinguishFrom: [
      "Sinus bradycardia — upright P before each QRS in lead II",
      "Junctional tachycardia — rate >100, not an escape mechanism",
      "Ventricular tachycardia — wide QRS tachycardia, not slow escape",
      "Atrial fibrillation with slow ventricular response — irregular, fibrillatory baseline",
    ],
    boardsPearls: [
      "Escape rhythm = subsidiary pacemaker rescue when SA node or AV conduction fails",
      "Junctional escape: narrow QRS, rate 40–60, absent/inverted/retrograde P waves",
      "Ventricular escape: wide QRS, rate 20–40 — think complete heart block",
      "Atropine speeds sinus node; transcutaneous pacing if hemodynamically unstable",
      "Post-MI accelerated idioventricular rhythm (60–100) is usually benign reperfusion rhythm",
    ],
    pediatrics:
      "Congenital complete heart block (maternal anti-Ro/La) may present with ventricular escape in neonates; junctional escape can occur with postoperative AV block after cardiac surgery.",
  },
  {
    id: "saw-toothed-flutter-waves",
    name: "Saw-Toothed Flutter Waves",
    etymology:
      "saw-tooth = jagged cutting-tool teeth + flutter = rapid vibration + waves = ECG deflections",
    aliases: [
      "saw-toothed flutter waves",
      "sawtooth flutter waves",
      "saw tooth flutter waves",
      "sawtooth f waves",
      "saw-tooth f waves",
      "flutter waves",
      "f waves",
      "f wave",
      "atrial flutter waves",
      "sawtooth pattern",
      "saw-tooth pattern",
    ],
    interpretation:
      "Regular rapid atrial depolarizations (~250–350/min) producing a characteristic sawtooth baseline — hallmark ECG pattern of atrial flutter, best seen in inferior leads II, III, and aVF.",
    territory:
      "Atrial activity pattern — not a coronary territory finding; typical type I flutter uses cavotricuspid isthmus macroreentry in the right atrium.",
    thinkOf: [
      "Atrial flutter — macroreentrant atrial tachycardia, often 2:1 AV block → ventricular rate ~150",
      "Carotid massage or adenosine — increases AV block to unmask flutter waves",
      "Pulmonary embolism, COPD, post-cardiac surgery, thyrotoxicosis",
      "1:1 conduction — dangerous rapid ventricular response; check for class Ic antiarrhythmic use",
    ],
    distinguishFrom: [
      "Atrial fibrillation — irregular fibrillatory baseline without organized sawtooth pattern",
      "Multifocal atrial tachycardia — ≥3 distinct P-wave morphologies, irregular",
      "Sinus tachycardia — discrete P waves, not sawtooth baseline",
      "Artifact — nonphysiologic baseline noise without consistent atrial rate",
    ],
    boardsPearls: [
      "Sawtooth F waves in II/III/aVF = atrial flutter until proven otherwise",
      "Typical flutter atrial rate ~300/min; 2:1 block → ventricular rate ~150",
      "Cavotricuspid isthmus ablation is curative for typical atrial flutter",
      "Adenosine or carotid massage increases AV block to reveal flutter waves",
      "Anticoagulate like atrial fibrillation — stroke risk with flutter",
    ],
    pediatrics:
      "Atrial flutter can occur in congenital heart disease or after palliative surgery; same sawtooth pattern with rate-related symptoms in infants.",
  },
  {
    id: "sinus-arrhythmia",
    name: "Sinus Arrhythmia",
    etymology:
      "Latin sinus = hollow/channel (sinus node) + Greek a- = without + rhythmos = measured flow",
    aliases: [
      "sinus arrhythmia",
      "sinus arrhythmias",
      "respiratory sinus arrhythmia",
      "respiratory sinus arrhythmias",
      "sinus respiratory arrhythmia",
      "phasic sinus arrhythmia",
      "physiologic sinus arrhythmia",
      "rsa",
    ],
    interpretation:
      "Physiologic variation in sinus rate with respiration — R-R interval shortens during inspiration and lengthens during expiration, with normal P-wave morphology and axis preceding each QRS.",
    territory:
      "Sinus node–driven rhythm — not a coronary territory finding; reflects normal vagal tone modulation of SA node automaticity.",
    thinkOf: [
      "Normal finding in healthy young patients — especially athletes and children",
      "Respiratory phasic rate change with intact sinus P waves",
      "Increased vagal tone — sleep, deep breathing, high fitness",
      "Benign unless accompanied by symptomatic bradycardia or pauses",
    ],
    distinguishFrom: [
      "Sinus arrhythmia absent — fixed regular rate may suggest sick sinus syndrome or beta-blocker effect in elderly",
      "Atrial fibrillation — irregularly irregular without discrete P waves",
      "Sinus arrest/sinoatrial block — pause without respiratory phasic pattern; may need pacemaker",
      "Premature atrial contractions — early P with compensatory pause, not smooth respiratory cycling",
      "Second-degree AV block — dropped QRS complexes, not rate variation with every beat",
    ],
    boardsPearls: [
      "Sinus arrhythmia = normal in young healthy patients — rate varies with breathing",
      "P waves present and upright in II with variable R-R interval",
      "vs AF — sinus arrhythmia has organized P waves and mild phasic irregularity",
      "Loss of respiratory variation in elderly may reflect decreased vagal tone or sick sinus",
      "No treatment required when isolated and asymptomatic",
    ],
    pediatrics:
      "Pronounced respiratory sinus arrhythmia is normal in infants and children — reflects high vagal tone; distinguish from pathologic bradyarrhythmias causing syncope or pauses >3 seconds.",
  },
  {
    id: "widened-qrs",
    name: "Widened QRS",
    etymology: "English wide = broad + QRS = ECG ventricular depolarization complex",
    aliases: [
      "widened qrs",
      "widened qrs complex",
      "widened qrs complexes",
      "wide qrs",
      "wide qrs complex",
      "wide qrs complexes",
      "broad qrs",
      "broad qrs complex",
      "qrs widening",
      "prolonged qrs",
      "prolonged qrs duration",
      "qrs duration >120 ms",
      "qrs >120 ms",
    ],
    interpretation:
      "QRS duration ≥120 ms — indicates slowed or abnormal ventricular depolarization from bundle branch block, ventricular origin of rhythm, electrolyte toxicity, or pre-excitation.",
    territory:
      "Global conduction pattern — not a coronary territory ST finding; localize with morphology (BBB pattern, axis, rhythm context).",
    thinkOf: [
      "Hyperkalemia — progressive widening with peaked T waves toward sine wave",
      "Right or left bundle branch block — fixed wide QRS morphology",
      "Ventricular tachycardia or ventricular escape — wide-complex tachycardia/bradycardia",
      "Wolff-Parkinson-White — delta wave widens QRS in sinus rhythm",
      "Sodium channel blocker toxicity (TCA, class IC antiarrhythmics, cocaine)",
      "Hyperkalemia + acidosis + renal failure",
    ],
    distinguishFrom: [
      "Narrow QRS — supraventricular origin with intact His-Purkinje conduction",
      "Peaked T waves alone — early hyperkalemia before QRS widening",
      "ST elevation — ischemic injury pattern; QRS may be normal width",
      "Low-voltage QRS — small amplitude, not necessarily prolonged duration",
      "Artifact — erratic baseline, not organized BBB morphology",
    ],
    boardsPearls: [
      "Hyperkalemia progression: peaked T → widened QRS → loss of P waves → sine wave → VF/asystole",
      "QRS ≥120 ms = wide complex — assume VT if tachycardia until proven otherwise",
      "RBBB: rsR' in V1; LBBB: broad monophasic R in I/aVL/V5–V6",
      "TCA overdose — wide QRS + prolonged QT + anticholinergic signs → sodium bicarbonate",
      "WPW — short PR + delta wave + wide QRS; avoid AV nodal blockers in AF",
    ],
    pediatrics:
      "Hyperkalemia in neonates (renal failure, adrenal insufficiency, hemolysis) can widen QRS rapidly — treat urgently. WPW and congenital BBB occur in children; wide-complex tachycardia in infant may be SVT with aberrancy vs VT.",
  },
  {
    id: "bundle-branch-block",
    name: "Bundle Branch Block",
    etymology:
      "English bundle = fascicle + branch = division + block = obstruction — delayed or blocked conduction through a right or left bundle branch of the His-Purkinje system",
    aliases: [
      "bundle branch block",
      "bundle branch blocks",
      "bundle-branch block",
      "bundle-branch blocks",
      "bbb",
      "bbbs",
      "right bundle branch block",
      "right bundle branch blocks",
      "left bundle branch block",
      "left bundle branch blocks",
      "rbbb",
      "rbbbs",
      "lbbb",
      "lbbbs",
      "incomplete right bundle branch block",
      "incomplete left bundle branch block",
      "complete right bundle branch block",
      "complete left bundle branch block",
      "bundle brach block",
      "bundle brach blocks",
      "bundle branche block",
      "bundle branche blocks",
      "right bundle branch",
      "left bundle branch",
      "right bundle branches",
      "left bundle branches",
    ],
    interpretation:
      "QRS duration ≥120 ms from delayed ventricular depolarization through one bundle branch — right bundle branch block (RBBB) shows rsR' (rabbit ears) in V1 with wide S waves in lateral leads; left bundle branch block (LBBB) shows broad notched R waves in I, aVL, V5–V6 with deep S in V1 — often benign but may signal structural heart disease or complicate MI diagnosis.",
    territory:
      "Global conduction abnormality — not a coronary ST territory; RBBB delays RV activation; LBBB delays LV activation and masks ischemic ST changes in standard STEMI criteria.",
    thinkOf: [
      "RBBB — rsR' in V1; wide S in I, aVL, V6; PE, RV strain, ASD, post-cardiac surgery",
      "LBBB — broad monophasic R in V5–V6; deep S in V1; cardiomyopathy, aortic stenosis, hypertension",
      "New LBBB with chest pain — treat as STEMI equivalent in acute coronary syndrome protocols",
      "Bifascicular block — RBBB + left anterior fascicular block (LAFB) or left posterior fascicular block (LPFB)",
      "Trifascicular block — bifascicular block + first-degree AV block → risk of complete heart block",
      "Wide QRS without typical BBB morphology — VT, hyperkalemia, WPW, sodium channel blocker toxicity",
    ],
    distinguishFrom: [
      "Widened QRS from hyperkalemia — peaked T waves, sine wave progression, not fixed BBB pattern",
      "Ventricular tachycardia — wide-complex tachycardia; AV dissociation supports VT",
      "Wolff-Parkinson-White — short PR, delta wave, not classic rsR' or LBBB morphology",
      "Ventricular paced rhythm — pacing spikes, wide QRS mimicking LBBB-like pattern",
      "Incomplete RBBB — QRS 100–120 ms with RSR' in V1; common normal variant in children",
      "Left ventricular hypertrophy — tall R in lateral leads without full LBBB QRS widening criteria",
    ],
    boardsPearls: [
      "RBBB: rsR' in V1 (M-shaped); wide terminal S in I, V6",
      "LBBB: broad notched R in I, aVL, V5–V6; no Q waves in lateral leads",
      "New LBBB + ischemic symptoms → STEMI equivalent — urgent reperfusion evaluation",
      "Sgarbossa criteria help detect MI in presence of LBBB (concordant ST elevation, etc.)",
      "RBBB → wide physiologic S2 split; LBBB → paradoxical S2 split (A2 delayed)",
      "Bifascicular block + syncope → pacemaker; trifascicular block → high-grade AV block risk",
      "Inferior MI may cause new RBBB from RV conduction system involvement",
    ],
    pediatrics:
      "Incomplete RBBB with rsR' in V1 is a common benign pediatric ECG variant. Complete BBB may accompany congenital heart disease (ASD with RBBB), cardiomyopathy, or post-surgical conduction injury. Wide-complex tachycardia in children requires distinguishing SVT with aberrancy from VT.",
  },
  {
    id: "peaked-t-waves",
    name: "Peaked T Waves",
    etymology: "English peak = pointed summit + T = ECG repolarization wave",
    aliases: [
      "peaked t waves",
      "peaked t wave",
      "tall t waves",
      "tall t wave",
      "tented t waves",
      "tented t wave",
      "hyperacute t waves",
      "sharp t waves",
      "pointed t waves",
      "narrow peaked t waves",
    ],
    interpretation:
      "Tall, narrow, symmetrically peaked T waves — earliest classic ECG sign of hyperkalemia; may also appear in early transmural ischemia (hyperacute T waves) or benign early repolarization in young patients.",
    territory:
      "Diffuse repolarization change — not regional ST territory alone; hyperkalemia affects all leads; ischemic hyperacute T may be territorial.",
    thinkOf: [
      "Hyperkalemia — renal failure, ACEi + K⁺-sparing diuretic, rhabdomyolysis, tumor lysis",
      "Early STEMI — hyperacute T waves in affected leads before ST elevation",
      "Benign early repolarization — young athletes, concave ST elevation with tall T",
      "Hyperacute phase of ischemia — territorial, evolves to ST elevation",
    ],
    distinguishFrom: [
      "Widened QRS — later hyperkalemia stage; peaked T often precedes",
      "ST elevation with reciprocal changes — established STEMI, not isolated peaked T",
      "U waves — separate deflection after T in hypokalemia, not tall peaked T",
      "QT prolongation — long repolarization interval, not necessarily tall narrow T",
      "Pseudohyperkalemia from hemolyzed sample — repeat if clinically discordant",
    ],
    boardsPearls: [
      "Peaked T waves = earliest ECG sign of hyperkalemia",
      "Hyperkalemia ECG sequence: peaked T → widened QRS → sine wave → arrest",
      "Treat ECG changes with calcium gluconate (stabilize membrane) then shift/remove K⁺",
      "Hyperacute T in ischemia — territorial, evolves to ST elevation within hours",
      "Peaked T + renal failure + ACE inhibitor → emergent hyperkalemia management",
    ],
    pediatrics:
      "Neonatal hyperkalemia (nonimmune hydrops, renal anomalies, adrenal insufficiency) shows peaked T waves — treat before QRS widens. Pediatric rhabdomyolysis and tumor lysis during chemotherapy require urgent potassium monitoring.",
  },
  {
    id: "u-waves",
    name: "U Waves",
    etymology: "U = letter following T on ECG alphabet naming of deflections after T wave",
    aliases: [
      "u waves",
      "u wave",
      "prominent u waves",
      "prominent u wave",
      "large u waves",
      "large u wave",
      "u wave fusion",
      "fused u waves",
    ],
    interpretation:
      "Small deflection after the T wave, best seen in V2–V3 — prominent U waves suggest hypokalemia, bradycardia, or antiarrhythmic drugs; U-wave fusion with T can mimic QT prolongation.",
    territory:
      "Global repolarization pattern — not coronary territorial; most prominent in mid-precordial leads.",
    thinkOf: [
      "Hypokalemia — flattened T waves with prominent U waves",
      "Bradycardia and hypothermia",
      "Class IA/III antiarrhythmics (quinidine, sotalol, amiodarone)",
      "Congenital long QT syndromes — U wave may contribute to apparent QT prolongation",
      "Hyperthyroidism and physical training (physiologic U waves)",
    ],
    distinguishFrom: [
      "QT prolongation — measure QT to end of T wave, not U wave (fusion mimics long QT)",
      "Peaked T waves — hyperkalemia, tall narrow T without following U deflection",
      "Torsades de pointes — arrhythmia, not a static U-wave morphology",
      "P waves — atrial activity before QRS, not after T",
      "Flattened T alone — hypokalemia may show both low T and prominent U",
    ],
    boardsPearls: [
      "Prominent U waves + flattened T → hypokalemia",
      "U-wave fusion can falsely prolong measured QT — true QT ends at T-wave baseline",
      "Hypokalemia predisposes to arrhythmias and QT-related torsades",
      "Replete K⁺ and Mg²⁺ when U waves suggest significant hypokalemia",
      "vs peaked T — hyperkalemia vs hypokalemia repolarization patterns",
    ],
    pediatrics:
      "Hypokalemia from GI losses, diuretics, or cystic fibrosis may show U waves in children; replete potassium and magnesium. Distinguish prominent U from congenital long QT on ECG screening.",
  },
  {
    id: "ventricular-tachycardia",
    name: "Ventricular Tachycardia",
    etymology:
      "Latin ventriculus = little belly + Greek tachys = fast + kardia = heart — three or more consecutive wide-complex beats arising from ventricular myocardium at rate typically >100 bpm",
    aliases: [
      "ventricular tachycardia",
      "ventricular tachycardias",
      "vt",
      "vtach",
      "v tach",
      "v-tach",
      "wide complex tachycardia",
      "wide-complex tachycardia",
      "wide complex tachycardias",
      "monomorphic ventricular tachycardia",
      "monomorphic vt",
      "sustained ventricular tachycardia",
      "sustained vt",
      "nonsustained ventricular tachycardia",
      "nonsustained vt",
      "nsvt",
      "pulseless ventricular tachycardia",
      "pulseless vt",
    ],
    interpretation:
      "Wide QRS (usually ≥120 ms) tachycardia with atrioventricular dissociation — monomorphic VT has uniform QRS morphology (often post-MI scar reentry); polymorphic VT includes torsades de pointes; sustained VT lasts ≥30 s or causes hemodynamic compromise; pulseless VT is treated as cardiac arrest.",
    territory:
      "Ventricular origin — not coronary territory-specific on ECG; monomorphic VT often reflects scar-related reentry in prior infarct zone.",
    thinkOf: [
      "Post-MI scar — monomorphic sustained VT (days to years after infarction)",
      "Acute ischemia — VT/VF during STEMI",
      "Structural heart disease — cardiomyopathy, HOCM, ARVC",
      "Electrolyte crisis — hyperkalemia (sine wave → VT/VF), hypokalemia/hypomagnesemia (torsades)",
      "Drug toxicity — digoxin, tricyclics, class IC in ischemic heart",
      "Long QT — polymorphic VT (torsades)",
      "Idiopathic VT — RVOT or fascicular VT in structurally normal hearts (selected cases)",
    ],
    distinguishFrom: [
      "Supraventricular tachycardia with aberrancy — may be narrow or wide; fusion/capture beats favor VT",
      "Torsades de pointes — polymorphic VT with twisting QRS; prolonged QT setting",
      "Ventricular fibrillation — chaotic disorganized activity without identifiable QRS complexes",
      "Atrial fibrillation with pre-excitation (WPW) — very rapid irregular wide rhythm",
      "Accelerated idioventricular rhythm — slow VT 60–100 bpm post-reperfusion; often benign",
      "Artifact — nonphysiologic noise; correlate with pulse and hemodynamics",
    ],
    boardsPearls: [
      "VT = wide-complex tachycardia ≥3 consecutive ventricular beats",
      "Monomorphic VT — uniform QRS; think scar post-MI",
      "Unstable VT (hypotension, ischemia, altered mental status) → synchronized cardioversion",
      "Pulseless VT → CPR + defibrillation (same as VF)",
      "Stable monomorphic VT → amiodarone or procainamide; avoid class IC in ischemic heart",
      "AV dissociation, fusion beats, capture beats — favor VT over SVT with aberrancy",
      "vs SVT + aberrancy — adenosine may terminate SVT; VT usually persists",
      "Post-MI VT in first 48 h — ischemia; late VT — scar-related reentry",
    ],
    pediatrics:
      "VT is uncommon in children vs SVT; consider congenital heart disease, cardiomyopathy, long QT, and catecholaminergic polymorphic VT. Wide-complex tachycardia in a child should be treated as VT until proven otherwise — synchronized cardioversion if unstable.",
  },
  {
    id: "torsades-de-pointes",
    name: "Torsades de Pointes",
    etymology: "French torsades = twists + de pointes = of points (twisting QRS around baseline)",
    aliases: [
      "torsades de pointes",
      "torsade de pointes",
      "torsades",
      "torsade",
      "tdp",
      "polymorphic ventricular tachycardia",
      "polymorphic vt",
      "twisting of the points",
      "twisting qrs tachycardia",
    ],
    interpretation:
      "Polymorphic ventricular tachycardia with QRS axis twisting around the baseline — occurs in setting of prolonged QT (acquired or congenital) and can degenerate to ventricular fibrillation.",
    territory:
      "Ventricular arrhythmia — not a coronary ST territory pattern; precedes or accompanies QT prolongation on baseline ECG.",
    thinkOf: [
      "Prolonged QTc — drugs (class IA/III, macrolides, antipsychotics, TCAs), electrolytes",
      "Hypomagnesemia and hypokalemia — common precipitants",
      "Congenital long QT syndrome — syncope, sudden death in young",
      "Bradycardia-dependent torsades — pauses lengthening QT",
      "Antiarrhythmic paradox — quinidine, sotalol, dofetilide causing torsades",
    ],
    distinguishFrom: [
      "Monomorphic VT — uniform QRS morphology, fixed axis",
      "QTc prolongation alone — repolarization risk marker, not the arrhythmia itself",
      "VF — coarse or fine fibrillation without organized twisting QRS",
      "SVT with aberrancy — usually narrow or fixed wide beats, not polymorphic twisting",
      "Artifact — nonphysiologic noise without hemodynamic correlate",
    ],
    boardsPearls: [
      "Torsades = polymorphic VT + prolonged QT — twisting QRS around baseline",
      "First-line treatment: IV magnesium sulfate (even if Mg normal)",
      "Stop offending drugs; correct K⁺ and Mg²⁺; consider isoproterenol or overdrive pacing if recurrent",
      "Avoid class IA/III antiarrhythmics — may worsen QT",
      "hERG channel blockade — common drug mechanism for acquired long QT → torsades",
      "Congenital LQT — β-blockers; avoid QT-prolonging medications",
    ],
    pediatrics:
      "Congenital long QT may present as torsades or seizures in children; acquired torsades from electrolyte shifts in DKA treatment or QT-prolonging antibiotics requires magnesium and rhythm stabilization.",
  },
  {
    id: "ventricular-fibrillation",
    name: "Ventricular Fibrillation",
    etymology:
      "Latin ventriculus = little belly + fibrilla = small fiber + -ation = process — chaotic ventricular quivering without effective contraction",
    aliases: [
      "ventricular fibrillation",
      "ventricular fibrillations",
      "vfib",
      "v-fib",
      "v fib",
      "vf",
      "v fibrillation",
      "pulseless vf",
      "pulseless ventricular fibrillation",
      "coarse vf",
      "fine vf",
      "ventricular fibrillation arrest",
    ],
    interpretation:
      "Chaotic, disorganized ventricular electrical activity without coordinated contraction — pulseless cardiac arrest rhythm requiring immediate unsynchronized defibrillation and ACLS.",
    territory:
      "Ventricular arrhythmia — not coronary territory-specific; may complicate acute MI, ischemia, electrolyte crisis, or degenerate from VT/torsades.",
    thinkOf: [
      "Acute myocardial infarction — most common cause in adults",
      "Pulseless ventricular tachycardia degenerating to VF",
      "Torsades de pointes degenerating to VF",
      "Severe hyperkalemia — sine wave progression to VF/asystole",
      "WPW with AF conducting rapidly down accessory pathway",
      "Hypothermia, electrocution, commotio cordis",
      "Post-MI scar-related reentrant VT → VF",
    ],
    distinguishFrom: [
      "Ventricular tachycardia — organized wide-complex rhythm; may have pulse (stable VT) vs pulseless VT (treat like VF)",
      "Torsades de pointes — polymorphic VT with twisting QRS; may degenerate to VF",
      "Atrial fibrillation — irregular atrial activity with variable ventricular response; not pulseless VF pattern",
      "Asystole — flat line; epinephrine priority; still check for fine VF",
      "Artifact — nonphysiologic noise; confirm patient unresponsive and pulseless",
      "SVT with aberrancy — usually organized, may have pulse",
    ],
    boardsPearls: [
      "VF = pulseless arrest rhythm — immediate CPR + defibrillation (unsynchronized shock)",
      "ACLS: CPR, epinephrine, defibrillation; amiodarone or lidocaine after refractory VF/VT",
      "Post-MI VF in first 48 h may reflect ischemia; late VF suggests scar (reentry)",
      "Hyperkalemia → peaked T → widened QRS → sine wave → VF/asystole",
      "Torsades → Mg²⁺ first; VF → defibrillation first",
      "vs cardioversion — synchronized shock for unstable SVT/AF with pulse; defibrillation is unsynchronized for VF/pulseless VT",
      "Fine VF may mimic asystole — continue CPR and shock",
    ],
    pediatrics:
      "Pediatric VF is less common than bradyasystole in arrest; still shockable rhythm in PALS. Commotio cordis (chest blow during vulnerable phase) can cause immediate VF in young athletes.",
  },
  {
    id: "q-waves",
    name: "Q Waves",
    etymology: "Q = first downward deflection of the QRS complex on ECG tracing",
    aliases: [
      "q waves",
      "q wave",
      "pathologic q waves",
      "pathologic q wave",
      "pathological q waves",
      "significant q waves",
      "q wave infarction",
      "q-wave mi",
      "transmural q waves",
      "deep q waves",
    ],
    interpretation:
      "Initial negative deflection of the QRS complex — pathologic Q waves (wide and deep) in contiguous leads indicate transmural myocardial infarction or scar from prior necrosis; may appear hours to days after STEMI.",
    territory:
      "Territorial by lead group — inferior (II, III, aVF), anterior (V1–V4), lateral (I, aVL, V5–V6), posterior (reciprocal anterior ST depression with tall R in V1–V2).",
    thinkOf: [
      "Prior or evolving transmural MI — Q waves develop as necrosis establishes",
      "STEMI — may have ST elevation before Q waves form",
      "Old MI — isolated Q waves with flattened T waves, no acute ST changes",
      "Chronic scar after reperfused STEMI",
      "Septal Q waves in V5–V6, I, aVL — may be normal variant if narrow and shallow",
    ],
    distinguishFrom: [
      "ST elevation without Q wave — acute STEMI early phase",
      "NSTEMI — ST depression, troponin rise; Q waves may develop later",
      "LVH — septal Q waves narrow, with LVH voltage criteria",
      "Wolff-Parkinson-White — delta wave mimics Q in some leads",
      "Pulmonary embolism — S1Q3T3 pattern; Q in III alone not pathologic MI",
      "Normal septal Q — small Q in left lateral leads",
    ],
    boardsPearls: [
      "Pathologic Q: ≥40 ms wide or ≥25% height of ensuing R wave in contiguous leads",
      "Q waves = transmural infarct/scar — localize territory to culprit artery",
      "Anterior Q (V1–V4) → LAD; Inferior Q (II, III, aVF) → RCA/circumflex",
      "New Q waves with troponin rise confirm MI; old Q waves alone suggest prior infarct",
      "Loss of R wave progression in anterior leads may accompany anterior MI",
    ],
    pediatrics:
      "MI with Q waves is rare in children (Kawasaki, anomalous coronaries); pediatric ECG has smaller Q waves normally. New pathologic Q waves in adolescent with chest pain warrant urgent evaluation.",
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
