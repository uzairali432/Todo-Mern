import { useState } from 'react';
import {
  useGetTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useToggleTodoMutation,
  useGetRecommendationsMutation,
} from '../services/rtkApi';

export default function TodoList() {
  const { data: todos = [], isLoading, isError } = useGetTodosQuery();
  const [createTodo] = useCreateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();
  const [getRecommendations] = useGetRecommendationsMutation();
  const [newTitle, setNewTitle] = useState('');
  const [showAiSection, setShowAiSection] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [aiPrompt, setAiPrompt] = useState('');

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

  const handleAiSuggest = async () => {
    if (!aiPrompt.trim()) return;
    try {
      const result = await getRecommendations(aiPrompt).unwrap();
      setAiSuggestions(result);
    } catch (error) {
      console.error('Failed to get recommendations:', error);
      setAiSuggestions(['Error fetching suggestions']);
    }
  };

  const addAiSuggestion = (suggestion) => {
    setNewTitle(suggestion);
  };

  const handleToggleTodo = async (id) => {
    await toggleTodo(id);
  };

  if (isLoading) return <p className="text-center text-gray-500">Loading todos...</p>;
  if (isError) return <p className="text-center text-red-500">Failed to load todos</p>;

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setShowAiSection(!showAiSection)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-4"
        >
          {showAiSection ? 'Hide AI Suggestions' : 'Show AI Suggestions'}
        </button>
        {showAiSection && (
          <div className="mb-4 p-4 bg-blue-50 rounded-md">
            <input
              type="text"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="Enter a prompt for AI suggestions (e.g., 'things to do for a healthy lifestyle')"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 mb-2"
            />
            <button
              onClick={handleAiSuggest}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mb-2"
            >
              Generate AI Suggestions
            </button>
            <ul className="space-y-1">
              {aiSuggestions.map((suggestion, index) => (
                <li key={index} className="flex items-center justify-between p-2 bg-white rounded">
                  <span>{suggestion}</span>
                  <button
                    onClick={() => addAiSuggestion(suggestion)}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-sm"
                  >
                    Add
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
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
