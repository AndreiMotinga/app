// TODO move to Stripe.js
// index.js
import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import './CheckoutForm.css';

import CheckoutForm from './CheckoutForm';

const Stripe = ({ selectedPlan, selectedPeriod }) => {
  return (
    <StripeProvider apiKey="pk_test_lmbfoH6z0BtWM4D6k60lIfJU">
      <Elements>
        <CheckoutForm
          selectedPlan={selectedPlan}
          selectedPeriod={selectedPeriod}
        />
      </Elements>
    </StripeProvider>
  );
};

export default Stripe;
