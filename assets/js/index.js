import render from "./render.js";
import { addTodo, deleteTodo, toggleCompleted } from "./store.js";

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
    const newTodo = {id: crypto.randomUUID(), title: todotitle, complated: false }
    addTodo(newTodo);
});

const todos = document.querySelector(".todos");

todos.addEventListener("click", (e) => {
    const target = e.target;
    if(target.classList.contains("delete-todo-button")) {
        console.log("You click cross button");
        const id = target.closest(".todo").dataset.id;
        deleteTodo(id);
    }
});

todos.addEventListener("change", (e) => {
    const target = e.target;
    if(target.classList.contains(".todo-checkbox"));
    const id = target.closest(".todo").dataset.id;
    console.log(id);
})