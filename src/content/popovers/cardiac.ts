import { getHeartMurmurById } from "../../data/heartMurmurs";
import { getHeartSoundById } from "../../data/heartSounds";
import { getHemodynamicById } from "../../data/hemodynamics";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderDefinitionPopover,
  renderListSection,
  renderPediatricsSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderHeartSoundPopover(
  heartSoundId: string,
  popover: HTMLDivElement,
): boolean {
  const sound = getHeartSoundById(heartSoundId);
  if (!sound) return false;

  return renderDefinitionPopover(
    popover,
    sound.name,
    "heart-sound",
    sound.meaning,
    "Common conditions",
    sound.conditions,
    sound.etymology,
  );
}

export function renderHeartMurmurPopover(
  heartMurmurId: string,
  popover: HTMLDivElement,
): boolean {
  const murmur = getHeartMurmurById(heartMurmurId);
  if (!murmur || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(murmur.name, "heart-murmur", murmur.etymology)}
    <div class="usmle-organ-popover__meaning">${murmur.meaning}</div>
  `,
    `
    ${renderListSection("Classic associations", murmur.conditions)}
    ${murmur.pediatrics ? renderPediatricsSection(murmur.pediatrics) : ""}
  `,
  );
  return true;
}

export function renderHemodynamicPopover(
  hemodynamicId: string,
  popover: HTMLDivElement,
): boolean {
  const term = getHemodynamicById(hemodynamicId);
  if (!term || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(term.name, "hemodynamic", term.etymology)}
    <div class="usmle-organ-popover__meaning">${term.definition}</div>
  `,
    renderListSection("Factors that affect it", term.factors),
  );
  return true;
}
