import render from "./render.js";
import store from "./store.js";

window.addEventListener("todosChange", () => {
    console.log("Event Fired");
    render();
})

store.todos = ["item 3"];

render();