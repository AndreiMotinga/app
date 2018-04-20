import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AuthForms from './AuthForms';
import Dialog, { DialogActions } from 'material-ui/Dialog';

const FormDialog = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <AuthForms />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
