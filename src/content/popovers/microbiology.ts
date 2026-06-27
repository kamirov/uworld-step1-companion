import { getMicrobiologyById } from "../../data/microbiology";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderRichPopoverContent,
} from "../popoverShared";

function formatMicrobeType(type: string): string {
  return type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function renderMicrobiologyPopover(
  microbiologyId: string,
  popover: HTMLDivElement,
): boolean {
  const entry = getMicrobiologyById(microbiologyId);
  if (!entry || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(entry.name, "microbiology", entry.etymology)}
    <div class="usmle-organ-popover__layer"><strong>Type:</strong> ${formatMicrobeType(entry.type)}</div>
    <div class="usmle-organ-popover__meaning">${entry.definition}</div>
    ${entry.mnemonic ? `<div class="usmle-organ-popover__section-label">Mnemonic</div><div class="usmle-organ-popover__mechanism">${entry.mnemonic}</div>` : ""}
  `,
    `
    ${renderListSection("Morphology", entry.morphology ?? [])}
    ${renderListSection("Virulence factors", entry.virulenceFactors ?? [])}
    ${renderListSection("Transmission", entry.transmission ?? [])}
    ${renderListSection("Diseases", entry.diseases)}
    ${renderListSection("Classic presentation", entry.classicPresentation ?? [])}
    ${renderListSection("Diagnosis", entry.diagnosis ?? [])}
    ${renderListSection("Treatment", entry.treatment ?? [])}
    ${renderListSection("Distinguish from", entry.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", entry.boardsPearls)}
    ${entry.pediatrics ? renderPediatricsSection(entry.pediatrics) : ""}
  `,
  );
  return true;
}
