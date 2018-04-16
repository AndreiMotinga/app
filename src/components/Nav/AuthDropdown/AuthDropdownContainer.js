import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import axios from 'axios';

class AuthDropdown extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentUser: {},
      anchorEl: null
    };
  }

  componentWillMount() {
    axios
      .get('/api/users/current.json')
      .then(res => {
        this.setState({ currentUser: res.data });
      })
      .catch(err => {
        console.error(err);
      });
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

  handleSignOut = () => {
    axios.delete('/users/sign_out').then(res => {
      this.setState({ currentUser: {} });
    });
  };

  render() {
    const anchorEl = this.state.anchorEl;
    const open = Boolean(anchorEl);
    const auth = !!this.state.currentUser.email;

    return (
      <div className="Nav_right_item">
        {/* TODO user react router redirect for it */}
        {!auth && (
          <Button onClick={() => (window.location = '/auth')}>Sign in</Button>
        )}

        {auth && (
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

export default AuthDropdown;
