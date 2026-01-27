import { createForm } from "./form.js";
import { createItems } from "./items.js";
import { groceryItems } from "./data.js";

function getLocalStorage() {
  const list = localStorage.getItem("grocery-list");
  if (list) {
    return JSON.parse(list);
  }
  return [];
}

function setLocalStorage(itemsArray) {
  localStorage.setItem("grocery-list", JSON.stringify(itemsArray));
}

//Making render function
let items = groceryItems;
let editId = null;

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const formElement = createForm(
    editId,
    editId ? items.find((item) => item.id === editId) : null,
  );
  const itemsElement = createItems(items);

  app.appendChild(formElement);
  app.appendChild(itemsElement);
}
render();

function generateID() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
export function addItem(itemName) {
  const newItem = {
    name: itemName,
    completed: false,
    id: generateID(),
  };
  items = [...items, newItem];
  render();
  setTimeout(() => alert("Item Added Successfully!"), 0);
}
export function updateItemName(newName) {
  items = items.map((item) => {
    if (item.id === editId) {
      return { ...item, name: newName };
    }
    return item;
  });

  editId = null;
  setLocalStorage(items);
  render();
  setTimeout(() => alert("Item Updated Successfully!"), 0);
}
