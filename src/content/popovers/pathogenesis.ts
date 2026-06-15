import { getPathogenesisById } from "../../data/pathogenesis";
import {
  getPathogenesisImageAttributionForId,
  getPathogenesisImageCaptionForId,
  getPathogenesisImageForId,
} from "../../data/pathogenesisMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderPathogenesisPopover(
  pathogenesisId: string,
  popover: HTMLDivElement,
): boolean {
  const entry = getPathogenesisById(pathogenesisId);
  if (!entry || !popover) return false;

  const imageSrc = getPathogenesisImageForId(pathogenesisId);
  const imageCaption = getPathogenesisImageCaptionForId(pathogenesisId);
  const imageAttribution = getPathogenesisImageAttributionForId(pathogenesisId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(entry.name, "pathogenesis", entry.etymology)}
    <div class="usmle-organ-popover__meaning">${entry.definition}</div>
  `,
    `
    ${renderListSection("Examples", entry.examples)}
    ${renderListSection("Distinguish from", entry.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", entry.boardsPearls)}
    ${entry.pediatrics ? renderPediatricsSection(entry.pediatrics) : ""}
  `,
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${entry.name} diagram`,
          caption: imageCaption,
          attribution: imageAttribution,
        })}
      </div>
    `;
  } else {
    popover.innerHTML = bodyContent;
  }
  return true;
}
