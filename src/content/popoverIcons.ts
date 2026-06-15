import { createElement } from "lucide";
import {
  CATEGORY_ICONS,
  type PopoverCategory,
} from "../shared/categoryLegend";

export type { PopoverCategory } from "../shared/categoryLegend";

function popoverTitleClass(category: PopoverCategory): string {
  const modifier =
    category === "organ"
      ? null
      : category === "heart-sound" || category === "heart-murmur"
        ? "heart"
        : category;

  return modifier
    ? `usmle-organ-popover__title usmle-organ-popover__title--${modifier}`
    : "usmle-organ-popover__title";
}

function renderIcon(category: PopoverCategory): string {
  const icon = createElement(CATEGORY_ICONS[category], {
    class: "usmle-organ-popover__icon",
    "stroke-width": 2,
    width: 14,
    height: 14,
    "aria-hidden": "true",
  });
  return icon.outerHTML;
}

export function renderPopoverTitle(
  name: string,
  category: PopoverCategory,
  etymology?: string,
): string {
  const etymologyHtml = etymology
    ? `<div class="usmle-organ-popover__etymology">${etymology}</div>`
    : "";
  return `
    <div class="${popoverTitleClass(category)}">
      <span class="usmle-organ-popover__title-inner">${renderIcon(category)}<span class="usmle-organ-popover__title-text">${name}</span></span>
    </div>
    ${etymologyHtml}
  `;
}
