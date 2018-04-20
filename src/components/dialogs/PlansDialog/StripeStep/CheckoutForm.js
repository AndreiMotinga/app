import React from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import { connect } from 'react-redux';
import { subscribe } from 'actions';
import Button from 'material-ui/Button';

class CheckoutForm extends React.Component {
  handleSubmit = ev => {
    ev.preventDefault();
    this.props.stripe.createToken({}).then(({ token }) => {
      this.props.subscribe(token.id);
    });
  };

  render() {
    return (
      <form id="CheckoutForm" onSubmit={this.handleSubmit}>
        <label>
          <CardElement style={{ base: { fontSize: '18px' } }} />
        </label>
        <Button type="submit">Confirm order</Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  subscribe: token => {
    dispatch(subscribe(token));
  }
});

export default connect(undefined, mapDispatchToProps)(
  injectStripe(CheckoutForm)
);
