import { getEcgFindingById } from "../../data/ecgFindings";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderEcgFindingPopover(
  ecgFindingId: string,
  popover: HTMLDivElement,
): boolean {
  const finding = getEcgFindingById(ecgFindingId);
  if (!finding || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(finding.name, "ecg", finding.etymology)}
    <div class="usmle-organ-popover__meaning">${finding.interpretation}</div>
    <div class="usmle-organ-popover__layer"><strong>Territory:</strong> ${finding.territory}</div>
  `,
    `
    ${renderListSection("Think of", finding.thinkOf)}
    ${renderListSection("Distinguish from", finding.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", finding.boardsPearls)}
    ${finding.pediatrics ? renderPediatricsSection(finding.pediatrics) : ""}
  `,
  );
  return true;
}
