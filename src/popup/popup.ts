import { createElement } from "lucide";
import { CATEGORY_LEGEND } from "../shared/categoryLegend";

const legendEl = document.getElementById("legend");

function renderLegend(): void {
  if (!legendEl) return;

  legendEl.innerHTML = CATEGORY_LEGEND.map((entry) => {
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
  }).join("");
}

renderLegend();
