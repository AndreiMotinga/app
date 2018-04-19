import React from 'react';
import './Plans.css';
import Plan from './Plan';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    duration: '',
    line: 'Text, video & audio messaging',
    subline: '1 therapist check-in per day',
    disabled: true,
    selected: false,
    stripeId: null
  },
  {
    name: 'Premium',
    price: '$24.99',
    duration: '/mth',
    line: 'Text, video & audio messaging',
    subline: '1 therapist check-in per day',
    disabled: false,
    selected: true,
    stripeId: 'mfg-premium-1'
  },
  {
    name: 'Platinum',
    price: '$89.99',
    duration: '/mth',
    line: 'Text, video & audio messaging',
    subline: '1 therapist check-in per day',
    disabled: true,
    selected: false,
    stripeId: 'mfg-premium-2'
  }
];

const Plans = ({ triggered }) => (
  <div className="Plans">
    {plans.map((plan, i) => <Plan key={i} plan={plan} triggered={triggered} />)}
  </div>
);

export default Plans;
