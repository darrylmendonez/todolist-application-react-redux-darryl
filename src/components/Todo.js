import React from "react";

const Todo = ({ text, complete, onClick }) => {
  return (
    <li onClick={onClick}>
      {text} {complete.toString()}
    </li>
  );
};

export default Todo;
