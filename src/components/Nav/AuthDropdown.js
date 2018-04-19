import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import { signout } from 'actions';
import history from 'configureHistory';

class AuthDropdown extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      anchorEl: null
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
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

  render() {
    const anchorEl = this.state.anchorEl;
    const open = Boolean(anchorEl);
    const { currentUser } = this.props.auth;
    const isSignedIn = !!currentUser.email;

    return (
      <div className="Nav_right_item">
        {!isSignedIn && (
          <Button
            color="inherit"
            onClick={() => {
              history.push('/auth');
            }}
          >
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
