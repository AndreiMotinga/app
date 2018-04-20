import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import { signout } from 'actions';
import history from 'config/history';
import AuthDialog from 'components/dialogs/AuthDialog';

class AuthDropdown extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      anchorEl: null,
      isAuthDialogOpen: false
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClickOpen = () => {
    this.setState({ isAuthDialogOpen: true });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleProfile = () => {
    this.setState({ anchorEl: null });
    history.push('/profile');
  };

  handleSignOut = () => {
    this.props.signout();
  };

  handleClickOpen = () => {
    this.setState({ isAuthDialogOpen: true });
  };

  handleCloseDialog = () => {
    this.setState({ isAuthDialogOpen: false });
  };

  render() {
    const anchorEl = this.state.anchorEl;
    const open = Boolean(anchorEl);
    const { currentUser } = this.props.auth;
    const isSignedIn = !!currentUser.email;

    return (
      <div className="Nav_right_item">
        {!isSignedIn && (
          <Button color="inherit" onClick={this.handleClickOpen}>
            Login
          </Button>
        )}

        {isSignedIn && (
          <div>
            <IconButton
              aria-owns={open ? 'profile' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="profile"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleProfile}>My Profile</MenuItem>
              <MenuItem onClick={this.handleSignOut}>Sign out</MenuItem>
            </Menu>
          </div>
        )}

        <AuthDialog
          isOpen={this.state.isAuthDialogOpen}
          handleClose={this.handleCloseDialog}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    signout: () => {
      dispatch(signout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthDropdown);
