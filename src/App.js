import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  }); // kiekvieną kartą kai naudosim [setTodos] ištrauks iš local storage ir parsins sringą į duomenis

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]); // ši funkcija pasileis jeigu kažkas pasikeis [todos] array ir duomenis išsaugos localstorage

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: uuidv4(), title, completed: false }];
    });
  }; // funkcija naudojama TodoForm.jsx pridėti naują todo (ima esamą todos array ir prideda parametrus)

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
  }; // funkcija skirta checked junginėjimui, paima dabartinį todos masyvą ir prasuka per loops jeigu id sutampa pakeičia completed statusą tada gražina naują masyvą

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }; // gražina naują masyvą be sutapusio id

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default App;
