import { getLabValueById } from "../../data/labValues";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderLabValuePopover(labValueId: string, popover: HTMLDivElement): boolean {
  const lab = getLabValueById(labValueId);
  if (!lab || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(lab.name, "lab", lab.etymology)}
    <div class="usmle-organ-popover__meaning">${lab.measures}</div>
    <div class="usmle-organ-popover__layer"><strong>Normal range:</strong> ${lab.normalRange}</div>
  `,
    `
    ${renderListSection("↑ Causes", lab.increasedCauses)}
    ${renderListSection("↓ Causes", lab.decreasedCauses)}
    ${renderListSection("Pair with", lab.pairWith ?? [])}
    ${renderListSection("Boards pearls", lab.boardsPearls)}
  `,
  );
  return true;
}
