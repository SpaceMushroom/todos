import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ onSubmit }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = () => {
    onSubmit(newTodo);
  }; // vykdo funkciją iš App.js addTodo()

  return (
    <form onSubmit={handleSubmit} className="newTodoForm">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} // setNewTodo paima imputo vertę ir nustato newTodo
        type="text"
        id="item"
        required
      ></input>
      <button className="button">Submit</button>
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;
