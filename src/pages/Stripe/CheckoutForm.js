import React from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';

class CheckoutForm extends React.Component {
  handleSubmit = ev => {
    ev.preventDefault();
    this.props.stripe.createToken({}).then(({ token }) => {
      console.log('Received Stripe token:', token);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card details
          <CardElement style={{ base: { fontSize: '18px' } }} />
        </label>
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
