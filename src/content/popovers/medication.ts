import { getMedicationById } from "../../data/medications";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderMedicationPopover(
  medicationId: string,
  popover: HTMLDivElement,
): boolean {
  const medication = getMedicationById(medicationId);
  if (!medication || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(medication.name, "medication", medication.etymology)}
    <div class="usmle-organ-popover__layer"><strong>Class:</strong> ${medication.drugClass}</div>
    <div class="usmle-organ-popover__section-label">Mechanism</div>
    <div class="usmle-organ-popover__mechanism">${medication.mechanism}</div>
  `,
    `
    ${renderListSection("Indications", medication.indications)}
    ${renderListSection("Adverse effects", medication.adverseEffects)}
    ${renderListSection("Boards pearls", medication.boardsPearls)}
  `,
  );
  return true;
}
