import React, { useState } from 'react';
import LoginDiv from '../components/Login';
import Register from '../components/Register';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="auth-box">
        <h1>Tastoria</h1>

        {/* Render login or register based on state, and pass toggleForm prop */}
        {isLogin ? (
          <LoginDiv toggleForm={() => setIsLogin(false)} />
        ) : (
          <Register toggleForm={() => setIsLogin(true)} />
        )}
      </div>
    </>
  );
};

export default Login;
