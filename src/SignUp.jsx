import React from "react";

function SignUp() {
  return (
    <form>
      <div>
        <label htmlFor="fName">First Name:</label>
        <input type="text" name="fName" id="fName" />
      </div>
      <div>
        <label htmlFor="lName">Last Name:</label>
        <input type="text" name="lName" id="lName" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
