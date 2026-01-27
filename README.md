# Grocery Bud – CRUD Application (Vanilla JavaScript)

Grocery Bud is a simple CRUD (Create, Read, Update, Delete) web application built using JavaScript, HTML, and CSS. The main goal of this project is to understand how frontend applications work internally without relying on any JavaScript frameworks. The application allows users to add grocery items, edit existing items, mark items as completed, delete items, and persist data using the browser’s `localStorage`.

This project focuses more on **logic, state management, and clean code structure** rather than visual design, making it ideal for learning core JavaScript concepts.

---

## Project Overview

The application maintains a list of grocery items where each item contains an `id`, a `name`, and a `completed` status. All data is stored locally in the browser, meaning the grocery list remains intact even after refreshing the page. The UI is dynamically rendered based on the current state of the application, ensuring consistency between the data and what the user sees on the screen.

---

## How the Application Works

When the application starts, it retrieves existing items from `localStorage` and stores them in a global `items` array. A central `render()` function is responsible for clearing the UI and rebuilding it every time the state changes. Instead of manually updating individual DOM elements, the app updates the data first and then re-renders the UI, following a **state-driven approach**.

The form serves a dual purpose. When adding a new item, the form works in “add mode”. When editing an existing item, an `editId` is set, the input field is pre-filled with the item’s name, and the submit button changes its text to indicate edit mode. Once the edit is completed, the state resets and the form returns to add mode.

---

## CRUD Operations Explained

Creating an item involves generating a new object with a unique `id`, the entered item name, and a default `completed` value set to `false`. Reading items simply means rendering the list from the current state. Updating is done by identifying the item using its `id` and updating only the required properties using immutable patterns like `map()`. Deleting removes the item from the state array and updates `localStorage` accordingly.

Marking an item as completed is handled by toggling the `completed` property, which immediately reflects in the UI.

---

## Project Structure

The project is divided into multiple JavaScript modules to keep the code clean and maintainable. Each module has a single responsibility, such as handling the form, managing item rendering, or controlling the application state. This modular approach makes the project easier to understand, debug, and extend.

---

## Steps to Build This Project

To build this project from scratch, start by creating the basic HTML structure and linking a JavaScript entry file using ES modules. Next, define the data structure for a grocery item and implement `localStorage` helper functions to store and retrieve data. After that, build the form component and the item list component separately. Implement CRUD logic by updating the state first and calling a central render function after every change. Finally, enhance the UI with basic styling and user feedback.

---

## Key Concepts and Learning Outcomes

Through this project, I learned how CRUD applications manage data and UI together. I gained a strong understanding of JavaScript modules, event handling, immutable state updates, conditional rendering, and browser storage. Most importantly, I learned how real-world applications separate logic into reusable components and rely on application state rather than direct DOM manipulation.

---

## How to Run the Project

Clone the repository and open the project folder in a code editor. Since the project uses ES modules, it is recommended to run it using a local development server such as VS Code Live Server. Open the application in a browser and start adding grocery items.

---

## Future Improvements

Possible future enhancements include adding animations, filtering completed and uncompleted items, improving accessibility, and extending the project into a more advanced state-managed application.

---

## Conclusion

This Grocery Bud project demonstrates how a complete CRUD application can be built using plain JavaScript while maintaining clean structure and scalable logic. It serves as a strong foundation for understanding frontend development before moving on to modern frameworks.
