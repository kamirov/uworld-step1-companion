export interface MusculoskeletalEntry {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  anatomy?: string;
  action: string[];
  innervation?: string;
  clinicalRelevance: string[];
  boardsPearls: string[];
  distinguishFrom?: string[];
  pediatrics?: string;
}

export const MUSCULOSKELETAL: MusculoskeletalEntry[] = [
  {
    id: "rotator-cuff",
    name: "Rotator Cuff",
    aliases: [
      "rotator cuff",
      "rotator cuff muscles",
      "rotator cuff musculature",
      "rc muscles",
    ],
    definition:
      "Group of four muscles and their tendons that originate on the scapula and insert on the humeral head, stabilizing the glenohumeral joint and enabling controlled shoulder motion.",
    anatomy:
      "SITS muscles: supraspinatus (supraspinous fossa → superior facet of greater tuberosity), infraspinatus (infraspinous fossa → greater tuberosity), teres minor (lateral scapular border → greater tuberosity), subscapularis (subscapular fossa → lesser tuberosity). Tendons pass under the coracoacromial arch.",
    action: [
      "Dynamic stabilization of the humeral head in the glenoid during arm elevation",
      "Supraspinatus — initiates abduction; infraspinatus/teres minor — external rotation; subscapularis — internal rotation",
      "Counterbalance deltoid superior pull to prevent superior humeral migration",
    ],
    innervation: "All four muscles: suprascapular nerve (supraspinatus, infraspinatus) and upper/lower subscapular nerves (subscapularis, teres minor)",
    clinicalRelevance: [
      "Rotator cuff tears and tendinopathy are leading causes of shoulder pain in adults",
      "Supraspinatus tendon most vulnerable to subacromial impingement and attritional tear",
      "Chronic cuff dysfunction → superior humeral migration and secondary subacromial impingement",
      "MRI and ultrasound diagnose partial vs full-thickness tears",
    ],
    boardsPearls: [
      "SITS mnemonic: Supraspinatus, Infraspinatus, Teres minor, Subscapularis",
      "Supraspinatus — most commonly torn; passes under acromion in subacromial space",
      "Subscapularis inserts on lesser tuberosity; other three on greater tuberosity",
      "Massive cuff tear → positive drop-arm test and inability to maintain abduction",
    ],
    distinguishFrom: [
      "Deltoid — prime mover for abduction, not primary glenohumeral stabilizer",
      "Biceps long head — anterior shoulder pain, Speed/Yergason tests",
      "Glenohumeral osteoarthritis — older patient, decreased ROM, crepitus",
      "Adhesive capsulitis — global loss of passive and active ROM",
    ],
    pediatrics:
      "Acute rotator cuff tears are uncommon in children; shoulder pain more often Little League shoulder (proximal humeral physeal stress) or instability.",
  },
  {
    id: "supraspinatus",
    name: "Supraspinatus",
    aliases: ["supraspinatus", "supraspinatus muscle", "supraspinatus tendon"],
    definition:
      "Rotator cuff muscle occupying the supraspinous fossa of the scapula; its tendon passes beneath the acromion through the subacromial space to insert on the superior facet of the greater tuberosity.",
    anatomy:
      "Origin: supraspinous fossa. Insertion: superior facet of greater tuberosity of humerus. Passes under coracoacromial arch.",
    action: [
      "Initiates arm abduction (first ~15°)",
      "Assists deltoid in abduction to ~90°",
      "Depresses humeral head during elevation to maintain glenohumeral alignment",
    ],
    innervation: "Suprascapular nerve (C5–C6)",
    clinicalRelevance: [
      "Most commonly injured rotator cuff tendon (impingement and degenerative tear)",
      "Painful arc syndrome (60–120° abduction) suggests supraspinatus tendinopathy",
      "Empty can (Jobe) test assesses supraspinatus function",
      "Full-thickness tear → weakness with abduction and positive drop-arm sign",
    ],
    boardsPearls: [
      "#1 rotator cuff tendon torn — passes under acromion",
      "Empty can test — thumb down, resist abduction at ~90° with scapular plane elevation",
      "Drop-arm test — cannot slowly lower arm from 90° abduction (full tear)",
      "Impingement compresses supraspinatus tendon against acromion with forward flexion/abduction",
    ],
    distinguishFrom: [
      "Infraspinatus — external rotation, infraspinous fossa",
      "Deltoid — primary abductor after initiation; no subacromial impingement pathology",
      "Subscapularis — internal rotation, lesser tuberosity insertion",
    ],
    pediatrics:
      "Isolated supraspinatus tears rare in pediatrics; overuse shoulder pain in throwers — consider physeal injury before cuff tear.",
  },
  {
    id: "infraspinatus",
    name: "Infraspinatus",
    aliases: ["infraspinatus", "infraspinatus muscle", "infraspinatus tendon"],
    definition:
      "Rotator cuff muscle filling the infraspinous fossa of the scapula; tendon inserts on the posterior facet of the greater tuberosity and is the primary external rotator of the shoulder.",
    anatomy:
      "Origin: infraspinous fossa below scapular spine. Insertion: posterior facet of greater tuberosity.",
    action: [
      "Primary external (lateral) rotation of the humerus",
      "Posterior stabilization of glenohumeral joint",
      "Assists with shoulder extension and horizontal abduction",
    ],
    innervation: "Suprascapular nerve (C5–C6)",
    clinicalRelevance: [
      "Tears cause weakness of external rotation (hand behind back difficulty)",
      "Often involved with posterosuperior cuff tears alongside supraspinatus",
      "Posterior shoulder pain with resisted external rotation",
      "Assessed with resisted external rotation at side with elbow flexed 90°",
    ],
    boardsPearls: [
      "Main external rotator of the rotator cuff",
      "Same nerve as supraspinatus — suprascapular nerve (watch for ganglion cyst compression at spinoglenoid notch → isolated infraspinatus atrophy)",
      "External rotation lag sign — cannot maintain passive external rotation (tendon tear)",
      "SITS: second S is Supraspinatus, I is Infraspinatus",
    ],
    distinguishFrom: [
      "Teres minor — also external rotation; separate muscle on lateral scapular border",
      "Supraspinatus — abduction, supraspinous fossa",
      "Teres major — adduction/internal rotation, not rotator cuff",
    ],
  },
  {
    id: "teres-minor",
    name: "Teres Minor",
    aliases: ["teres minor", "teres minor muscle", "teres minor tendon"],
    definition:
      "Smallest rotator cuff muscle arising from the lateral border of the scapula; assists infraspinatus with external rotation and posterior glenohumeral stabilization.",
    anatomy:
      "Origin: upper two-thirds of lateral border of scapula. Insertion: inferior facet of greater tuberosity (with infraspinatus).",
    action: [
      "External (lateral) rotation of the humerus",
      "Posterior-inferior glenohumeral stabilization",
      "Assists adduction and extension of the arm",
    ],
    innervation: "Axillary nerve (C5–C6) — lower subscapular branch pattern; classically axillary nerve",
    clinicalRelevance: [
      "Less commonly torn in isolation than supraspinatus",
      "Involved in larger posteroinferior cuff tears",
      "Axillary nerve injury (anterior shoulder dislocation, surgical trauma) can affect teres minor and deltoid",
      "Hornblower sign — inability to externally rotate arm with elbow flexed (posterior cuff tear)",
    ],
    boardsPearls: [
      "External rotator with infraspinatus — T in SITS",
      "Axillary nerve also innervates deltoid — shoulder dislocation can injure both",
      "Do not confuse with teres major (adductor, latissimus dorsi companion, not rotator cuff)",
      "Posterior cuff tears may involve infraspinatus + teres minor",
    ],
    distinguishFrom: [
      "Teres major — adduction and internal rotation; innervated by lower subscapular nerve",
      "Infraspinatus — larger primary external rotator from infraspinous fossa",
      "Deltoid — axillary nerve, abduction, not rotator cuff",
    ],
    pediatrics:
      "Same axillary nerve vulnerability with anterior shoulder dislocation in adolescents; teres minor injury uncommon in isolation.",
  },
  {
    id: "subscapularis",
    name: "Subscapularis",
    aliases: ["subscapularis", "subscapularis muscle", "subscapularis tendon"],
    definition:
      "Largest rotator cuff muscle on the anterior scapula (subscapular fossa); the primary internal rotator, inserting on the lesser tuberosity of the humerus.",
    anatomy:
      "Origin: subscapular fossa (anterior scapula). Insertion: lesser tuberosity of humerus. Separated from supraspinatus by bicipital groove.",
    action: [
      "Primary internal (medial) rotation of the humerus",
      "Anterior glenohumeral stabilization — prevents anterior humeral translation",
      "Assists with adduction and extension",
    ],
    innervation: "Upper and lower subscapular nerves (C5–C6, C5–C7)",
    clinicalRelevance: [
      "Tear → weakness of internal rotation and anterior shoulder instability",
      "Lift-off test (hand behind back) and belly-press (Napoleon) test assess subscapularis",
      "Often injured with anterior dislocation and in massive cuff tears",
      "Isolated tear less common than supraspinatus but under-recognized",
    ],
    boardsPearls: [
      "Only rotator cuff muscle inserting on lesser tuberosity (others on greater tuberosity)",
      "Primary internal rotator — S in SITS (Subscapularis)",
      "Belly-press test — cannot keep hand flat on abdomen when pressing (upper subscapularis)",
      "Lift-off test — cannot lift hand off lower back (lower subscapularis)",
      "Anterior shoulder pain + internal rotation weakness → think subscapularis tear",
    ],
    distinguishFrom: [
      "Pectoralis major — powerful internal rotator/adductor, not rotator cuff",
      "Latissimus dorsi — internal rotation and adduction from thoracic origin",
      "Supraspinatus — abduction, greater tuberosity insertion",
    ],
    pediatrics:
      "Subscapularis tears rare in children; anterior instability more often labral (Bankart) injury than cuff tear.",
  },
];

const musculoskeletalById = new Map(
  MUSCULOSKELETAL.map((entry) => [entry.id, entry]),
);

export function getMusculoskeletalById(
  id: string,
): MusculoskeletalEntry | undefined {
  return musculoskeletalById.get(id);
}

export interface MusculoskeletalAliasMatch {
  alias: string;
  musculoskeletalId: string;
}

export function buildMusculoskeletalAliasIndex(): MusculoskeletalAliasMatch[] {
  const matches: MusculoskeletalAliasMatch[] = [];
  for (const entry of MUSCULOSKELETAL) {
    for (const alias of entry.aliases) {
      matches.push({
        alias: alias.toLowerCase(),
        musculoskeletalId: entry.id,
      });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
