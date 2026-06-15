import type { MediaAttribution } from "./media";
import type { SignalingEntry } from "./signaling";

import insulinLikeGrowthFactor1 from "../media/images/signaling/insulin-like-growth-factor-1.jpg?url";

export type SignalingImageId = Extract<
  SignalingEntry["id"],
  "insulin-like-growth-factor-1"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/signaling/SOURCES.txt */
export const SIGNALING_IMAGES: Partial<Record<SignalingImageId, string>> = {
  "insulin-like-growth-factor-1": extensionAssetUrl(insulinLikeGrowthFactor1),
};

export const SIGNALING_IMAGE_ATTRIBUTIONS: Partial<
  Record<SignalingImageId, MediaAttribution>
> = {
  "insulin-like-growth-factor-1": {
    label: "Wikimedia Commons (Acromegaly facial features.JPEG)",
    url: "https://commons.wikimedia.org/wiki/File:Acromegaly_facial_features.JPEG",
  },
};

export const SIGNALING_IMAGE_CAPTIONS: Partial<
  Record<SignalingImageId, string>
> = {
  "insulin-like-growth-factor-1":
    "Chronic GH excess elevates IGF-1 — acral and facial overgrowth in acromegaly",
};

export function getSignalingImageForId(id: string): string | undefined {
  return SIGNALING_IMAGES[id as SignalingImageId];
}

export function getSignalingImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return SIGNALING_IMAGE_ATTRIBUTIONS[id as SignalingImageId];
}

export function getSignalingImageCaptionForId(id: string): string | undefined {
  return SIGNALING_IMAGE_CAPTIONS[id as SignalingImageId];
}
