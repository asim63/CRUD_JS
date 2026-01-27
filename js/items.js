import { createSingleItem } from "./single_items.js";

export function createItems(itemsArray) {
  const container = document.createElement("div");
  container.className = "items";

  if (itemsArray.length > 0) {
    container.classList.add("has-items");
  }

  itemsArray.forEach((item) => {
    const itemElement = createSingleItem(item);
    container.appendChild(itemElement);
  });
  return container;
}
