import React from 'react';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

const Plan = ({ triggered, plan }) => {
  const klass = plan.selected ? 'active' : '';
  const elevation = plan.selected ? 16 : 2;
  return (
    <div className={`Plan ${klass}`}>
      <Paper elevation={elevation}>
        <div className="Plan_header">
          <span className="Plan_name">
            <strong>{plan.name}</strong>
          </span>
        </div>
        <div className="Plan_body">
          <div className="Plan_body_price">{plan.price}</div>
          <div className="Plan_body_duration">{plan.duration}</div>
          <div className="Plan_body_feature">{plan.line}</div>
          <div className="Plan_body_feature">{plan.subline}</div>
        </div>
        <div className="Plan_footer">
          <Button
            onClick={() => {
              triggered(plan.stripeId);
            }}
            variant="raised"
            color="secondary"
            disabled={plan.disabled}
          >
            subscribe
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Plan;
