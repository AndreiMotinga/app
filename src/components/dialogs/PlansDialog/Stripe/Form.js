import React from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import { connect } from 'react-redux';
import { subscribe } from 'actions';
import ProgressButton from 'components/shared/ProgressButton';
import Errors from 'components/shared/Errors';

class CheckoutForm extends React.Component {
  handleSubmit = ev => {
    ev.preventDefault();
    const { selectedPlan, selectedPeriod, subscribe } = this.props;
    this.props.stripe.createToken({}).then(({ token }) => {
      if (!token) return;
      console.log('promise:', token.id, selectedPlan, selectedPeriod);
      subscribe(token.id, selectedPlan, selectedPeriod);
    });
  };

  render() {
    return (
      <form id="CheckoutForm" onSubmit={this.handleSubmit}>
        <label>
          <CardElement style={{ base: { fontSize: '18px' } }} />
        </label>

        <ProgressButton
          loading={this.props.isLoading}
          type="submit"
          variant="raised"
          color="primary"
        >
          confirm order
        </ProgressButton>
        <Errors />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  subscribe: token => {
    dispatch(subscribe(token));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  injectStripe(CheckoutForm)
);
