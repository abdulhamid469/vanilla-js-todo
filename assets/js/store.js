const store = {
  todos: [
    {
        id: "1",
        title: "Task One",
        complated: false
    },
    {
        id: "2",
        title: "Task Two",
        complated: true
    },
    {
        id: "3",
        title: "Task Three",
        complated: true
    }
  ] 
};

const storeHandler = {
  get(target, property) {
    console.log("Oh Your are trying to get data", property);
    return target[property];
  },
  set(target, property, value) {
    console.log(target, property, value);
    // console.log("Oh Your are trying to set data", property);
    target[property] = value;
    if(property == "todos") {
      window.dispatchEvent(new Event("todosChange"));
    }
    return true;
  }
}

const storeProxy = new Proxy(store, storeHandler);

function addTodo(newTodo) {
 storeProxy.todos = [...storeProxy.todos, newTodo]; 
}

export { addTodo };
// export default store;
export default storeProxy;