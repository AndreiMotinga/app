import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Api from '../../../api';
import { logout } from '../../../actions';

class AuthDropdown extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      anchorEl: null
    };
  }

  // componentWillMount() {
  //   axios
  //     .get('/api/users/current.json')
  //     .then(res => {
  //       this.setState({ currentUser: res.data });
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSignOut = () => {
    Api.logout();
    this.props.logout();
  };

  render() {
    const anchorEl = this.state.anchorEl;
    const open = Boolean(anchorEl);
    const { currentUser } = this.props.auth;
    const isLoggedIn = !!currentUser.email;

    return (
      <div className="Nav_right_item">
        {/* TODO user react router redirect for it */}
        {!isLoggedIn && (
          <Button onClick={() => (window.location = '/auth')}>Sign in</Button>
        )}

        {isLoggedIn && (
          <div>
            <IconButton
              aria-owns={open ? 'profile' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <AccountCircle />
              {currentUser.email}
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
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
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
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthDropdown);
