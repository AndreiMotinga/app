import React from 'react';
import Button from 'material-ui/Button';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';

import SubscriptionStepper from './SubscriptionStepper';

class PlansDialog extends React.Component {
  state = {
    open: true
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open alert dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth={true}
          maxWidth={'md'}
        >
          <DialogTitle id="dialog-title">
            {'Select Subscription Plan'}
          </DialogTitle>
          <DialogContent>
            <SubscriptionStepper />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default PlansDialog;
