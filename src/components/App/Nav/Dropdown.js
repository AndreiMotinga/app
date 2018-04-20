import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import history from 'config/history';

class Dropdown extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = e => {
    this.setState({ anchorEl: null });
    const path = e.target.attributes.path;
    if (path) {
      history.push(path.value);
    }
  };

  render() {
    const { anchorEl } = this.state;
    const { items } = this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="inherit"
        >
          {this.props.name}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {items.map((item, i) => (
            <MenuItem key={i} onClick={this.handleClose} path={item.path}>
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default Dropdown;
