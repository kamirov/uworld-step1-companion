import type { MediaAttribution } from "./media";
import type { ConditionEntry } from "./conditions";

import addisonDisease from "../media/images/conditions/addison-disease.jpg?url";
import asthma from "../media/images/conditions/asthma.jpg?url";
import atopicDermatitis from "../media/images/conditions/atopic-dermatitis.jpg?url";
import catScratchDisease from "../media/images/conditions/cat-scratch-disease.jpg?url";
import celiacDisease from "../media/images/conditions/celiac-disease.jpg?url";
import chikungunyaRash from "../media/images/conditions/chikungunya-rash.jpg?url";
import crohnDisease from "../media/images/conditions/crohn-disease.jpg?url";
import cushingSyndrome from "../media/images/conditions/cushing-syndrome.jpg?url";
import dengueRecoveryRash from "../media/images/conditions/dengue-recovery-rash.jpg?url";
import diabeticKetoacidosis from "../media/images/conditions/diabetic-ketoacidosis.jpg?url";
import emphysema from "../media/images/conditions/emphysema.jpg?url";
import gangrene from "../media/images/conditions/gangrene.jpg?url";
import hivInfection from "../media/images/conditions/hiv-infection.jpg?url";
import hodgkinLymphoma from "../media/images/conditions/hodgkin-lymphoma.jpg?url";
import infectiveEndocarditis from "../media/images/conditions/infective-endocarditis.jpg?url";
import lichenPlanus from "../media/images/conditions/lichen-planus.jpg?url";
import lungCancer from "../media/images/conditions/lung-cancer.jpg?url";
import lymeDisease from "../media/images/conditions/lyme-disease.jpg?url";
import lymphogranulomaVenereum from "../media/images/conditions/lymphogranuloma-venereum.jpg?url";
import malaria from "../media/images/conditions/malaria.jpg?url";
import meningesDiagram from "../media/images/conditions/meninges-diagram.svg?url";
import merkelCellCarcinoma from "../media/images/conditions/merkel-cell-carcinoma.jpg?url";
import molarPregnancyUltrasound from "../media/images/conditions/molar-pregnancy-ultrasound.jpg?url";
import multipleSclerosis from "../media/images/conditions/multiple-sclerosis.jpg?url";
import myocardialInfarction from "../media/images/conditions/myocardial-infarction.jpg?url";
import neonatalRespiratoryDistressSyndrome from "../media/images/conditions/neonatal-respiratory-distress-syndrome.jpg?url";
import nephroticSyndrome from "../media/images/conditions/nephrotic-syndrome.jpg?url";
import otitisMedia from "../media/images/conditions/otitis-media.jpg?url";
import ovarianDermoidCystHistology from "../media/images/conditions/ovarian-dermoid-cyst-histology.jpg?url";
import parkinsonDisease from "../media/images/conditions/parkinson-disease.jpg?url";
import pemphigusVulgaris from "../media/images/conditions/pemphigus-vulgaris.jpg?url";
import pneumonia from "../media/images/conditions/pneumonia.jpg?url";
import pressureUlcer from "../media/images/conditions/pressure-ulcer.jpg?url";
import primaryBiliaryCholangitis from "../media/images/conditions/primary-biliary-cholangitis.jpg?url";
import psoriasis from "../media/images/conditions/psoriasis.jpg?url";
import raggedRedFibersGomori from "../media/images/conditions/ragged-red-fibers-gomori.jpg?url";
import rheumatoidArthritis from "../media/images/conditions/rheumatoid-arthritis.jpg?url";
import rockyMountainSpottedFeverRash from "../media/images/conditions/rocky-mountain-spotted-fever-rash.jpg?url";
import sarcoidosis from "../media/images/conditions/sarcoidosis.jpg?url";
import sickleCellDisease from "../media/images/conditions/sickle-cell-disease.jpg?url";
import sjogrenSyndrome from "../media/images/conditions/sjogren-syndrome.jpg?url";
import sporotrichosis from "../media/images/conditions/sporotrichosis.jpg?url";
import systemicLupusErythematosus from "../media/images/conditions/systemic-lupus-erythematosus.jpg?url";
import tetralogyOfFallotCyanosis from "../media/images/conditions/tetralogy-of-fallot-cyanosis.jpg?url";
import tuberculosis from "../media/images/conditions/tuberculosis.jpg?url";
import typhoidFeverRoseSpots from "../media/images/conditions/typhoid-fever-rose-spots.jpg?url";
import uterineFibroids from "../media/images/conditions/uterine-fibroids.png?url";
import vasculitis from "../media/images/conditions/vasculitis.jpg?url";
import ventricularSeptalDefect from "../media/images/conditions/ventricular-septal-defect.svg?url";
import yellowFever from "../media/images/conditions/yellow-fever.jpg?url";
import zikaVirusInfection from "../media/images/conditions/zika-virus-infection.jpg?url";

export type ConditionImageId = Extract<
  ConditionEntry["id"],
  | "addison-disease"
  | "asthma"
  | "atopic-dermatitis"
  | "cat-scratch-disease"
  | "celiac-disease"
  | "chikungunya-fever"
  | "crohn-disease"
  | "cushing-syndrome"
  | "dengue-fever"
  | "diabetic-ketoacidosis"
  | "emphysema"
  | "gangrene"
  | "hiv-infection"
  | "hodgkin-lymphoma"
  | "infective-endocarditis"
  | "lichen-planus"
  | "lung-cancer"
  | "lyme-disease"
  | "lymphogranuloma-venereum"
  | "malaria"
  | "meningitis"
  | "merkel-cell-carcinoma"
  | "hydatidiform-mole"
  | "multiple-sclerosis"
  | "myocardial-infarction"
  | "neonatal-respiratory-distress-syndrome"
  | "nephrotic-syndrome"
  | "otitis-media"
  | "teratoma"
  | "parkinson-disease"
  | "pemphigus-vulgaris"
  | "pneumonia"
  | "pressure-ulcer"
  | "primary-biliary-cholangitis"
  | "psoriasis"
  | "mitochondrial-encephalomyopathy"
  | "rheumatoid-arthritis"
  | "rocky-mountain-spotted-fever"
  | "sarcoidosis"
  | "sickle-cell-disease"
  | "sjogren-syndrome"
  | "sporotrichosis"
  | "systemic-lupus-erythematosus"
  | "tetralogy-of-fallot"
  | "tuberculosis"
  | "typhoid-fever"
  | "uterine-fibroid"
  | "vasculitis"
  | "ventricular-septal-defect"
  | "yellow-fever"
  | "zika-virus-infection"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/conditions/SOURCES.txt */
export const CONDITION_IMAGES: Partial<Record<ConditionImageId, string>> = {
  "addison-disease": extensionAssetUrl(addisonDisease),
  "asthma": extensionAssetUrl(asthma),
  "atopic-dermatitis": extensionAssetUrl(atopicDermatitis),
  "cat-scratch-disease": extensionAssetUrl(catScratchDisease),
  "celiac-disease": extensionAssetUrl(celiacDisease),
  "chikungunya-fever": extensionAssetUrl(chikungunyaRash),
  "crohn-disease": extensionAssetUrl(crohnDisease),
  "cushing-syndrome": extensionAssetUrl(cushingSyndrome),
  "dengue-fever": extensionAssetUrl(dengueRecoveryRash),
  "diabetic-ketoacidosis": extensionAssetUrl(diabeticKetoacidosis),
  "emphysema": extensionAssetUrl(emphysema),
  "gangrene": extensionAssetUrl(gangrene),
  "hiv-infection": extensionAssetUrl(hivInfection),
  "hodgkin-lymphoma": extensionAssetUrl(hodgkinLymphoma),
  "infective-endocarditis": extensionAssetUrl(infectiveEndocarditis),
  "lichen-planus": extensionAssetUrl(lichenPlanus),
  "lung-cancer": extensionAssetUrl(lungCancer),
  "lyme-disease": extensionAssetUrl(lymeDisease),
  "lymphogranuloma-venereum": extensionAssetUrl(lymphogranulomaVenereum),
  "malaria": extensionAssetUrl(malaria),
  "meningitis": extensionAssetUrl(meningesDiagram),
  "merkel-cell-carcinoma": extensionAssetUrl(merkelCellCarcinoma),
  "hydatidiform-mole": extensionAssetUrl(molarPregnancyUltrasound),
  "multiple-sclerosis": extensionAssetUrl(multipleSclerosis),
  "myocardial-infarction": extensionAssetUrl(myocardialInfarction),
  "neonatal-respiratory-distress-syndrome": extensionAssetUrl(neonatalRespiratoryDistressSyndrome),
  "nephrotic-syndrome": extensionAssetUrl(nephroticSyndrome),
  "otitis-media": extensionAssetUrl(otitisMedia),
  "teratoma": extensionAssetUrl(ovarianDermoidCystHistology),
  "parkinson-disease": extensionAssetUrl(parkinsonDisease),
  "pemphigus-vulgaris": extensionAssetUrl(pemphigusVulgaris),
  "pneumonia": extensionAssetUrl(pneumonia),
  "pressure-ulcer": extensionAssetUrl(pressureUlcer),
  "primary-biliary-cholangitis": extensionAssetUrl(primaryBiliaryCholangitis),
  "psoriasis": extensionAssetUrl(psoriasis),
  "mitochondrial-encephalomyopathy": extensionAssetUrl(raggedRedFibersGomori),
  "rheumatoid-arthritis": extensionAssetUrl(rheumatoidArthritis),
  "rocky-mountain-spotted-fever": extensionAssetUrl(rockyMountainSpottedFeverRash),
  "sarcoidosis": extensionAssetUrl(sarcoidosis),
  "sickle-cell-disease": extensionAssetUrl(sickleCellDisease),
  "sjogren-syndrome": extensionAssetUrl(sjogrenSyndrome),
  "sporotrichosis": extensionAssetUrl(sporotrichosis),
  "systemic-lupus-erythematosus": extensionAssetUrl(systemicLupusErythematosus),
  "tetralogy-of-fallot": extensionAssetUrl(tetralogyOfFallotCyanosis),
  "tuberculosis": extensionAssetUrl(tuberculosis),
  "typhoid-fever": extensionAssetUrl(typhoidFeverRoseSpots),
  "uterine-fibroid": extensionAssetUrl(uterineFibroids),
  "vasculitis": extensionAssetUrl(vasculitis),
  "ventricular-septal-defect": extensionAssetUrl(ventricularSeptalDefect),
  "yellow-fever": extensionAssetUrl(yellowFever),
  "zika-virus-infection": extensionAssetUrl(zikaVirusInfection),
};

export const CONDITION_IMAGE_ATTRIBUTIONS: Partial<
  Record<ConditionImageId, string>
> = {
  "addison-disease": { label: "Wikimedia Commons (T. Addison; On...supra-renal capsules Wellcome L0018484.jpg)", url: "https://commons.wikimedia.org/wiki/File:T._Addison;_On...supra-renal_capsules_Wellcome_L0018484.jpg" },
  "asthma": { label: "Wikimedia Commons (2311 Lung Tissue.jpg)", url: "https://commons.wikimedia.org/wiki/File:2311_Lung_Tissue.jpg" },
  "atopic-dermatitis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:atopic-dermatitis.jpg" },
  "cat-scratch-disease": { label: "Wikimedia Commons (ICD-10-CM (2010).djvu)", url: "https://commons.wikimedia.org/wiki/File:ICD-10-CM_(2010).djvu" },
  "celiac-disease": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:celiac-disease.jpg" },
  "chikungunya-fever": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:chikungunya-rash.jpg" },
  "crohn-disease": { label: "Wikimedia Commons (Severe ulcerative colitis.jpg)", url: "https://commons.wikimedia.org/wiki/File:Severe_ulcerative_colitis.jpg" },
  "cushing-syndrome": { label: "Wikimedia Commons (United States Navy Medical News Letter Vol. 28, No. 5, 7 September 1956 (IA NavyMedicalNewsletter19560907).pdf)", url: "https://commons.wikimedia.org/wiki/File:United_States_Navy_Medical_News_Letter_Vol._28,_No._5,_7_September_1956_(IA_NavyMedicalNewsletter19560907).pdf" },
  "dengue-fever": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:dengue-recovery-rash.jpg" },
  "diabetic-ketoacidosis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:diabetic-ketoacidosis.jpg" },
  "emphysema": { label: "Wikimedia Commons (Emphysema H and E.jpg)", url: "https://commons.wikimedia.org/wiki/File:Emphysema_H_and_E.jpg" },
  "gangrene": { label: "Wikimedia Commons (Dry gangrene of the foot Wellcome L0062216.jpg)", url: "https://commons.wikimedia.org/wiki/File:Dry_gangrene_of_the_foot_Wellcome_L0062216.jpg" },
  "hiv-infection": { label: "Wikimedia Commons (The George Blumer edition of Billings-Forchheimer's Therapeusis of internal diseases- Anaphylaxis, Dietary, Deficiencies, Endocrins, Dvelopmental, Vasomotor, Metabolic, Digestion ... (IA georgeblumeredit04forc).pdf)", url: "https://commons.wikimedia.org/wiki/File:The_George_Blumer_edition_of_Billings-Forchheimer's_Therapeusis_of_internal_diseases-_Anaphylaxis,_Dietary,_Deficiencies,_Endocrins,_Dvelopmental,_Vasomotor,_Metabolic,_Digestion_..._(IA_georgeblumeredit04forc).pdf" },
  "hodgkin-lymphoma": { label: "Wikimedia Commons (Reed-Sternberg lymphocyte nci-vol-7172-300.jpg)", url: "https://commons.wikimedia.org/wiki/File:Reed-Sternberg_lymphocyte_nci-vol-7172-300.jpg" },
  "infective-endocarditis": { label: "Wikimedia Commons (Janeway lesion.JPG)", url: "https://commons.wikimedia.org/wiki/File:Janeway_lesion.JPG" },
  "lichen-planus": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:lichen-planus.jpg" },
  "lung-cancer": { label: "Wikimedia Commons (LungCancer-Xray-01.jpg)", url: "https://commons.wikimedia.org/wiki/File:LungCancer-Xray-01.jpg" },
  "lyme-disease": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:lyme-disease.jpg" },
  "lymphogranuloma-venereum": { label: "Wikimedia Commons (Poullignac Travaux LGV Caterpillar RM500 2013.jpg)", url: "https://commons.wikimedia.org/wiki/File:Poullignac_Travaux_LGV_Caterpillar_RM500_2013.jpg" },
  "malaria": { label: "Wikimedia Commons (Ring Forms of Plasmodium falciparum.jpg)", url: "https://commons.wikimedia.org/wiki/File:Ring_Forms_of_Plasmodium_falciparum.jpg" },
  "meningitis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:meninges-diagram.svg" },
  "merkel-cell-carcinoma": { label: "Wikimedia Commons (Merkel cell carcinoma - very high mag.jpg)", url: "https://commons.wikimedia.org/wiki/File:Merkel_cell_carcinoma_-_very_high_mag.jpg" },
  "hydatidiform-mole": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:molar-pregnancy-ultrasound.jpg" },
  "multiple-sclerosis": { label: "Wikimedia Commons (Disseminated sclerosis (IA b2810349x).pdf)", url: "https://commons.wikimedia.org/wiki/File:Disseminated_sclerosis_(IA_b2810349x).pdf" },
  "myocardial-infarction": { label: "Wikimedia Commons (ST elevation myocardial infarction ECG (cropped).jpg)", url: "https://commons.wikimedia.org/wiki/File:ST_elevation_myocardial_infarction_ECG_(cropped).jpg" },
  "neonatal-respiratory-distress-syndrome": { label: "Wikimedia Commons (Annual report - National Institutes of Health. National Heart, Lung, and Blood Advisory Council (IA annualreportnatio1985nati).pdf)", url: "https://commons.wikimedia.org/wiki/File:Annual_report_-_National_Institutes_of_Health._National_Heart,_Lung,_and_Blood_Advisory_Council_(IA_annualreportnatio1985nati).pdf" },
  "nephrotic-syndrome": { label: "Wikimedia Commons (United States Navy Medical News Letter Vol. 32 1958 Index (IA NavyMedicalNewsletter19581231Index).pdf)", url: "https://commons.wikimedia.org/wiki/File:United_States_Navy_Medical_News_Letter_Vol._32_1958_Index_(IA_NavyMedicalNewsletter19581231Index).pdf" },
  "otitis-media": { label: "Wikimedia Commons (Acute Otitis Media Stage of Resolution.jpg)", url: "https://commons.wikimedia.org/wiki/File:Acute_Otitis_Media_Stage_of_Resolution.jpg" },
  "teratoma": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:ovarian-dermoid-cyst-histology.jpg" },
  "parkinson-disease": { label: "Wikimedia Commons (The Journal of nervous and mental disease (IA journalofnervous49ameruoft).pdf)", url: "https://commons.wikimedia.org/wiki/File:The_Journal_of_nervous_and_mental_disease_(IA_journalofnervous49ameruoft).pdf" },
  "pemphigus-vulgaris": { label: "Wikimedia Commons (Pemphigus vulgaris.jpg)", url: "https://commons.wikimedia.org/wiki/File:Pemphigus_vulgaris.jpg" },
  "pneumonia": { label: "Wikimedia Commons (Annual report of the trustees (IA annualreportoftr1819bost).pdf)", url: "https://commons.wikimedia.org/wiki/File:Annual_report_of_the_trustees_(IA_annualreportoftr1819bost).pdf" },
  "pressure-ulcer": { label: "Wikimedia Commons (Decubitus ulcer stage 4.jpg)", url: "https://commons.wikimedia.org/wiki/File:Decubitus_ulcer_stage_4.jpg" },
  "primary-biliary-cholangitis": { label: "Wikimedia Commons (United States Navy Medical News Letter Vol. 22, No. 9, 13 November 1953 (IA MedicalNewsLetter19531113).pdf)", url: "https://commons.wikimedia.org/wiki/File:United_States_Navy_Medical_News_Letter_Vol._22,_No._9,_13_November_1953_(IA_MedicalNewsLetter19531113).pdf" },
  "psoriasis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:psoriasis.jpg" },
  "mitochondrial-encephalomyopathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:ragged-red-fibers-gomori.jpg" },
  "rheumatoid-arthritis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:rheumatoid-arthritis.jpg" },
  "rocky-mountain-spotted-fever": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:rocky-mountain-spotted-fever-rash.jpg" },
  "sarcoidosis": { label: "Wikimedia Commons (Sarcoidosis histology skin involvement.jpg)", url: "https://commons.wikimedia.org/wiki/File:Sarcoidosis_histology_skin_involvement.jpg" },
  "sickle-cell-disease": { label: "Wikimedia Commons (Sickle Cell Disease in Newborns and Infants- A Guide for Parents (IA sicklecelldiseas00usde).pdf)", url: "https://commons.wikimedia.org/wiki/File:Sickle_Cell_Disease_in_Newborns_and_Infants-_A_Guide_for_Parents_(IA_sicklecelldiseas00usde).pdf" },
  "sjogren-syndrome": { label: "Wikimedia Commons (Sjogren's syndrome (2).jpg)", url: "https://commons.wikimedia.org/wiki/File:Sjogren's_syndrome_(2).jpg" },
  "sporotrichosis": { label: "Wikimedia Commons (Feline sporotrichosis 4.jpg)", url: "https://commons.wikimedia.org/wiki/File:Feline_sporotrichosis_4.jpg" },
  "systemic-lupus-erythematosus": { label: "Wikimedia Commons (What Black Women Should Know About Lupus (IA whatblackwomensh00usde).pdf)", url: "https://commons.wikimedia.org/wiki/File:What_Black_Women_Should_Know_About_Lupus_(IA_whatblackwomensh00usde).pdf" },
  "tetralogy-of-fallot": { label: "Wikimedia Commons (Heart Surgery Practice.jpg)", url: "https://commons.wikimedia.org/wiki/File:Heart_Surgery_Practice.jpg" },
  "tuberculosis": { label: "Wikimedia Commons (Mycobacterium tuberculosis in Ziehl-Neelsen stained smear of sputum.jpg)", url: "https://commons.wikimedia.org/wiki/File:Mycobacterium_tuberculosis_in_Ziehl-Neelsen_stained_smear_of_sputum.jpg" },
  "typhoid-fever": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:typhoid-fever-rose-spots.jpg" },
  "uterine-fibroid": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:uterine-fibroids.png" },
  "vasculitis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:vasculitis.jpg" },
  "ventricular-septal-defect": { label: "Wikimedia Commons (Ventricular septal defect-es.svg)", url: "https://commons.wikimedia.org/wiki/File:Ventricular_septal_defect-es.svg" },
  "yellow-fever": { label: "Wikimedia Commons (John Horsey sept 24 1821 yellow fever, Allegator.jpg)", url: "https://commons.wikimedia.org/wiki/File:John_Horsey_sept_24_1821_yellow_fever,_Allegator.jpg" },
  "zika-virus-infection": { label: "Wikimedia Commons (Alexius Salvador Zika-Virus.jpg)", url: "https://commons.wikimedia.org/wiki/File:Alexius_Salvador_Zika-Virus.jpg" },
};

export const CONDITION_IMAGE_CAPTIONS: Partial<
  Record<ConditionImageId, MediaAttribution>
> = {
  "addison-disease": "Clinical or pathologic image illustrating addison disease",
  "asthma": "Clinical or pathologic image illustrating asthma",
  "atopic-dermatitis": "Clinical or pathologic image illustrating atopic dermatitis",
  "cat-scratch-disease": "Clinical or pathologic image illustrating cat scratch disease",
  "celiac-disease": "Clinical or pathologic image illustrating celiac disease",
  "chikungunya-fever": "Maculopapular chikungunya rash on the abdomen during acute illness",
  "crohn-disease": "Clinical or pathologic image illustrating crohn disease",
  "cushing-syndrome": "Clinical or pathologic image illustrating cushing syndrome",
  "dengue-fever": "Dengue recovery rash — classic 'white islands in a sea of red' pattern",
  "diabetic-ketoacidosis": "Clinical or pathologic image illustrating diabetic ketoacidosis",
  "emphysema": "Clinical or pathologic image illustrating emphysema",
  "gangrene": "Clinical or pathologic image illustrating gangrene",
  "hiv-infection": "Clinical or pathologic image illustrating hiv infection",
  "hodgkin-lymphoma": "Clinical or pathologic image illustrating hodgkin lymphoma",
  "infective-endocarditis": "Clinical or pathologic image illustrating infective endocarditis",
  "lichen-planus": "Clinical or pathologic image illustrating lichen planus",
  "lung-cancer": "Clinical or pathologic image illustrating lung cancer",
  "lyme-disease": "Clinical or pathologic image illustrating lyme disease",
  "lymphogranuloma-venereum": "Clinical or pathologic image illustrating lymphogranuloma venereum",
  "malaria": "Clinical or pathologic image illustrating malaria",
  "meningitis": "Cross-section of cranial meninges — dura mater, arachnoid mater, pia mater, and subarachnoid space",
  "merkel-cell-carcinoma": "Clinical or pathologic image illustrating merkel cell carcinoma",
  "hydatidiform-mole": "Transvaginal ultrasound of molar pregnancy — classic 'snowstorm' / bunch-of-grapes intrauterine pattern",
  "multiple-sclerosis": "Clinical or pathologic image illustrating multiple sclerosis",
  "myocardial-infarction": "Clinical or pathologic image illustrating myocardial infarction",
  "neonatal-respiratory-distress-syndrome": "Clinical or pathologic image illustrating neonatal respiratory distress syndrome",
  "nephrotic-syndrome": "Clinical or pathologic image illustrating nephrotic syndrome",
  "otitis-media": "Clinical or pathologic image illustrating otitis media",
  "teratoma": "H&E histology of ovarian dermoid cyst (mature cystic teratoma) — well-differentiated tissues from multiple germ layers",
  "parkinson-disease": "Clinical or pathologic image illustrating parkinson disease",
  "pemphigus-vulgaris": "Clinical or pathologic image illustrating pemphigus vulgaris",
  "pneumonia": "Clinical or pathologic image illustrating pneumonia",
  "pressure-ulcer": "Clinical or pathologic image illustrating pressure ulcer",
  "primary-biliary-cholangitis": "Clinical or pathologic image illustrating primary biliary cholangitis",
  "psoriasis": "Clinical or pathologic image illustrating psoriasis",
  "mitochondrial-encephalomyopathy": "Ragged red fibers (subsarcolemmal mitochondrial aggregates) on Gomori trichrome muscle biopsy in mitochondrial myopathy",
  "rheumatoid-arthritis": "Clinical or pathologic image illustrating rheumatoid arthritis",
  "rocky-mountain-spotted-fever": "Characteristic spotted rash of Rocky Mountain spotted fever on the wrist and hand",
  "sarcoidosis": "Clinical or pathologic image illustrating sarcoidosis",
  "sickle-cell-disease": "Clinical or pathologic image illustrating sickle cell disease",
  "sjogren-syndrome": "Clinical or pathologic image illustrating sjogren syndrome",
  "sporotrichosis": "Clinical or pathologic image illustrating sporotrichosis",
  "systemic-lupus-erythematosus": "Clinical or pathologic image illustrating systemic lupus erythematosus",
  "tetralogy-of-fallot": "Clinical or pathologic image illustrating tetralogy of fallot",
  "tuberculosis": "Clinical or pathologic image illustrating tuberculosis",
  "typhoid-fever": "Rose spots on the chest in typhoid fever due to Salmonella Typhi",
  "uterine-fibroid": "Uterine fibroid locations: subserosal, intramural, submucosal, pedunculated, and intraligamentous leiomyomas",
  "vasculitis": "Clinical or pathologic image illustrating vasculitis",
  "ventricular-septal-defect": "Clinical or pathologic image illustrating ventricular septal defect",
  "yellow-fever": "Clinical or pathologic image illustrating yellow fever",
  "zika-virus-infection": "Clinical or pathologic image illustrating zika virus infection",
};

export function getConditionImageForId(id: string): string | undefined {
  return CONDITION_IMAGES[id as ConditionImageId];
}

export function getConditionImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return CONDITION_IMAGE_ATTRIBUTIONS[id as ConditionImageId];
}

export function getConditionImageCaptionForId(
  id: string,
): string | undefined {
  return CONDITION_IMAGE_CAPTIONS[id as ConditionImageId];
}
