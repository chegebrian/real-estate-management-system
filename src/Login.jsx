import React from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    // navigate("/AdminDashboard");
    navigate("/AgentDashboard");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
