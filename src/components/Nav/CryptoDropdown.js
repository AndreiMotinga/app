import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

class Dropdown extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = e => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const items = {};

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="inherit"
        >
          Crypto Basics
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} path="boo">
            Futures Products
          </MenuItem>
          <MenuItem onClick={this.handleClose}>Agriculture Futures</MenuItem>
          <MenuItem onClick={this.handleClose}>Food Prices Explained</MenuItem>

          <MenuItem onClick={this.handleClose}>Energy Futures</MenuItem>
          <MenuItem onClick={this.handleClose}>Gas Prices Explained</MenuItem>
          <MenuItem onClick={this.handleClose}>Today's Crude Oil Boom</MenuItem>

          <MenuItem onClick={this.handleClose}>Financial Futures</MenuItem>
          <MenuItem onClick={this.handleClose}>
            Mortgage Rates Explained
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Dropdown;
