import { editCompleted, removeItem, setEditId } from "./app.js";

export function createSingleItem(item) {
  const div = document.createElement("div");
  div.className = "single_item";

  div.innerHTML = `
  <input type="checkbox"  ${item.completed ? "checked" : ""}/>
  <p style="text-decoration: ${item.completed ? "line-through" : "none"}">
  ${item.name}</p>

  <button class = "btn icon-btn edit-btn" type='button'>
    <i class="fa-solid fa-pen-to-square"></i>
    </button>

    <button class="btn icon-btn remove-btn" type='button'>
    <i class="fa-solid fa-trash"></i>
    </button>

  `;

  const editBtn = div.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => setEditId(item.id));

  const removeBtn = div.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => removeItem(item.id));

  const checkbox = div.querySelector('input[type"checkbox"]');
  checkbox.addEventListener("change", () => editCompleted(item.id));
  return div;
}
