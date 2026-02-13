import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AuthForm from './components/AuthForm';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        {isAuthenticated ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800">Todo App</h1>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
            <TodoList />
          </div>
        ) : (
          <AuthForm onAuthSuccess={handleAuthSuccess} />
        )}
      </div>
    </div>
  );
}

export default App;
