import React from "react";

function Login() {
  return (
    <form>
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
