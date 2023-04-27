import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`); 
    //DO NOT ENTER SIGNUP INFO // NOT READY FOR USE WITH BACKEND
  };

  return (
    <form onSubmit={handleSubmit} className="form">
    <h3>Create Account</h3>
    <label>
        Name:
        <input
          type="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
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

      <button type="submit">Sign up</button>
    </form>
  );
};

export default Register;
