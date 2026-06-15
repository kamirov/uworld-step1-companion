import { createElement } from "lucide";
import {
  CATEGORY_LEGEND,
  IMAGE_FLAG_LEGEND,
} from "../shared/categoryLegend";
import {
  buildMissingMediaPrompt,
  clearQueue as clearMissingMediaQueue,
  getQueue as getMissingMediaQueue,
  missingMediaCountLabel,
} from "../shared/missingMediaQueue";
import {
  buildRegenerationPrompt,
  clearQueue,
  getQueue,
  regenerationCountLabel,
} from "../shared/regenerationQueue";

const legendEl = document.getElementById("legend");
const countEl = document.getElementById("regeneration-count");
const generateButton = document.getElementById(
  "generate-prompt",
) as HTMLButtonElement | null;
const feedbackEl = document.getElementById("copy-feedback");
const missingMediaCountEl = document.getElementById("missing-media-count");
const mediaGenerationButton = document.getElementById(
  "media-generation",
) as HTMLButtonElement | null;
const missingFeedbackEl = document.getElementById("missing-copy-feedback");

function renderLegend(): void {
  if (!legendEl) return;

  const entries = [
    ...CATEGORY_LEGEND.map((entry) => ({
      color: entry.color,
      icon: entry.icon,
      label: entry.label,
    })),
    {
      color: IMAGE_FLAG_LEGEND.color,
      icon: IMAGE_FLAG_LEGEND.icon,
      label: IMAGE_FLAG_LEGEND.label,
    },
  ];

  legendEl.innerHTML = entries
    .map((entry) => {
      const icon = createElement(entry.icon, {
        class: "legend-icon",
        "stroke-width": 2,
        width: 12,
        height: 12,
        color: entry.color,
        "aria-hidden": "true",
      });

      return `
        <div class="legend-item">
          <span class="legend-swatch" style="background:${entry.color}"></span>
          ${icon.outerHTML}
          <span class="legend-label">${entry.label}</span>
        </div>
      `;
    })
    .join("");
}

function updateRegenerationCount(count: number): void {
  if (countEl) {
    countEl.textContent = regenerationCountLabel(count);
  }
  if (generateButton) {
    generateButton.disabled = count === 0;
  }
}

function updateMissingMediaCount(count: number): void {
  if (missingMediaCountEl) {
    missingMediaCountEl.textContent = missingMediaCountLabel(count);
  }
  if (mediaGenerationButton) {
    mediaGenerationButton.disabled = count === 0;
  }
}

async function refreshQueues(): Promise<void> {
  const [regenerationItems, missingMediaItems] = await Promise.all([
    getQueue(),
    getMissingMediaQueue(),
  ]);
  updateRegenerationCount(regenerationItems.length);
  updateMissingMediaCount(missingMediaItems.length);
}

async function showCopiedFeedback(
  element: HTMLElement | null,
  fallbackMessage = "Copied!",
): Promise<void> {
  if (!element) return;

  const originalText = element.textContent;
  element.textContent = fallbackMessage;
  element.hidden = false;

  await new Promise<void>((resolve) => {
    window.setTimeout(() => {
      element.hidden = true;
      element.textContent = originalText;
      resolve();
    }, 2000);
  });
}

async function handleGeneratePrompt(): Promise<void> {
  const items = await getQueue();
  if (items.length === 0) return;

  const prompt = buildRegenerationPrompt(items);

  try {
    await navigator.clipboard.writeText(prompt);
    await showCopiedFeedback(feedbackEl);
  } catch {
    await showCopiedFeedback(feedbackEl, "Could not copy to clipboard");
  }

  await clearQueue();
  updateRegenerationCount(0);
}

async function handleMediaGeneration(): Promise<void> {
  const items = await getMissingMediaQueue();
  if (items.length === 0) return;

  const prompt = buildMissingMediaPrompt(items);

  try {
    await navigator.clipboard.writeText(prompt);
    await showCopiedFeedback(missingFeedbackEl);
  } catch {
    await showCopiedFeedback(missingFeedbackEl, "Could not copy to clipboard");
  }

  await clearMissingMediaQueue();
  updateMissingMediaCount(0);
}

renderLegend();
void refreshQueues();

generateButton?.addEventListener("click", () => {
  void handleGeneratePrompt();
});

mediaGenerationButton?.addEventListener("click", () => {
  void handleMediaGeneration();
});

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName !== "local") return;

  if (changes.regenerationQueue) {
    const items = changes.regenerationQueue.newValue;
    updateRegenerationCount(Array.isArray(items) ? items.length : 0);
  }

  if (changes.missingMediaQueue) {
    const items = changes.missingMediaQueue.newValue;
    updateMissingMediaCount(Array.isArray(items) ? items.length : 0);
  }
});
