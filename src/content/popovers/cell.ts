import { getCellById } from "../../data/cells";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderCellPopover(cellId: string, popover: HTMLDivElement): boolean {
  const cell = getCellById(cellId);
  if (!cell || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(cell.name, "cell", cell.etymology)}
    <div class="usmle-organ-popover__meaning">${cell.definition}</div>
  `,
    `
    ${renderListSection("Characteristics", cell.characteristics)}
    ${renderListSection("Normal lab results", cell.normalLabResults ?? [])}
    ${renderListSection("Clinical relevance", cell.clinicalRelevance)}
    ${renderListSection("Distinguish from", cell.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", cell.boardsPearls)}
    ${cell.pediatrics ? renderPediatricsSection(cell.pediatrics) : ""}
  `,
  );
  return true;
}
