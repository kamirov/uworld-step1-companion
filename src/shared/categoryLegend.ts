import {
  Activity,
  Atom,
  AudioLines,
  Bone,
  CircleDot,
  ClipboardList,
  Dna,
  Droplets,
  FlaskConical,
  Gauge,
  GitBranch,
  HeartPulse,
  Layers,
  Lightbulb,
  Microscope,
  Pill,
  Radio,
  Stethoscope,
  Syringe,
  type IconNode,
} from "lucide";

export type PopoverCategory =
  | "organ"
  | "heart-sound"
  | "heart-murmur"
  | "hemodynamic"
  | "symptom"
  | "medication"
  | "lab"
  | "nephron"
  | "condition"
  | "protein"
  | "signaling"
  | "ecg"
  | "procedure"
  | "clinical-strategy"
  | "cell"
  | "pathogenesis"
  | "metabolism"
  | "microbiology"
  | "musculoskeletal";

export type CategoryLegendEntry = {
  id: PopoverCategory;
  label: string;
  chipClass: string;
  color: string;
  icon: IconNode;
};

export const CATEGORY_ICONS: Record<PopoverCategory, IconNode> = {
  organ: Layers,
  "heart-sound": HeartPulse,
  "heart-murmur": AudioLines,
  hemodynamic: Gauge,
  symptom: Stethoscope,
  medication: Pill,
  lab: FlaskConical,
  nephron: Droplets,
  condition: ClipboardList,
  protein: Dna,
  signaling: Radio,
  ecg: Activity,
  procedure: Syringe,
  "clinical-strategy": Lightbulb,
  cell: CircleDot,
  pathogenesis: GitBranch,
  metabolism: Atom,
  microbiology: Microscope,
  musculoskeletal: Bone,
};

export const CATEGORY_LEGEND: CategoryLegendEntry[] = [
  { id: "organ", label: "Organ", chipClass: "usmle-organ-chip", color: "#1e40af", icon: Layers },
  { id: "heart-sound", label: "Heart sound", chipClass: "usmle-heart-sound-chip", color: "#be123c", icon: HeartPulse },
  { id: "heart-murmur", label: "Heart murmur", chipClass: "usmle-heart-murmur-chip", color: "#be123c", icon: AudioLines },
  { id: "hemodynamic", label: "Hemodynamic", chipClass: "usmle-hemodynamic-chip", color: "#047857", icon: Gauge },
  { id: "symptom", label: "Symptom", chipClass: "usmle-symptom-chip", color: "#b45309", icon: Stethoscope },
  { id: "medication", label: "Medication", chipClass: "usmle-medication-chip", color: "#6d28d9", icon: Pill },
  { id: "lab", label: "Lab value", chipClass: "usmle-lab-chip", color: "#0e7490", icon: FlaskConical },
  { id: "nephron", label: "Nephron segment", chipClass: "usmle-nephron-chip", color: "#a21caf", icon: Droplets },
  { id: "condition", label: "Condition", chipClass: "usmle-condition-chip", color: "#be123c", icon: ClipboardList },
  { id: "protein", label: "Protein", chipClass: "usmle-protein-chip", color: "#be185d", icon: Dna },
  { id: "signaling", label: "Signaling", chipClass: "usmle-signaling-chip", color: "#0f766e", icon: Radio },
  { id: "ecg", label: "ECG finding", chipClass: "usmle-ecg-chip", color: "#4338ca", icon: Activity },
  { id: "procedure", label: "Procedure", chipClass: "usmle-procedure-chip", color: "#c2410c", icon: Syringe },
  { id: "clinical-strategy", label: "Clinical strategy", chipClass: "usmle-clinical-strategy-chip", color: "#0369a1", icon: Lightbulb },
  { id: "cell", label: "Cell", chipClass: "usmle-cell-chip", color: "#6d28d9", icon: CircleDot },
  { id: "pathogenesis", label: "Pathogenesis", chipClass: "usmle-pathogenesis-chip", color: "#b45309", icon: GitBranch },
  { id: "metabolism", label: "Metabolism", chipClass: "usmle-metabolism-chip", color: "#047857", icon: Atom },
  { id: "microbiology", label: "Microbiology", chipClass: "usmle-microbiology-chip", color: "#0f766e", icon: Microscope },
  { id: "musculoskeletal", label: "Musculoskeletal", chipClass: "usmle-musculoskeletal-chip", color: "#475569", icon: Bone },
];

const CATEGORY_LABELS = Object.fromEntries(
  CATEGORY_LEGEND.map((entry) => [entry.id, entry.label]),
) as Record<PopoverCategory, string>;

export function getCategoryLabel(category: PopoverCategory): string {
  return CATEGORY_LABELS[category];
}
