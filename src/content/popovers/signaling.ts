import { getSignalingById } from "../../data/signaling";
import {
  getSignalingImageAttributionForId,
  getSignalingImageCaptionForId,
  getSignalingImageForId,
} from "../../data/signalingMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderSignalingPopover(
  signalingId: string,
  popover: HTMLDivElement,
): boolean {
  const molecule = getSignalingById(signalingId);
  if (!molecule || !popover) return false;

  const imageSrc = getSignalingImageForId(signalingId);
  const imageCaption = getSignalingImageCaptionForId(signalingId);
  const imageAttribution = getSignalingImageAttributionForId(signalingId);

  const meta = [
    `<strong>Type:</strong> ${molecule.type}`,
    molecule.source ? `<strong>Source:</strong> ${molecule.source}` : "",
    molecule.receptor ? `<strong>Receptor:</strong> ${molecule.receptor}` : "",
  ]
    .filter(Boolean)
    .join(" · ");

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(molecule.name, "signaling", molecule.etymology)}
    ${meta ? `<div class="usmle-organ-popover__layer">${meta}</div>` : ""}
    <div class="usmle-organ-popover__section-label">Function</div>
    <div class="usmle-organ-popover__mechanism">${molecule.function}</div>
    ${molecule.mnemonic ? `<div class="usmle-organ-popover__section-label">Mnemonic</div><div class="usmle-organ-popover__mechanism">${molecule.mnemonic}</div>` : ""}
  `,
    `
    ${renderListSection("Clinical relevance", molecule.clinicalRelevance)}
    ${renderListSection("Distinguish from", molecule.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", molecule.boardsPearls)}
    ${molecule.pediatrics ? renderPediatricsSection(molecule.pediatrics) : ""}
  `,
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      ${renderPopoverMediaBlock({
        src: imageSrc,
        alt: molecule.name,
        caption: imageCaption,
        attribution: imageAttribution,
      })}
      ${bodyContent}
    `;
  } else {
    popover.innerHTML = bodyContent;
  }
  return true;
}
