import { getMusculoskeletalById } from "../../data/musculoskeletal";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderMusculoskeletalPopover(
  musculoskeletalId: string,
  popover: HTMLDivElement,
): boolean {
  const entry = getMusculoskeletalById(musculoskeletalId);
  if (!entry || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(entry.name, "musculoskeletal", entry.etymology)}
    <div class="usmle-organ-popover__meaning">${entry.definition}</div>
  `,
    `
    ${entry.anatomy ? `<div class="usmle-organ-popover__layer"><strong>Anatomy:</strong> ${entry.anatomy}</div>` : ""}
    ${entry.innervation ? `<div class="usmle-organ-popover__layer"><strong>Innervation:</strong> ${entry.innervation}</div>` : ""}
    ${renderListSection("Action", entry.action)}
    ${renderListSection("Clinical relevance", entry.clinicalRelevance)}
    ${renderListSection("Distinguish from", entry.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", entry.boardsPearls)}
    ${entry.pediatrics ? renderPediatricsSection(entry.pediatrics) : ""}
  `,
  );
  return true;
}
