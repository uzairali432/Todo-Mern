import { useState } from 'react';
import { useLoginMutation, useRegisterMutation } from '../services/rtkApi';

function AuthForm() {
  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [login, { isLoading: isLoggingIn, error: loginError }] = useLoginMutation();
  const [register, { isLoading: isRegistering, error: registerError }] = useRegisterMutation();

  const isLogin = mode === 'login';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: formValues.email,
      password: formValues.password,
    };
    if (!isLogin) {
      payload.name = formValues.name;
    }

    try {
      const fn = isLogin ? login : register;
      const res = await fn(payload).unwrap();
      if (res?.token) {
        localStorage.setItem('token', res.token);
        onAuthSuccess();
      }
    } catch (err) {
      console.error('Auth error', err);
    }
  };

  const activeError = isLogin ? loginError : registerError;

  return (
    <div className="auth-form">
      <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
            required
            minLength={6}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          disabled={isLoggingIn || isRegistering}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoggingIn || isRegistering ? 'Loading...' : (isLogin ? 'Login' : 'Sign Up')}
        </button>
      </form>
      {activeError && (
        <p className="mt-4 text-red-600 text-sm">
          {activeError?.data?.message ||
            (activeError?.data?.details && activeError.data.details.join(', ')) ||
            'Something went wrong'}
        </p>
      )}
      <button
        type="button"
        className="mt-4 w-full text-indigo-600 hover:text-indigo-500 text-sm"
        onClick={() => setMode(isLogin ? 'register' : 'login')}
      >
        {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
      </button>
    </div>
  );
}

export default AuthForm;


