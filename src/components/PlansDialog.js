import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import VerticalLinearStepper from 'components/VerticalLinearStepper';

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
    const { classes } = this.props;
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
            <VerticalLinearStepper />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const styles = () => ({
  root: {
    maxWidth: '60%'
  }
});

export default withStyles(styles)(PlansDialog);
