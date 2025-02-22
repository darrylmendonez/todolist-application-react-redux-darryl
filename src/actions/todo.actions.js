let nextTodoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  payload: {
    id: nextTodoId++,
    text,
    complete: false
  }
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const filter = filter => ({
  type: "FILTER_TODO",
  filter
});

export const typeFilter = {
  SHOW_COMPLETE: "SHOW_COMPLETE",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_ALL: "SHOW_ALL"
};
