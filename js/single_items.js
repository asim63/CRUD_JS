export function createSingleItem(item) {
  const div = document.createElement("div");
  div.className = "single_item";

  div.innerHTML = `
  <input type="checkbox"  ${item.completed ? "checked" : ""}/>
  <p style='text-decoration: ${item.completed ? "line-through" : "none"}">
  ${item.name}</p>

  <button class = "btn icon-btn edit-btn" type='button'>
    <i class="fa-solid fa-pen-to-square"></i>
    </button>

    <button class="btn icon-btn remove-btn" type='button'>
    <i class="fa-solid fa-trash"></i>
    </button>

  `;
  return div;
}
