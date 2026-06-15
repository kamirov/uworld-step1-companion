import {
  getHeartMurmurAudioAttributionForId,
  getHeartMurmurAudioCaptionForId,
  getHeartMurmurAudioForId,
} from "../../data/heartMurmurMedia";
import { getHeartMurmurById } from "../../data/heartMurmurs";
import { getHeartSoundById } from "../../data/heartSounds";
import { getHemodynamicById } from "../../data/hemodynamics";
import {
  getHemodynamicImageAttributionForId,
  getHemodynamicImageCaptionForId,
  getHemodynamicImageForId,
} from "../../data/hemodynamicMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderDefinitionPopover,
  renderListSection,
  renderPediatricsSection,
  renderPopoverAudioBlock,
  renderPopoverMediaBlock,
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

  const audioSrc = getHeartMurmurAudioForId(heartMurmurId);
  const audioCaption = getHeartMurmurAudioCaptionForId(heartMurmurId);
  const audioAttribution = getHeartMurmurAudioAttributionForId(heartMurmurId);

  const header = `
    ${renderPopoverTitle(murmur.name, "heart-murmur", murmur.etymology)}
    <div class="usmle-organ-popover__meaning">${murmur.meaning}</div>
  `;
  const sections = `
    ${renderListSection("Classic associations", murmur.conditions)}
    ${murmur.pediatrics ? renderPediatricsSection(murmur.pediatrics) : ""}
  `;
  const bodyContent = renderRichPopoverContent(header, sections);

  popover.classList.add("usmle-organ-popover--rich");
  if (audioSrc && audioCaption && audioAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverAudioBlock({
          src: audioSrc,
          caption: audioCaption,
          attribution: audioAttribution,
        })}
      </div>
    `;
  } else {
    popover.innerHTML = bodyContent;
  }
  return true;
}

export function renderHemodynamicPopover(
  hemodynamicId: string,
  popover: HTMLDivElement,
): boolean {
  const term = getHemodynamicById(hemodynamicId);
  if (!term || !popover) return false;

  const imageSrc = getHemodynamicImageForId(hemodynamicId);
  const imageCaption = getHemodynamicImageCaptionForId(hemodynamicId);
  const imageAttribution = getHemodynamicImageAttributionForId(hemodynamicId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(term.name, "hemodynamic", term.etymology)}
    <div class="usmle-organ-popover__meaning">${term.definition}</div>
  `,
    renderListSection("Factors that affect it", term.factors),
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${term.name} illustration`,
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
