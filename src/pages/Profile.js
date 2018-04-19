import React from 'react';
import { connect } from 'react-redux';
import Stripe from './Stripe';

const Profile = ({ currentUser, isSubscribed }) => {
  return (
    <div>
      <h2>User page</h2>
      <ul>
        <li>email: {currentUser.email}</li>

        {!isSubscribed && <Stripe />}
        {isSubscribed && (
          <li>
            {/* TODO show plan name instead */}
            plan_id {currentUser.plan_id}
          </li>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  isSubscribed: !!state.auth.currentUser.plan_id // TODO provide a better solution for this
});

export default connect(mapStateToProps)(Profile);
