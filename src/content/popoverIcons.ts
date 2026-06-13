import {
  Activity,
  Atom,
  AudioLines,
  Bone,
  CircleDot,
  ClipboardList,
  createElement,
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

const CATEGORY_ICONS: Record<PopoverCategory, IconNode> = {
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

function popoverTitleClass(category: PopoverCategory): string {
  const modifier =
    category === "organ"
      ? null
      : category === "heart-sound" || category === "heart-murmur"
        ? "heart"
        : category;

  return modifier
    ? `usmle-organ-popover__title usmle-organ-popover__title--${modifier}`
    : "usmle-organ-popover__title";
}

function renderIcon(category: PopoverCategory): string {
  const icon = createElement(CATEGORY_ICONS[category], {
    class: "usmle-organ-popover__icon",
    "stroke-width": 2,
    width: 14,
    height: 14,
    "aria-hidden": "true",
  });
  return icon.outerHTML;
}

export function renderPopoverTitle(
  name: string,
  category: PopoverCategory,
  etymology?: string,
): string {
  const etymologyHtml = etymology
    ? `<div class="usmle-organ-popover__etymology">${etymology}</div>`
    : "";
  return `
    <div class="${popoverTitleClass(category)}">
      <span class="usmle-organ-popover__title-inner">${renderIcon(category)}<span class="usmle-organ-popover__title-text">${name}</span></span>
    </div>
    ${etymologyHtml}
  `;
}
