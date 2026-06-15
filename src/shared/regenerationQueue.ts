import {
  getCategoryLabel,
  type PopoverCategory,
} from "./categoryLegend";

export type RegenerationItem = {
  category: PopoverCategory;
  id: string;
  name: string;
};

const STORAGE_KEY = "regenerationQueue";

export function itemKey(item: Pick<RegenerationItem, "category" | "id">): string {
  return `${item.category}:${item.id}`;
}

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

export function isMarked(
  category: PopoverCategory,
  id: string,
): Promise<boolean> {
  const key = itemKey({ category, id });
  return getQueue().then((items) =>
    items.some((item) => itemKey(item) === key),
  );
}

export function toggleItem(item: RegenerationItem): Promise<boolean> {
  return new Promise((resolve) => {
    readQueueFromStorage((items) => {
      const key = itemKey(item);
      const existingIndex = items.findIndex(
        (entry) => itemKey(entry) === key,
      );
      let marked: boolean;

      if (existingIndex === -1) {
        items.push(item);
        marked = true;
      } else {
        items.splice(existingIndex, 1);
        marked = false;
      }

      writeQueueToStorage(items, () => resolve(marked));
    });
  });
}

export function clearQueue(): Promise<void> {
  return new Promise((resolve) => {
    writeQueueToStorage([], resolve);
  });
}

export function buildRegenerationPrompt(items: RegenerationItem[]): string {
  const lines = items.map(
    (item) =>
      `- ${getCategoryLabel(item.category)}: ${item.name} (${item.id})`,
  );

  return [
    "These images have been marked as incorrect or inadequate by a user, please regenerate them:",
    "",
    ...lines,
  ].join("\n");
}

export function regenerationCountLabel(count: number): string {
  if (count === 0) return "0 images need to be regenerated";
  if (count === 1) return "1 image needs to be regenerated";
  return `${count} images need to be regenerated`;
}
