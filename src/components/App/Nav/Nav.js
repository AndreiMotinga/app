import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Hidden from 'material-ui/Hidden';
import CSS from 'config/CssVariables';

import Logo from './Logo';
import Tickers from './Tickers';

import Dropdown from './Dropdown';
import AuthDropdown from './AuthDropdown';

import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    const { classes } = this.props;
    const items = {
      crypto: {
        name: 'Crypto Basics',
        links: [
          { path: '/foo', text: 'Futures Products' },
          { path: '/foo', text: 'Agriculture Futures' },
          { path: '/foo', text: 'Food Prices Explained' },
          { path: '/foo', text: 'Energy Futures' },
          { path: '/foo', text: 'Gas Prices Explained' },
          { path: '/foo', text: "Today's Crude Oil Boom" },
          { path: '/foo', text: 'Financial Futures' },
          { path: '/foo', text: 'Mortgage Rates Explained' }
        ]
      },
      strategies: {
        name: 'Strategies',
        links: [{ path: '/foo', text: 'Futures Products' }]
      },
      topics: {
        name: 'Topics',
        links: [{ path: '/foo', text: 'Futures Products' }]
      }
    };

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <Logo />
            </Link>
            <Tickers />
            <div className={classes.spacer} />
            <Hidden xsDown>
              <Dropdown name={items.crypto.name} items={items.crypto.links} />
              <Dropdown
                name={items.strategies.name}
                items={items.strategies.links}
              />
              <Dropdown name={items.topics.name} items={items.topics.links} />
            </Hidden>
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
