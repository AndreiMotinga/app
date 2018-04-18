import React from 'react';
import { Elements, injectStripe, CardElement } from 'react-stripe-elements';

// import InjectedCheckoutForm from './CheckoutForm';

class MyStoreCheckout extends React.Component {
  handleSubmit = ev => {
    ev.preventDefault();
    this.props.stripe.createToken({}).then(({ token }) => {
      console.log('Received Stripe token:', token);
    });
  };

  render() {
    return (
      <Elements>
        <form onSubmit={this.handleSubmit}>
          <label>
            Card details
            <CardElement style={{ base: { fontSize: '18px' } }} />
          </label>
          <button>Confirm order</button>
        </form>
      </Elements>
    );
  }
}

export default injectStripe(MyStoreCheckout);
