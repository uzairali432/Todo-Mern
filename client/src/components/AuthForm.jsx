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
      }
      alert(`${isLogin ? 'Logged in' : 'Registered'} successfully`);
    } catch (err) {
      console.error('Auth error', err);
    }
  };

  const activeError = isLogin ? loginError : registerError;

  return (
    <div className="auth-form">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>
        <button type="submit" disabled={isLoggingIn || isRegistering}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      {activeError ? (
        <p className="error">
          {activeError?.data?.message ||
            (activeError?.data?.details && activeError.data.details.join(', ')) ||
            'Something went wrong'}
        </p>
      ) : null}
      <button
        type="button"
        className="toggle-mode"
        onClick={() => setMode(isLogin ? 'register' : 'login')}
      >
        {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
      </button>
    </div>
  );
}

export default AuthForm;


