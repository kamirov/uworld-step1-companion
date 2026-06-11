import type { MediaAttribution } from "./media";
import type { HeartMurmurEntry } from "./heartMurmurs";
import { getHeartMurmurById } from "./heartMurmurs";

import crescendoDecrescendo from "../media/audio/heart-murmurs/crescendo-decrescendo.mp3?url";
import diastolicRumble from "../media/audio/heart-murmurs/diastolic-rumble.mp3?url";
import ejectionClick from "../media/audio/heart-murmurs/ejection-click.mp3?url";
import harshSystolicEjectionMurmur from "../media/audio/heart-murmurs/harsh-systolic-ejection-murmur.mp3?url";
import atrialSeptalDefectMurmur from "../media/audio/heart-murmurs/atrial-septal-defect-murmur.mp3?url";
import patentDuctusArteriosusMurmur from "../media/audio/heart-murmurs/patent-ductus-arteriosus-murmur.mp3?url";
import aorticRegurgitationMurmur from "../media/audio/heart-murmurs/aortic-regurgitation-murmur.mp3?url";

export type HeartMurmurAudioId = HeartMurmurEntry["id"];

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/audio/heart-murmurs/SOURCES.txt */
export const HEART_MURMUR_AUDIO: Record<HeartMurmurAudioId, string> = {
  "crescendo-decrescendo": extensionAssetUrl(crescendoDecrescendo),
  "diastolic-rumble": extensionAssetUrl(diastolicRumble),
  "ejection-click": extensionAssetUrl(ejectionClick),
  "harsh-systolic-ejection-murmur": extensionAssetUrl(harshSystolicEjectionMurmur),
  "atrial-septal-defect-murmur": extensionAssetUrl(atrialSeptalDefectMurmur),
  "patent-ductus-arteriosus-murmur": extensionAssetUrl(patentDuctusArteriosusMurmur),
  "aortic-regurgitation-murmur": extensionAssetUrl(aorticRegurgitationMurmur),
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
  "harsh-systolic-ejection-murmur": {
    label: "Teaching Heart Auscultation (Congenital Case 2)",
    url: "https://teachingheartauscultation.com/download/1110/",
  },
  "atrial-septal-defect-murmur": {
    label: "Teaching Heart Auscultation (Congenital Case 1)",
    url: "https://teachingheartauscultation.com/download/1109/",
  },
  "patent-ductus-arteriosus-murmur": {
    label: "Teaching Heart Auscultation (Congenital Case 3)",
    url: "https://teachingheartauscultation.com/download/1111/",
  },
  "aortic-regurgitation-murmur": {
    label: "Teaching Heart Auscultation (Congenital Case 4)",
    url: "https://teachingheartauscultation.com/download/1112/",
  },
};

export const HEART_MURMUR_AUDIO_CAPTIONS: Record<HeartMurmurAudioId, string> =
  {
    "crescendo-decrescendo": "Aortic stenosis (diamond murmur)",
    "diastolic-rumble": "Mitral stenosis (rumble)",
    "ejection-click": "Bicuspid aortic valve (click)",
    "harsh-systolic-ejection-murmur": "Pulmonary stenosis / RVOT (harsh ejection murmur)",
    "atrial-septal-defect-murmur": "Atrial septal defect (flow murmur)",
    "patent-ductus-arteriosus-murmur": "Patent ductus arteriosus (machinery murmur)",
    "aortic-regurgitation-murmur": "Aortic regurgitation (diastolic decrescendo)",
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
