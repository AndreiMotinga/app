// index.js
import React from 'react';
import { render } from 'react-dom';
import { StripeProvider } from 'react-stripe-elements';

import MyStoreCheckout from './MyStoreCheckout';

const Stripe = () => {
  return (
    <StripeProvider apiKey="pk_test_lmbfoH6z0BtWM4D6k60lIfJU">
      <MyStoreCheckout />
    </StripeProvider>
  );
};

export default Stripe;
