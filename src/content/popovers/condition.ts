import { getConditionById } from "../../data/conditions";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderConditionPopover(
  conditionId: string,
  popover: HTMLDivElement,
): boolean {
  const condition = getConditionById(conditionId);
  if (!condition || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(condition.name, "condition", condition.etymology)}
    <div class="usmle-organ-popover__meaning">${condition.definition}</div>
    <div class="usmle-organ-popover__section-label">Pathophysiology</div>
    <div class="usmle-organ-popover__mechanism">${condition.pathophysiology}</div>
  `,
    `
    ${renderListSection("Classic presentation", condition.classicPresentation)}
    ${renderListSection("Key findings", condition.keyFindings ?? [])}
    ${renderListSection("Key labs", condition.keyLabs ?? [])}
    ${renderListSection("Associations", condition.associations ?? [])}
    ${renderListSection("Complications", condition.complications ?? [])}
    ${renderListSection("Distinguish from", condition.distinguishFrom ?? [])}
    ${renderListSection("Treatment", condition.treatment)}
    ${renderListSection("Boards pearls", condition.boardsPearls)}
    ${condition.pediatrics ? renderPediatricsSection(condition.pediatrics) : ""}
  `,
  );
  return true;
}
