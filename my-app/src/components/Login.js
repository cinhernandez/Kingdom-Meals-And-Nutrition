import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    //DO NOT ENTER LOGIN INFO // NOT READY FOR USE WITH BACKEND
  };

  return (
    <div className="login-form">
    <form onSubmit={handleSubmit} className="form">
    <h3>Welcome</h3>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>

      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
