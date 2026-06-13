export interface MetabolismEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  definition: string;
  pathway: string[];
  boardsPearls: string[];
  distinguishFrom?: string[];
  pediatrics?: string;
}

export const METABOLISM: MetabolismEntry[] = [
  {
    id: "leucine",
    name: "Leucine",
    etymology: "Greek leukos = white + -ine = chemical suffix for amino acids",
    aliases: ["leucine", "leu", "l"],
    definition:
      "Essential branched-chain amino acid (BCAA) catabolized to ketone bodies; purely ketogenic on boards classification.",
    pathway: [
      "Transamination → branched-chain α-keto acid dehydrogenase complex (same enzyme family as α-ketoglutarate dehydrogenase; inhibited by arsenic)",
      "→ isovaleryl-CoA → β-methylcrotonyl-CoA → HMG-CoA → acetoacetate and acetyl-CoA",
      "Not glucogenic — does not yield net glucose precursors",
      "Maple syrup urine disease (MSUD): deficiency of BCAA dehydrogenase → ↑ leucine, isoleucine, valine",
    ],
    boardsPearls: [
      "Leucine and lysine are the only purely ketogenic amino acids",
      "Leucine catabolism produces acetoacetate, not fumarate",
      "MSUD: sweet urine odor, lethargy, neurologic crisis in neonates",
      "Thiamine is cofactor for BCAA α-keto acid dehydrogenase (like pyruvate and α-KG dehydrogenases)",
    ],
    distinguishFrom: [
      "Valine — also BCAA but glucogenic and ketogenic",
      "Phenylalanine/tyrosine — aromatic pathway to homogentisic acid, not ketogenic",
      "Glutamic acid — glucogenic via α-ketoglutarate in TCA cycle",
    ],
  },
  {
    id: "acetoacetate",
    name: "Acetoacetate",
    etymology: "Latin acetum = vinegar + Greek oxy = sharp/acid + -ate = chemical anion",
    aliases: [
      "acetoacetate",
      "acetoacetic acid",
      "acetoacetic",
      "acac",
    ],
    definition:
      "Primary ketone body formed during fasting, prolonged exercise, and ketogenic amino acid catabolism; converted to β-hydroxybutyrate and acetone in vivo.",
    pathway: [
      "HMG-CoA synthase + HMG-CoA lyase in liver mitochondria → acetoacetate from acetyl-CoA (fatty acid β-oxidation)",
      "Also produced from leucine and lysine catabolism (ketogenic amino acids)",
      "β-hydroxybutyrate dehydrogenase converts acetoacetate ↔ β-hydroxybutyrate",
      "Spontaneous decarboxylation → acetone (fruity breath in DKA)",
      "Extrahepatic tissues activate acetoacetate to acetoacetyl-CoA via succinyl-CoA:3-oxoacid CoA transferase (not in liver)",
    ],
    boardsPearls: [
      "Ketone bodies: acetoacetate, β-hydroxybutyrate, acetone",
      "Liver makes ketones but cannot use them (lacks transferase)",
      "DKA: ↑ glucose + ↑ ketones (acetoacetate, β-hydroxybutyrate)",
      "Leucine/lysine catabolism → acetoacetate; not from serine or glutamic acid directly",
    ],
    distinguishFrom: [
      "Acetyl-CoA — central intermediate, not a ketone body",
      "Fumarate — TCA intermediate from tyrosine/phenylalanine catabolism, not ketogenesis",
      "Lactic acid — anaerobic glycolysis product, not ketone body",
    ],
  },
  {
    id: "phenylalanine",
    name: "Phenylalanine",
    etymology: "phenyl = benzene ring + alanine = amino acid",
    aliases: ["phenylalanine", "phe", "f"],
    definition:
      "Essential aromatic amino acid converted to tyrosine by phenylalanine hydroxylase; shared catabolic pathway with tyrosine feeds homogentisic acid metabolism.",
    pathway: [
      "Phenylalanine hydroxylase (PAH) + BH₄ → tyrosine (first step of aromatic amino acid catabolism)",
      "PAH deficiency → phenylketonuria (PKU): ↑ phenylalanine, musty odor, intellectual disability if untreated",
      "Tyrosine continues: transamination → p-hydroxyphenylpyruvate → homogentisic acid → fumarate + acetoacetate",
      "Homogentisate oxidase deficiency blocks pathway after homogentisic acid → alkaptonuria",
    ],
    boardsPearls: [
      "Phenylalanine and tyrosine share aromatic catabolic pathway — both upstream of homogentisic acid",
      "PKU: ↓ phenylalanine hydroxylase; treat with low-phe diet",
      "Alkaptonuria: block is downstream at homogentisate oxidase, not at PAH",
      "Phenylalanine is essential; tyrosine becomes conditionally essential in PKU",
    ],
    distinguishFrom: [
      "Leucine — BCAA, ketogenic only, no aromatic ring",
      "Tryptophan — separate aromatic pathway to niacin and serotonin",
      "Serine — nonessential, one-carbon metabolism, not aromatic",
    ],
    pediatrics:
      "Newborn PKU screen detects ↑ phenylalanine; early dietary restriction prevents intellectual disability.",
  },
  {
    id: "tyrosine",
    name: "Tyrosine",
    etymology: "Greek tyros = cheese + -ine = chemical suffix (first isolated from cheese protein)",
    aliases: ["tyrosine", "tyr", "y"],
    definition:
      "Aromatic amino acid derived from phenylalanine; catabolized through homogentisic acid to fumarate and acetoacetate, and used in melanin, thyroid hormone, and catecholamine synthesis.",
    pathway: [
      "From phenylalanine via PAH, or from diet",
      "Catabolism: tyrosine transaminase → p-hydroxyphenylpyruvate → homogentisic acid (homogentisate oxidase) → maleylacetoacetate → fumarate + acetoacetate",
      "Anabolic branches: tyrosinase → melanin; thyroid peroxidase pathway → T3/T4; TH → DOPA → dopamine → NE → Epi",
      "Alkaptonuria: homogentisic acid accumulates when homogentisate oxidase is deficient",
    ],
    boardsPearls: [
      "Tyrosine catabolism blocked in alkaptonuria at homogentisate oxidase step",
      "Alkaptonuria involves phenylalanine AND tyrosine pathways (tyrosine is downstream of phe)",
      "Tyrosine is glucogenic and ketogenic (yields fumarate + acetoacetate)",
      "Albinism: tyrosinase defect in melanin synthesis, not tyrosine catabolism",
    ],
    distinguishFrom: [
      "Phenylalanine — essential precursor; PKU is PAH deficiency at conversion step",
      "DOPA — catecholamine precursor, not catabolic end product",
      "Homogentisic acid — intermediate that accumulates in alkaptonuria",
    ],
    pediatrics:
      "PKU patients require tyrosine supplementation because they cannot convert phenylalanine to tyrosine.",
  },
  {
    id: "serine",
    name: "Serine",
    etymology: "Latin sericum = silk + -ine = chemical suffix (first found in silk protein)",
    aliases: ["serine", "ser", "s"],
    definition:
      "Nonessential glucogenic amino acid central to one-carbon metabolism and a precursor for glycine and cysteine via the transsulfuration pathway.",
    pathway: [
      "From 3-phosphoglycerate (glycolysis) or dietary intake",
      "Serine hydroxymethyltransferase (SHMT) → glycine + one-carbon unit (THF)",
      "Serine + homocysteine → cystathionine (cystathionine β-synthase) → cysteine (transsulfuration)",
      "Glucogenic — can enter glycolysis/gluconeogenesis via pyruvate or 3-phosphoglycerate",
    ],
    boardsPearls: [
      "Serine donates carbon to folate cycle via SHMT",
      "Serine + homocysteine → cysteine (requires B₆); not part of alkaptonuria pathway",
      "Serine is glucogenic, not ketogenic",
      "vs cysteine — serine is upstream in transsulfuration",
    ],
    distinguishFrom: [
      "Cysteine — downstream via transsulfuration from homocysteine + serine",
      "Glycine — product of serine cleavage by SHMT",
      "Phenylalanine — aromatic catabolism, unrelated to serine pathway",
    ],
  },
  {
    id: "cysteine",
    name: "Cysteine",
    etymology: "Latin cystis = bladder + -ine = chemical suffix (named for bladder-shaped crystals)",
    aliases: ["cysteine", "cys", "c"],
    definition:
      "Sulfur-containing amino acid synthesized from homocysteine and serine; forms disulfide bonds stabilizing protein tertiary structure.",
    pathway: [
      "Transsulfuration: homocysteine + serine → cystathionine (cystathionine β-synthase, B₆) → cysteine (cystathionine γ-lyase)",
      "Also from dietary intake; not essential if methionine and serine are adequate",
      "Oxidized to cystine (disulfide-linked dimer) in extracellular space",
      "Glucogenic — catabolism yields pyruvate",
      "Homocystinuria: homocysteine accumulation (cystathionine β-synthase deficiency), not cysteine deficiency per se",
    ],
    boardsPearls: [
      "Cysteine provides —SH groups for glutathione synthesis (γ-glutamylcysteine + glycine)",
      "Disulfide bonds (cysteine–cysteine) stabilize immunoglobulins and many secreted proteins",
      "Cysteine pathway is methionine/transsulfuration — unrelated to alkaptonuria",
      "Homocystinuria: marfanoid habitus, lens dislocation downward, thrombosis",
    ],
    distinguishFrom: [
      "Serine — precursor in transsulfuration, not sulfur storage amino acid",
      "Methionine — essential, converted to homocysteine before cysteine synthesis",
      "Cystine — oxidized dimer of cysteine; cystinuria is renal tubular defect",
    ],
    pediatrics:
      "Homocystinuria may present with intellectual disability, lens dislocation, and thromboembolism; treat with B₆, folate, betaine depending on subtype.",
  },
  {
    id: "fumarate",
    name: "Fumarate",
    etymology: "Latin fumus = smoke + -ate = chemical anion (fumaric acid found in smoke-derived compounds)",
    aliases: ["fumarate", "fumaric acid"],
    definition:
      "TCA cycle dicarboxylic acid intermediate; also an end product of phenylalanine and tyrosine catabolism after homogentisic acid oxidation.",
    pathway: [
      "TCA cycle: succinate dehydrogenase oxidizes succinate → fumarate → malate (fumarase)",
      "Tyrosine/phenylalanine catabolism: homogentisic acid → fumarate + acetoacetate (after homogentisate oxidase)",
      "Fumarate hydratase (fumarase) deficiency → hereditary leiomyomatosis and renal cell cancer (HLRCC)",
      "Glucogenic — fumarate enters gluconeogenesis via malate → oxaloacetate",
    ],
    boardsPearls: [
      "Fumarate is both a TCA intermediate and tyrosine catabolism product",
      "Alkaptonuria blocks BEFORE fumarate production (at homogentisic acid step)",
      "Fumarase deficiency: ↑ fumarate, autosomal recessive, uterine leiomyomas, RCC",
      "Succinate dehydrogenase (Complex II) converts succinate to fumarate",
    ],
    distinguishFrom: [
      "Succinate — TCA precursor to fumarate, not tyrosine catabolism end product alone",
      "Malate — downstream of fumarate in TCA cycle",
      "Acetoacetate — co-product of tyrosine catabolism, ketogenic not TCA intermediate",
    ],
  },
  {
    id: "valine",
    name: "Valine",
    etymology: "Latin valere = to be strong + -ine = chemical suffix",
    aliases: ["valine", "val", "v"],
    definition:
      "Essential branched-chain amino acid (BCAA) that is both glucogenic and ketogenic; catabolized through propionyl-CoA and succinyl-CoA.",
    pathway: [
      "BCAA transaminase → branched-chain α-keto acid dehydrogenase → isobutyryl-CoA → propionyl-CoA → methylmalonyl-CoA → succinyl-CoA (glucogenic entry)",
      "Also produces acetyl-CoA (ketogenic component)",
      "MSUD: accumulation of valine, leucine, isoleucine when BCAA dehydrogenase is deficient",
      "Propionyl-CoA carboxylase deficiency also impairs valine/isoleucine/methionine/threonine metabolism",
    ],
    boardsPearls: [
      "Valine is glucogenic AND ketogenic (unlike leucine, which is purely ketogenic)",
      "Valine catabolism → succinyl-CoA (glucogenic) + acetyl-CoA",
      "MSUD affects valine, leucine, isoleucine together",
      "Not part of aromatic amino acid / alkaptonuria pathway",
    ],
    distinguishFrom: [
      "Leucine — purely ketogenic BCAA",
      "Isoleucine — another BCAA, glucogenic and ketogenic",
      "Glutamic acid — enters TCA at α-ketoglutarate, not via propionyl-CoA",
    ],
    pediatrics:
      "MSUD neonates need emergency restriction of BCAAs and thiamine supplementation; sweet-smelling urine is a clue.",
  },
  {
    id: "glutamic-acid",
    name: "Glutamic Acid",
    etymology: "Latin gluten = glue + -ic acid = carboxylic acid form",
    aliases: [
      "glutamic acid",
      "glutamate",
      "glutamic",
      "glu",
      "e",
    ],
    definition:
      "Nonessential glucogenic amino acid that transaminates to α-ketoglutarate, linking amino acid metabolism to the TCA cycle and urea cycle.",
    pathway: [
      "Transamination → α-ketoglutarate (TCA cycle intermediate) → glucogenic",
      "Glutamate + NH₄⁺ → glutamine (glutamine synthetase) for ammonia transport",
      "Urea cycle: glutamate provides nitrogen via aspartate and carbamoyl phosphate pathways",
      "Glutamate dehydrogenase: reversible amination of α-ketoglutarate (mitochondrial ammonia disposal)",
      "Excitatory neurotransmitter in CNS (removed by astrocyte glutamate uptake)",
    ],
    boardsPearls: [
      "Glutamic acid/glutamate is glucogenic via α-ketoglutarate",
      "Most amino acids transaminate to glutamate or receive amino groups from glutamate",
      "Not involved in alkaptonuria (aromatic pathway) or BCAA disorders",
      "Sickle cell HbS: Glu → Val substitution at β-6 (not glutamate metabolism disorder)",
    ],
    distinguishFrom: [
      "Glutamine — amide form for nitrogen transport, not direct TCA entry",
      "α-Ketoglutarate — TCA intermediate, transamination partner of glutamate",
      "GABA — decarboxylation product of glutamate, inhibitory neurotransmitter",
    ],
  },
  {
    id: "alanine",
    name: "Alanine",
    etymology: "Latin alumen = alum + -ine = chemical suffix",
    aliases: ["alanine", "ala", "a", "l-alanine"],
    definition:
      "Nonessential glucogenic amino acid that transaminates to pyruvate, linking amino acid catabolism to glycolysis and gluconeogenesis.",
    pathway: [
      "Alanine aminotransferase (ALT) transfers amino group from alanine to α-ketoglutarate → pyruvate + glutamate",
      "Pyruvate is glucogenic — enters gluconeogenesis",
      "Cahill (glucose-alanine) cycle: muscle alanine carries nitrogen to liver for urea synthesis",
      "ALT elevation marks hepatocellular injury (more liver-specific than AST)",
    ],
    boardsPearls: [
      "Alanine → pyruvate (glucogenic)",
      "ALT = alanine aminotransferase — liver enzyme on boards",
      "vs leucine — alanine is glucogenic, leucine is ketogenic",
      "Sickle cell HbS substitution is Glu→Val at β-6, not alanine metabolism defect",
    ],
    distinguishFrom: [
      "Pyruvate — transamination product, not amino acid itself",
      "Aspartate — transaminates to oxaloacetate, not pyruvate",
      "Glycine — simplest amino acid, separate metabolism",
    ],
  },
  {
    id: "arginine",
    name: "Arginine",
    etymology: "Latin argentum = silver + -ine = chemical suffix (early silver-colored crystals)",
    aliases: ["arginine", "arg", "r", "l-arginine"],
    definition:
      "Semi-essential amino acid central to the urea cycle, nitric oxide synthesis, and creatine production; becomes essential in growth and critical illness.",
    pathway: [
      "Urea cycle: ornithine + carbamoyl phosphate → citrulline → argininosuccinate → arginine → urea + ornithine (arginase)",
      "NOS converts arginine → citrulline + nitric oxide (eNOS in endothelium, iNOS in macrophages)",
      "GH stimulation test uses IV arginine to provoke growth hormone release",
      "Glutamate can form ornithine for urea cycle entry",
    ],
    boardsPearls: [
      "Arginine is urea cycle product and NO precursor (requires NOS, BH₄, O₂)",
      "Arginase deficiency → ↑ arginine, neurological symptoms",
      "OTC deficiency blocks before arginine synthesis — hyperammonemia",
      "Citrullination converts arginine → citrulline in proteins (anti-CCP in RA)",
      "vs ornithine — upstream urea cycle intermediate, not NO precursor directly",
    ],
    distinguishFrom: [
      "Ornithine — urea cycle intermediate before arginine",
      "Citrulline — urea cycle intermediate; citrullinemia is distinct disorder",
      "Lysine — essential, ketogenic, not urea cycle amino acid",
    ],
    pediatrics:
      "Urea cycle disorders (OTC, CPS I, argininosuccinate lyase deficiency) present with hyperammonemia in neonates; arginine supplementation is used in some urea cycle defects.",
  },
  {
    id: "aspartate",
    name: "Aspartate",
    etymology: "Latin asparagus plant + -ate = chemical anion (first isolated from asparagus)",
    aliases: [
      "aspartate",
      "aspartic acid",
      "asp",
      "d",
      "l-aspartate",
      "l-aspartic acid",
    ],
    definition:
      "Nonessential glucogenic amino acid that transaminates to oxaloacetate and donates nitrogen in the urea cycle.",
    pathway: [
      "Aspartate aminotransferase (AST) → oxaloacetate (TCA/glucogenic)",
      "Urea cycle: aspartate donates second nitrogen to citrulline → argininosuccinate (argininosuccinate synthetase)",
      "AST rises in liver injury and also in MI/rhabdomyolysis (less liver-specific than ALT)",
      "Aspartate can form asparagine via asparagine synthetase",
    ],
    boardsPearls: [
      "Aspartate → oxaloacetate (glucogenic)",
      "AST = aspartate aminotransferase — heart and liver",
      "Urea cycle needs aspartate nitrogen for argininosuccinate step",
      "AST:ALT >2:1 suggests alcoholic liver disease",
      "vs alanine — alanine→pyruvate; aspartate→oxaloacetate",
    ],
    distinguishFrom: [
      "Asparagine — amide derivative of aspartate",
      "Oxaloacetate — TCA intermediate from aspartate transamination",
      "Glutamate — different transamination/urea cycle connections",
    ],
  },
  {
    id: "glutamine",
    name: "Glutamine",
    etymology: "Latin gluten = glue + amine = nitrogen-bearing + -ine suffix",
    aliases: ["glutamine", "gln", "q", "l-glutamine"],
    definition:
      "Most abundant free amino acid in blood; amide form of glutamate that transports ammonia and fuels rapidly dividing cells.",
    pathway: [
      "Glutamine synthetase: glutamate + NH₄⁺ → glutamine (liver, muscle, brain)",
      "Kidney glutaminase: glutamine → glutamate + NH₄⁺ (renal ammonia genesis for acid excretion)",
      "Used as nitrogen donor for purine/pyrimidine synthesis and amino sugar formation",
      "Cancer and immune cells avidly consume glutamine (anaplerosis)",
    ],
    boardsPearls: [
      "Glutamine transports ammonia safely between tissues",
      "Renal glutaminase generates NH₄⁺ in chronic acidosis to excrete acid as NH₄Cl",
      "vs glutamate — glutamine has amide side chain; glutamate transaminates to α-KG",
      "Glutamine supplements used in some GI/metabolic support contexts on boards peripherally",
      "Not purely glucogenic/ketogenic classification focus — nitrogen transport role is key",
    ],
    distinguishFrom: [
      "Glutamate/glutamic acid — carboxylic acid form, direct TCA link via α-ketoglutarate",
      "Asparagine — analogous amide of aspartate, not glutamate",
      "Ammonia — free NH₃ is toxic; glutamine carries nitrogen safely",
    ],
    pediatrics:
      "Glutamine contributes to renal acid excretion; urea cycle defects affect ammonia handling upstream of glutamine buffering.",
  },
  {
    id: "histidine",
    name: "Histidine",
    etymology: "Greek histos = tissue + -idine = chemical suffix",
    aliases: ["histidine", "his", "h", "l-histidine"],
    definition:
      "Essential amino acid with imidazole side chain; precursor to histamine, carnosine, and one-carbon metabolism via folate-linked pathways.",
    pathway: [
      "Histidine decarboxylase → histamine (mast cells, basophils, gastric ECL cells)",
      "Catabolism: histidine → urocanic acid → formiminoglutamic acid (FIGLU) → glutamate + one-carbon units",
      "Histidinemia (autosomal recessive) — benign ↑ histidine, often asymptomatic",
      "Imidazole group buffers near physiologic pH — common in active site of enzymes (e.g., catalytic His)",
    ],
    boardsPearls: [
      "Histidine → histamine via decarboxylation (vitamin B₆ dependent)",
      "Essential amino acid in humans",
      "Imidazole ring — unique among standard amino acids",
      "Histidinemia is benign metabolic screen finding",
      "vs histamine — decarboxylated biogenic amine mediator, not amino acid",
    ],
    distinguishFrom: [
      "Histamine — mediator in allergy and gastric acid secretion",
      "Tryptophan — aromatic, serotonin precursor, not histamine pathway",
      "Glutamine — amide nitrogen carrier, not imidazole-containing",
    ],
    pediatrics:
      "Histidinemia detected on newborn metabolic screening is usually benign; distinguish from histiocytosis or allergic histamine-mediated disease terminology.",
  },
];

const metabolismById = new Map(METABOLISM.map((entry) => [entry.id, entry]));

export function getMetabolismById(id: string): MetabolismEntry | undefined {
  return metabolismById.get(id);
}

export interface MetabolismAliasMatch {
  alias: string;
  metabolismId: string;
}

export function buildMetabolismAliasIndex(): MetabolismAliasMatch[] {
  const matches: MetabolismAliasMatch[] = [];
  for (const entry of METABOLISM) {
    for (const alias of entry.aliases) {
      matches.push({
        alias: alias.toLowerCase(),
        metabolismId: entry.id,
      });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
