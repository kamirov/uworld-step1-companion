import { getOrganById } from "../../data/organs";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderOrganPopover(organId: string, popover: HTMLDivElement): boolean {
  const organ = getOrganById(organId);
  if (!organ || !popover) return false;

  const derivatives =
    organ.derivatives && organ.derivatives.length > 0
      ? renderListSection("Derivatives", organ.derivatives)
      : "";

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(organ.name, "organ", organ.etymology)}
    <div class="usmle-organ-popover__layer"><strong>Germ layer:</strong> ${organ.germLayer}</div>
    <div class="usmle-organ-popover__origin">${organ.origin}</div>
    ${derivatives}
    ${organ.functionSummary ? `<div class="usmle-organ-popover__section-label">Function</div><div class="usmle-organ-popover__mechanism">${organ.functionSummary}</div>` : ""}
    ${organ.pediatrics ? `<div class="usmle-organ-popover__section"><div class="usmle-organ-popover__section-label">Pediatrics</div><div class="usmle-organ-popover__mechanism">${organ.pediatrics}</div></div>` : ""}
  `,
    `
    ${renderListSection("Common pathologies", organ.commonPathologies ?? [])}
    ${renderListSection("Metastasis", organ.cancerMetastasis ?? [])}
    ${renderListSection("Step 1 pearls", organ.step1Pearls ?? [])}
  `,
  );
  return true;
}
