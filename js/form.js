export function createForm(editId, itemToEdit) {
  const form = document.createElement("form");

  form.innerHTML = `
    <h1 class="form-title">Grocery List</h1>
    <div class="form-control">
    <input type="text"
     placeholder="  eg. Milk"
     class ="form-input"
     value= "${itemToEdit ? itemToEdit.name : ""}"
     />

     <button type="submit" class="form-button">
     ${editId ? "Edit item" : "Add item"}</button>
     </div>
    `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector(".form-input");
    const value = input.value.trim();

    if (!value) {
      alert("please provide value", "error");
      return;
    }

    addItem(value);

    input.value = "";
  });
  return form;
}
