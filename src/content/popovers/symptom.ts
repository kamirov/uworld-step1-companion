import { getSymptomById } from "../../data/symptoms";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderSymptomPopover(symptomId: string, popover: HTMLDivElement): boolean {
  const symptom = getSymptomById(symptomId);
  if (!symptom || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(symptom.name, "symptom", symptom.etymology)}
    <div class="usmle-organ-popover__meaning">${symptom.definition}</div>
    <div class="usmle-organ-popover__section-label">Mechanism</div>
    <div class="usmle-organ-popover__mechanism">${symptom.mechanism}</div>
    ${symptom.pediatrics ? renderPediatricsSection(symptom.pediatrics) : ""}
  `,
    `
    ${renderListSection("Think of", symptom.thinkOf)}
    ${renderListSection("Pair with", symptom.pairWith)}
    ${renderListSection("Distinguish from", symptom.distinguishFrom ?? [])}
  `,
  );
  return true;
}
