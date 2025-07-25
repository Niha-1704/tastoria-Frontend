import React, { useState } from "react";

const LoginDiv = ({ toggleForm }) => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const setUserName = (e) => {
    let copy = { ...userData };
    copy.userName = e.target.value;
    setUserData(copy);
  };

  const setUserPassword = (e) => {
    let copy = { ...userData };
    copy.password = e.target.value;
    setUserData(copy);
  };

  const handletoLogin = () => {
    console.log(userData);
  };

  return (
    <div className="main-container">
      <div className="image-side"></div>
      <div className="login-box">
        <div className="form-box">
          <input
            type="text"
            onChange={setUserName}
            placeholder="Enter username:"
          />

          <input
            type="password"
            onChange={setUserPassword}
            placeholder="Enter password"
          />

          <button onClick={handletoLogin}>LOGIN</button>

          {}
          <div className="toggle-message">
            Don’t have an account?{" "}
            <span onClick={toggleForm} style={{ cursor: "pointer", color: "blue" }}>
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDiv;
