// Starter component for TODO list
// TODO: Implement state management and API calls
import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  // TODO: Add todo creation logic
  const addTodo = () => {
    // Implement add todo
  };

  // TODO: Add todo deletion logic
  const deleteTodo = (id) => {
    // Implement delete todo
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
