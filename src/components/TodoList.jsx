import PropTypes from "prop-types";
import "./Todo.css";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="container">
      <h2>You have {todos.length} Todos</h2>
      <ul className="list">
        {todos.length === 0 && "No todos"}
        {/* tikrina ar todos array tuščias, jei tuščia parašo "No todos" */}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)} // jeigu paduotum {deleteTodo(todo.id)} tada neveikia reikia būtinai funkcijos
                className="buttonDelete"
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
