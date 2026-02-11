import { useState } from 'react';
import {
  useGetTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from '../services/rtkApi';

export default function TodoList() {
  const { data: todos = [], isLoading, isError } = useGetTodosQuery();
  const [createTodo] = useCreateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();
  const [newTitle, setNewTitle] = useState('');

  const handleAddTodo = async () => {
    if (!newTitle.trim()) return;
    await createTodo({ title: newTitle.trim() });
    setNewTitle('');
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
  };

  const handleToggleTodo = async (id) => {
    await toggleTodo(id);
  };

  if (isLoading) return <p>Loading todos...</p>;
  if (isError) return <p>Failed to load todos</p>;

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => handleToggleTodo(todo._id)}
            >
              {todo.title}
            </span>
            <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
