import React, { useState } from "react";
import { addTodo } from "../actions/todo.actions";
import { connect } from "react-redux";

// psuedo
// setting my state with a prop todos: []
// add onClick -> handleSubmit
// handleSubmit -> dispatch(addTodo({type: addTodo, item: userInput}))

const AddTodo = props => {
  const [state, setState] = useState("");
  const { addTodo } = props;
  const handleChange = e => {
    setState(e.target.value);
  };
  const handleSubmit = () => {
    console.log("state: ", state);
    addTodo(state);
  };
  return (
    <React.Fragment>
      <input type="text" onChange={handleChange} value={state} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
      >
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
