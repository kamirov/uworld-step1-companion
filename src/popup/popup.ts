import { createElement } from "lucide";
import {
  CATEGORY_LEGEND,
  IMAGE_FLAG_LEGEND,
} from "../shared/categoryLegend";
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

function updateCount(count: number): void {
  if (countEl) {
    countEl.textContent = regenerationCountLabel(count);
  }
  if (generateButton) {
    generateButton.disabled = count === 0;
  }
}

async function refreshQueue(): Promise<void> {
  const items = await getQueue();
  updateCount(items.length);
}

async function handleGeneratePrompt(): Promise<void> {
  const items = await getQueue();
  if (items.length === 0) return;

  const prompt = buildRegenerationPrompt(items);

  try {
    await navigator.clipboard.writeText(prompt);
    if (feedbackEl) {
      feedbackEl.hidden = false;
      window.setTimeout(() => {
        if (feedbackEl) feedbackEl.hidden = true;
      }, 2000);
    }
  } catch {
    if (feedbackEl) {
      feedbackEl.textContent = "Could not copy to clipboard";
      feedbackEl.hidden = false;
    }
  }

  await clearQueue();
  updateCount(0);
}

renderLegend();
void refreshQueue();

generateButton?.addEventListener("click", () => {
  void handleGeneratePrompt();
});

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName !== "local" || !changes.regenerationQueue) return;
  const items = changes.regenerationQueue.newValue;
  updateCount(Array.isArray(items) ? items.length : 0);
});
