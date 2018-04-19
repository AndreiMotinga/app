import React from 'react';
import Button from 'material-ui/Button';

const Subscription = ({ currentUser, isSubscribed, handleOpen }) => {
  return (
    <div>
      {/* TODO show plan name */}
      <div>Your Plan: {currentUser.plan_id}</div>
      <br />
      <Button onClick={handleOpen}>Upgrade Subscription</Button>
    </div>
  );
};

export default Subscription;
