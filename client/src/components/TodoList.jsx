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

  if (isLoading) return <p className="text-center text-gray-500">Loading todos...</p>;
  if (isError) return <p className="text-center text-red-500">Failed to load todos</p>;

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add a new todo"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          onClick={handleAddTodo}
          className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add Todo
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
            <span
              className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
              onClick={() => handleToggleTodo(todo._id)}
            >
              {todo.title}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
}
