import type { MediaAttribution } from "./media";
import type { PathogenesisEntry } from "./pathogenesis";

import bloodBrainBarrier from "../media/images/pathogenesis/blood-brain-barrier.svg?url";
import hepatotoxicity from "../media/images/pathogenesis/hepatotoxicity.jpg?url";
import lowFiberDiet from "../media/images/pathogenesis/low-fiber-diet.jpg?url";
import malnutrition from "../media/images/pathogenesis/malnutrition.jpg?url";
import meconium from "../media/images/pathogenesis/meconium.jpg?url";
import oxidativeStress from "../media/images/pathogenesis/oxidative-stress.png?url";
import reuptake from "../media/images/pathogenesis/reuptake.png?url";
import acidFastBacteria from "../media/images/pathogenesis/acid-fast-bacteria.jpg?url";
import amyloidPlaques from "../media/images/pathogenesis/amyloid-plaques.jpg?url";
import spongiformVacuole from "../media/images/pathogenesis/spongiform-vacuole.jpg?url";
import strenuousExercise from "../media/images/pathogenesis/strenuous-exercise.jpg?url";
import vqMismatch from "../media/images/pathogenesis/v-q-mismatch.jpg?url";
import radiculopathy from "../media/images/pathogenesis/radiculopathy.png?url";
import stockingGlove from "../media/images/pathogenesis/stocking-glove.jpg?url";
import toxidrome from "../media/images/pathogenesis/toxidrome.png?url";
import glycation from "../media/images/pathogenesis/glycation.png?url";
import vasaNervorum from "../media/images/pathogenesis/vasa-nervorum.jpg?url";
import clottingCascade from "../media/images/pathogenesis/clotting-cascade.png?url";
import protease from "../media/images/pathogenesis/protease.png?url";
import pyogenicInfection from "../media/images/pathogenesis/pyogenic-infection.jpg?url";
import robertsonianTranslocation from "../media/images/pathogenesis/robertsonian-translocation.png?url";
import reentrantCircuit from "../media/images/pathogenesis/reentrant-circuit.png?url";

export type PathogenesisImageId = Extract<
  PathogenesisEntry["id"],
  | "blood-brain-barrier"
  | "hepatotoxicity"
  | "low-fiber-diet"
  | "malnutrition"
  | "meconium"
  | "oxidative-stress"
  | "reuptake"
  | "acid-fast-bacteria"
  | "amyloid-plaques"
  | "spongiform-vacuole"
  | "strenuous-exercise"
  | "v-q-mismatch"
  | "radiculopathy"
  | "stocking-glove"
  | "toxidrome"
  | "glycation"
  | "vasa-nervorum"
  | "clotting-cascade"
  | "protease"
  | "pyogenic-infection"
  | "robertsonian-translocation"
  | "reentrant-circuit"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/pathogenesis/SOURCES.txt */
export const PATHOGENESIS_IMAGES: Partial<
  Record<PathogenesisImageId, string>
> = {
  "blood-brain-barrier": extensionAssetUrl(bloodBrainBarrier),
  hepatotoxicity: extensionAssetUrl(hepatotoxicity),
  "low-fiber-diet": extensionAssetUrl(lowFiberDiet),
  malnutrition: extensionAssetUrl(malnutrition),
  meconium: extensionAssetUrl(meconium),
  "oxidative-stress": extensionAssetUrl(oxidativeStress),
  reuptake: extensionAssetUrl(reuptake),
  "acid-fast-bacteria": extensionAssetUrl(acidFastBacteria),
  "amyloid-plaques": extensionAssetUrl(amyloidPlaques),
  "spongiform-vacuole": extensionAssetUrl(spongiformVacuole),
  "strenuous-exercise": extensionAssetUrl(strenuousExercise),
  "v-q-mismatch": extensionAssetUrl(vqMismatch),
  radiculopathy: extensionAssetUrl(radiculopathy),
  "stocking-glove": extensionAssetUrl(stockingGlove),
  toxidrome: extensionAssetUrl(toxidrome),
  glycation: extensionAssetUrl(glycation),
  "vasa-nervorum": extensionAssetUrl(vasaNervorum),
  "clotting-cascade": extensionAssetUrl(clottingCascade),
  protease: extensionAssetUrl(protease),
  "pyogenic-infection": extensionAssetUrl(pyogenicInfection),
  "robertsonian-translocation": extensionAssetUrl(robertsonianTranslocation),
  "reentrant-circuit": extensionAssetUrl(reentrantCircuit),
};

export const PATHOGENESIS_IMAGE_ATTRIBUTIONS: Partial<
  Record<PathogenesisImageId, MediaAttribution>
> = {
  "blood-brain-barrier": {
    label: "Wikimedia Commons (Meninges diagram.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Meninges_diagram.svg",
  },
  hepatotoxicity: {
    label: "Wikimedia Commons (Cirrhosis of Alcoholic Liver Disease (5517625829).jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Cirrhosis_of_Alcoholic_Liver_Disease_(5517625829).jpg",
  },
  "low-fiber-diet": {
    label: "Wikimedia Commons (Inflammed mucous layer of the intestinal villi depicting Celiac disease.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Inflammed_mucous_layer_of_the_intestinal_villi_depicting_Celiac_disease.jpg",
  },
  malnutrition: {
    label: "Wikimedia Commons (Anemia.JPG)",
    url: "https://commons.wikimedia.org/wiki/File:Anemia.JPG",
  },
  meconium: {
    label: "Wikimedia Commons (Biliary atresia.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Biliary_atresia.jpg",
  },
  "oxidative-stress": {
    label: "Wikimedia Commons (Role of reactive oxygen species in development of cancer.png)",
    url: "https://commons.wikimedia.org/wiki/File:Role_of_reactive_oxygen_species_in_development_of_cancer.png",
  },
  reuptake: {
    label: "Wikimedia Commons (TAAR1 Dopamine.svg)",
    url: "https://commons.wikimedia.org/wiki/File:TAAR1_Dopamine.svg",
  },
  "acid-fast-bacteria": {
    label:
      "Wikimedia Commons (Acid fast bacilli of Mycobacterium tuberculosis.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Acid_fast_bacilli_of_Mycobacterium_tuberculosis.jpg",
  },
  "amyloid-plaques": {
    label:
      "Wikimedia Commons (Cerebral amyloid angiopathy -2a- amyloid beta - high mag.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Cerebral_amyloid_angiopathy_-2a-_amyloid_beta_-_high_mag.jpg",
  },
  "spongiform-vacuole": {
    label: "Wikimedia Commons (Mechanisms of amyloid fibril formation.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Mechanisms_of_amyloid_fibril_formation.jpg",
  },
  "strenuous-exercise": {
    label: "Wikimedia Commons (Fatigue.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Fatigue.jpg",
  },
  "v-q-mismatch": {
    label: "Wikimedia Commons (Emphysema H and E.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Emphysema_H_and_E.jpg",
  },
  radiculopathy: {
    label: "Wikimedia Commons (l5-radiculopathy.png)",
    url: "https://commons.wikimedia.org/wiki/File:l5-radiculopathy.png",
  },
  "stocking-glove": {
    label: "Wikimedia Commons (Diabetic Neuropathy Device pic.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Diabetic_Neuropathy_Device_pic.jpg",
  },
  toxidrome: {
    label: "Wikimedia Commons (Local copy conditions/serotonin-syndrome.png)",
    url: "https://commons.wikimedia.org/",
  },
  glycation: {
    label: "Wikimedia Commons (HbA1c ודמנציה.png)",
    url: "https://commons.wikimedia.org/wiki/File:HbA1c_%D7%95%D7%93%D7%9E%D7%A0%D7%A6%D7%99%D7%94.png",
  },
  "vasa-nervorum": {
    label: "Wikimedia Commons (Diabetic Neuropathy Device pic.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Diabetic_Neuropathy_Device_pic.jpg",
  },
  "clotting-cascade": {
    label: "Wikimedia Commons (Coagulation cascade.png)",
    url: "https://commons.wikimedia.org/wiki/File:Coagulation_cascade.png",
  },
  protease: {
    label: "Wikimedia Commons (Aspartyl protease mechanism.png)",
    url: "https://commons.wikimedia.org/wiki/File:Aspartyl_protease_mechanism.png",
  },
  "pyogenic-infection": {
    label: "Wikimedia Commons (Abscess.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Abscess.jpg",
  },
  "robertsonian-translocation": {
    label:
      "Wikimedia Commons (Down syndrome translocation up.png), David Perez derivative, CC BY-SA 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Down_syndrome_translocation_up.png",
  },
  "reentrant-circuit": {
    label: "Wikimedia Commons (Wpw2 (CardioNetworks ECGpedia).svg)",
    url: "https://commons.wikimedia.org/wiki/File:Wpw2_(CardioNetworks_ECGpedia).svg",
  },
};

export const PATHOGENESIS_IMAGE_CAPTIONS: Partial<
  Record<PathogenesisImageId, string>
> = {
  "blood-brain-barrier":
    "CNS meningeal layers and neurovascular unit — tight junctions and astrocyte end-feet restrict paracellular passage at the blood-brain barrier",
  hepatotoxicity:
    "Alcoholic cirrhosis — chronic hepatotoxic injury with nodular regeneration and portal hypertension",
  "low-fiber-diet":
    "Low dietary fiber reduces stool bulk and slows transit — predisposes to constipation and diverticulosis",
  malnutrition:
    "Severe anemia and pallor — protein-calorie malnutrition with wasting and micronutrient deficits",
  meconium:
    "Neonatal intestinal obstruction — failure to pass meconium suggests Hirschsprung disease or meconium ileus",
  "oxidative-stress":
    "Oxidative stress — imbalance of reactive oxygen species vs antioxidant defenses causing cellular damage",
  reuptake:
    "Presynaptic monoamine reuptake transporters — SERT, NET, and DAT terminate synaptic signaling",
  "acid-fast-bacteria":
    "Ziehl-Neelsen stain — red acid-fast bacilli (mycolic acid cell wall) of Mycobacterium tuberculosis",
  "amyloid-plaques":
    "Amyloid beta immunostain — extracellular brown Aβ deposits illustrate plaque-forming Alzheimer pathology",
  "spongiform-vacuole":
    "Spongiform vacuolation of cerebral cortex — hallmark histology of prion diseases such as Creutzfeldt-Jakob disease",
  "strenuous-exercise":
    "Physiologic fatigue after vigorous exertion — transient lactate and CK elevations expected",
  "v-q-mismatch":
    "Emphysema destroys alveolar walls — high V/Q dead-space physiology with impaired gas exchange",
  radiculopathy:
    "Lumbar disc herniation compressing nerve root — classic cause of radiculopathy",
  "stocking-glove":
    "Length-dependent peripheral neuropathy — distal symmetric sensory loss in stocking-glove distribution",
  toxidrome:
    "Opioid toxidrome — miosis, respiratory depression, and decreased consciousness",
  glycation:
    "Nonenzymatic glycation — HbA1c reflects glucose-bound hemoglobin and chronic hyperglycemia exposure",
  "vasa-nervorum":
    "Microvascular ischemia of vasa nervorum — key mechanism in diabetic peripheral neuropathy",
  "clotting-cascade":
    "Coagulation cascade — intrinsic, extrinsic, and common pathways converge on thrombin and fibrin formation",
  protease:
    "Aspartyl protease catalytic mechanism — peptide bond hydrolysis by activated water at the active site",
  "pyogenic-infection":
    "Cutaneous abscess with surrounding erythema — classic suppurative pyogenic bacterial infection",
  "robertsonian-translocation":
    "Robertsonian translocation — fusion of acrocentric chromosome long arms (14;21) producing balanced carrier karyotype",
  "reentrant-circuit":
    "Wolff-Parkinson-White pre-excitation — accessory pathway enables atrioventricular reentrant tachycardia (AVRT) circuit",
};

export function getPathogenesisImageForId(id: string): string | undefined {
  return PATHOGENESIS_IMAGES[id as PathogenesisImageId];
}

export function getPathogenesisImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return PATHOGENESIS_IMAGE_ATTRIBUTIONS[id as PathogenesisImageId];
}

export function getPathogenesisImageCaptionForId(
  id: string,
): string | undefined {
  return PATHOGENESIS_IMAGE_CAPTIONS[id as PathogenesisImageId];
}
