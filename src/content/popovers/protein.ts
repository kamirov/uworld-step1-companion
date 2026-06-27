import { getProteinById } from "../../data/proteins";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderProteinPopover(proteinId: string, popover: HTMLDivElement): boolean {
  const protein = getProteinById(proteinId);
  if (!protein || !popover) return false;

  const meta = [
    protein.gene ? `<strong>Gene:</strong> ${protein.gene}` : "",
    protein.location ? `<strong>Location:</strong> ${protein.location}` : "",
  ]
    .filter(Boolean)
    .join(" · ");

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(protein.name, "protein", protein.etymology)}
    ${meta ? `<div class="usmle-organ-popover__layer">${meta}</div>` : ""}
    <div class="usmle-organ-popover__section-label">Function</div>
    <div class="usmle-organ-popover__mechanism">${protein.function}</div>
  `,
    `
    ${renderListSection("Mutation causes", protein.mutationCauses)}
    ${renderListSection("Distinguish from", protein.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", protein.boardsPearls)}
  `,
  );
  return true;
}
