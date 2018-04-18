/** Auth page
 * that renders either signup or signin form
 */
import React from 'react';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Auth = ({ auth }) => {
  const isSignedIn = !!auth.currentUser.email;

  // prevent from rendering if user already signed in
  if (isSignedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <SigninForm />
      <br />
      <SignupForm />
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Auth);
