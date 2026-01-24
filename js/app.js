import { createForm } from "./form.js";
//import { createItems } from "./items.js";

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
let items = getLocalStorage();
let editId = null;

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const formElement = createForm(
    editId,
    editId ? items.find((item) => item.id === editId) : null,
  );

  //const itemsElement = createItems(items);
  app.appendChild(formElement);
  // app.appendChild(itemsElement);
}
render();
