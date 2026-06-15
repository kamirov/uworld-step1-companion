import { getMetabolismById } from "../../data/metabolism";
import {
  getMetabolismImageAttributionForId,
  getMetabolismImageCaptionForId,
  getMetabolismImageForId,
} from "../../data/metabolismMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderMetabolismPopover(
  metabolismId: string,
  popover: HTMLDivElement,
): boolean {
  const entry = getMetabolismById(metabolismId);
  if (!entry || !popover) return false;

  const imageSrc = getMetabolismImageForId(metabolismId);
  const imageCaption = getMetabolismImageCaptionForId(metabolismId);
  const imageAttribution = getMetabolismImageAttributionForId(metabolismId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(entry.name, "metabolism", entry.etymology)}
    <div class="usmle-organ-popover__meaning">${entry.definition}</div>
  `,
    `
    ${renderListSection("Pathway", entry.pathway)}
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
