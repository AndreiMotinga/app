import React from 'react';

const SigninForm = () => (
  <div>
    <h1> login </h1>
    <form id="signin">
      <label>
        Email: <input type="email" name="email" />
      </label>
      <br />
      <label>
        Password: <input type="password" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default SigninForm;
