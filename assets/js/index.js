import render from "./render.js";
import { addTodo } from "./store.js";

window.addEventListener("todosChange", () => {
    render();
})

render();

// Form Get 
const form = document.querySelector("#form");
const todoTitleInput = document.querySelector(".todo-title-input");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const todotitle = todoTitleInput.value;
    const newTodo = {id: crypto.randomUUID, title: todotitle, complated: false }
    addTodo(newTodo);
})