import React from 'react';
import { connect } from 'react-redux';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';
import { openDialog, closeDialog } from 'actions';

import SubscriptionStepper from './SubscriptionStepper';

const PlansDialog = ({ isOpen, handleOpen, handleClose }) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'md'}
      >
        <DialogTitle id="dialog-title">Select Subscription Plan</DialogTitle>
        <DialogContent>
          <SubscriptionStepper />
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  isOpen: state.activeDialog === 'PlansDialog'
});

const mapDispatchToProps = dispatch => ({
  handleOpen: () => {
    dispatch(openDialog('PlansDialog'));
  },
  handleClose: () => {
    dispatch(closeDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlansDialog);
