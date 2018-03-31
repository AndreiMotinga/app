import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import logo from './logo.svg';
import Tickers from 'components/Tickers';
import SimpleMenu from 'components/SimpleMenu';
import AuthMenu from 'components/AuthMenu';
import CSS from 'config/css_variables';

class Nav extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} className="App-logo" alt="logo" />
            <Tickers />
            <div className={classes.spacer} />
            <SimpleMenu />
            <AuthMenu />
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
