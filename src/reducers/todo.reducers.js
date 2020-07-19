const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      let currentItem
      state.map( item => {
        if (item.id === action.id) {
          currentItem = {
            complete: true
          }
        }
      })
      return [...state, action.id];
    default:
      return state;
  }
};
export default todos;
