import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import CSS from 'config/css_variables';
import logo from './logo.svg';
import Dropdown from './Dropdown';
import AuthDropdown from './AuthDropdown';
import Tickers from 'components/Tickers';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <Tickers />
            <div className={classes.spacer} />
            <Dropdown />
            <AuthDropdown />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  spacer: {
    flex: 1
  },

  login: {
    color: CSS.red
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

export default withStyles(styles)(Nav);
