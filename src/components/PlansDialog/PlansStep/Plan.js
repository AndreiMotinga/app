import React from 'react';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

const Plan = ({ select }) => (
  <div className="Plan">
    <Paper>
      <div className="Plan_header">
        <span className="Plan_name">
          Unlimited Messaging Therapy <strong>Basic</strong>
        </span>
      </div>
      <div className="Plan_body">
        <div className="Plan_body_price">$32</div>
        <div className="Plan_body_duration">/wk</div>
        <div className="Plan_body_feature">Text, video & audio messaging</div>
        <div className="Plan_body_feature">1 therapist check-in per day</div>
      </div>
      <div className="Plan_footer">
        <Button onClick={select} variant="raised" color="primary">
          Premium
        </Button>
      </div>
    </Paper>
  </div>
);

export default Plan;
