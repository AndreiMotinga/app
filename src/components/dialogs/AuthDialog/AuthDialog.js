import React from 'react';
import Dialog, { DialogActions } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import AuthTabs from './AuthTabs';

const AuthDialog = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <AuthTabs />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AuthDialog;
