import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import './Stripe.css';

import Form from './Form';

const Stripe = ({ selectedPlan, selectedPeriod }) => {
  return (
    <StripeProvider apiKey="pk_test_lmbfoH6z0BtWM4D6k60lIfJU">
      <Elements>
        <Form selectedPlan={selectedPlan} selectedPeriod={selectedPeriod} />
      </Elements>
    </StripeProvider>
  );
};

export default Stripe;
