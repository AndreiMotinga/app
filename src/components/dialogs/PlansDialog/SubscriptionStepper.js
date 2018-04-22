import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';

import Plans from 'components/shared/Plans';
import PeriodStep from './PeriodStep';
import Stripe from './Stripe';

class SubscriptionStepper extends React.Component {
  state = {
    activeStep: 0,
    steps: [
      'Select Subscription Plan',
      'Select billing period',
      'Provide card details'
    ],
    selectedPlan: null,
    selectedPeriod: 0
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  selectPlan = plan => {
    this.setState({ selectedPlan: plan });
    this.handleNext();
  };

  selectPeriod = (e, value) => {
    this.setState({ selectedPeriod: value });
  };

  getStepContent = () => {
    switch (this.state.activeStep) {
      case 0:
        return <Plans triggered={this.selectPlan} />;
      case 1:
        return (
          <PeriodStep
            value={this.state.selectedPeriod}
            selectPeriod={this.selectPeriod}
          />
        );
      case 2:
        return (
          <Stripe
            selectedPlan={this.state.selectedPlan}
            selectedPeriod={this.state.selectedPeriod}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  render() {
    const { classes } = this.props;
    const { activeStep, steps } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <div className={classes.content}>{this.getStepContent()}</div>

        <div>
          {activeStep <= 1 && (
            <Button
              onClick={this.handleNext}
              className={classes.button}
              disabled={activeStep === 0}
            >
              Next
            </Button>
          )}
          <Button
            disabled={activeStep === 0}
            onClick={this.handleBack}
            className={classes.button}
          >
            Back
          </Button>
        </div>
      </div>
    );
  }
}

SubscriptionStepper.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => ({
  errors: state.errors
});

const styles = theme => ({
  root: {
    width: '90%',
    margin: '0 auto'
  },
  content: {
    minHeight: '300px'
  },
  button: {
    float: 'right',
    marginRight: theme.spacing.unit
  }
});

const styled = withStyles(styles)(SubscriptionStepper);

export default connect(mapStateToProps)(styled);
