import React from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import Filter from "../containers/Filter";

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Filter />
  </div>
);

// mapDispatchToState= () => {
//   addTodo
// }

export default App;
