export const SCAN_ZONE = {
  QUESTION: 0,
  CONTENT: 1,
  EXPLANATION: 2,
  OTHER: 3,
} as const;

export type ScanZone = (typeof SCAN_ZONE)[keyof typeof SCAN_ZONE];

export interface ScanAreaSelector {
  selector: string;
  zone: ScanZone;
  forceVisible?: boolean;
}

export interface SiteScanConfig {
  kind: "uworld" | "reddit" | "generic-medical";
  fingerprintMode: "content" | "url";
  areaGroups: readonly (readonly ScanAreaSelector[])[];
}

const UWORLD_CONFIG: SiteScanConfig = {
  kind: "uworld",
  fingerprintMode: "content",
  areaGroups: [
    [
      {
        selector: "#questionInformation",
        zone: SCAN_ZONE.QUESTION,
        forceVisible: true,
      },
      {
        selector: "#explanation",
        zone: SCAN_ZONE.EXPLANATION,
        forceVisible: true,
      },
    ],
  ],
};

const REDDIT_CONFIG: SiteScanConfig = {
  kind: "reddit",
  fingerprintMode: "url",
  areaGroups: [
    [{ selector: "main", zone: SCAN_ZONE.CONTENT }],
    [
      {
        selector:
          "shreddit-post, shreddit-comment, article, [role='main'], [data-testid='post-container'], [data-testid='comment']",
        zone: SCAN_ZONE.CONTENT,
      },
    ],
  ],
};

const GENERIC_MEDICAL_CONFIG: SiteScanConfig = {
  kind: "generic-medical",
  fingerprintMode: "url",
  areaGroups: [
    [{ selector: "[role='main']", zone: SCAN_ZONE.CONTENT }],
    [{ selector: "main", zone: SCAN_ZONE.CONTENT }],
    [{ selector: "article", zone: SCAN_ZONE.CONTENT }],
    [
      {
        selector:
          "#content, #main-content, .content, .main-content, .article, .article-body, .article-content, .entry-content, .post-content, .abstract, .body",
        zone: SCAN_ZONE.CONTENT,
      },
    ],
  ],
};

function isRedditHost(hostname: string): boolean {
  return (
    hostname === "reddit.com" ||
    hostname === "www.reddit.com" ||
    hostname === "old.reddit.com" ||
    hostname === "new.reddit.com"
  );
}

function isUWorldHost(hostname: string): boolean {
  return hostname === "uworld.com" || hostname.endsWith(".uworld.com");
}

export function getSiteScanConfig(
  loc: Location = window.location,
): SiteScanConfig {
  const hostname = loc.hostname.toLowerCase();

  if (isUWorldHost(hostname)) return UWORLD_CONFIG;
  if (isRedditHost(hostname)) return REDDIT_CONFIG;
  return GENERIC_MEDICAL_CONFIG;
}
