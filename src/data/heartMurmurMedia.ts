import type { MediaAttribution } from "./media";
import type { HeartMurmurEntry } from "./heartMurmurs";
import { getHeartMurmurById } from "./heartMurmurs";

import crescendoDecrescendo from "../media/audio/heart-murmurs/crescendo-decrescendo.mp3?url";
import diastolicRumble from "../media/audio/heart-murmurs/diastolic-rumble.mp3?url";
import ejectionClick from "../media/audio/heart-murmurs/ejection-click.mp3?url";

export type HeartMurmurAudioId = HeartMurmurEntry["id"];

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/audio/heart-murmurs/SOURCES.txt */
export const HEART_MURMUR_AUDIO: Record<HeartMurmurAudioId, string> = {
  "crescendo-decrescendo": extensionAssetUrl(crescendoDecrescendo),
  "diastolic-rumble": extensionAssetUrl(diastolicRumble),
  "ejection-click": extensionAssetUrl(ejectionClick),
};

export const HEART_MURMUR_AUDIO_ATTRIBUTIONS: Record<
  HeartMurmurAudioId,
  MediaAttribution
> = {
  "crescendo-decrescendo": {
    label: "Teaching Heart Auscultation (Adult Case 4)",
    url: "https://teachingheartauscultation.com/download/1734/",
  },
  "diastolic-rumble": {
    label: "Teaching Heart Auscultation (Adult Case 3)",
    url: "https://teachingheartauscultation.com/download/1721/",
  },
  "ejection-click": {
    label: "Teaching Heart Auscultation (Case 6)",
    url: "https://teachingheartauscultation.com/download/1114/",
  },
};

export const HEART_MURMUR_AUDIO_CAPTIONS: Record<HeartMurmurAudioId, string> =
  {
    "crescendo-decrescendo": "Aortic stenosis (diamond murmur)",
    "diastolic-rumble": "Mitral stenosis (rumble)",
    "ejection-click": "Bicuspid aortic valve (click)",
  };

export function getHeartMurmurAudioForId(
  id: string,
): string | undefined {
  return HEART_MURMUR_AUDIO[id as HeartMurmurAudioId];
}

export function getHeartMurmurAudioAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return HEART_MURMUR_AUDIO_ATTRIBUTIONS[id as HeartMurmurAudioId];
}

export function getHeartMurmurAudioCaptionForId(
  id: string,
): string | undefined {
  return HEART_MURMUR_AUDIO_CAPTIONS[id as HeartMurmurAudioId];
}

export function getHeartMurmurAudioForMurmur(
  murmurId: string,
): string | undefined {
  return getHeartMurmurById(murmurId)
    ? getHeartMurmurAudioForId(murmurId)
    : undefined;
}
