/** Auth page
 * that renders either signup or signin form
 */
import React from 'react';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

const Auth = () => (
  <div>
    <SigninForm />
    <br />
    <SignupForm />
  </div>
);

export default Auth;
