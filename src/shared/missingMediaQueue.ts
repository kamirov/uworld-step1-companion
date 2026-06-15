import { getCategoryLabel, type PopoverCategory } from "./categoryLegend";
import { itemKey, type RegenerationItem } from "./regenerationQueue";

const STORAGE_KEY = "missingMediaQueue";

function readQueueFromStorage(
  callback: (items: RegenerationItem[]) => void,
): void {
  chrome.storage.local.get(STORAGE_KEY, (result) => {
    const items = result[STORAGE_KEY];
    callback(Array.isArray(items) ? (items as RegenerationItem[]) : []);
  });
}

function writeQueueToStorage(
  items: RegenerationItem[],
  callback?: () => void,
): void {
  chrome.storage.local.set({ [STORAGE_KEY]: items }, () => {
    callback?.();
  });
}

export function getQueue(): Promise<RegenerationItem[]> {
  return new Promise((resolve) => {
    readQueueFromStorage(resolve);
  });
}

export function addItem(item: RegenerationItem): Promise<void> {
  return new Promise((resolve) => {
    readQueueFromStorage((items) => {
      const key = itemKey(item);
      if (items.some((entry) => itemKey(entry) === key)) {
        resolve();
        return;
      }

      items.push(item);
      writeQueueToStorage(items, resolve);
    });
  });
}

export function removeItem(
  category: PopoverCategory,
  id: string,
): Promise<void> {
  return new Promise((resolve) => {
    readQueueFromStorage((items) => {
      const key = itemKey({ category, id });
      const nextItems = items.filter((entry) => itemKey(entry) !== key);
      if (nextItems.length === items.length) {
        resolve();
        return;
      }

      writeQueueToStorage(nextItems, resolve);
    });
  });
}

export function clearQueue(): Promise<void> {
  return new Promise((resolve) => {
    writeQueueToStorage([], resolve);
  });
}

export function buildMissingMediaPrompt(items: RegenerationItem[]): string {
  const lines = items.map(
    (item) =>
      `- ${getCategoryLabel(item.category)}: ${item.name} (${item.id})`,
  );

  return [
    "These items were viewed by a user but have no media attached. Please find and attach appropriate media for each:",
    "",
    ...lines,
  ].join("\n");
}

export function missingMediaCountLabel(count: number): string {
  if (count === 0) return "0 items need media";
  if (count === 1) return "1 item needs media";
  return `${count} items need media`;
}
