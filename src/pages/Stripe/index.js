// index.js
import React from 'react';
import { render } from 'react-dom';
import { StripeProvider, Elements } from 'react-stripe-elements';

import InjectedCheckoutForm from './CheckoutForm';

const Stripe = () => {
  return (
    <StripeProvider apiKey="pk_test_lmbfoH6z0BtWM4D6k60lIfJU">
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
    </StripeProvider>
  );
};

export default Stripe;
