const filterTodo = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "FILTER_TODO":
      return "";
    default:
      return state;
  }
};

export default filterTodo;
