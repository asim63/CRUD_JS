export function createForm(editId, itemToEdit) {
  const form = document.createElement("form");

  form.innerHTML = `
    <h1 class="form-title">Grocery List</h1>
    <div class="form-control">
    <input type="text"
     placeholder="eg. Milk"
     class ="form-input"
     value= "${itemToEdit ? itemToEdit.name : ""}"
     />

     <button type="submit" class="form-button">
     ${editId ? "Edit item" : "Add item"}</button>
     </div>
    `;

  return form;
}
