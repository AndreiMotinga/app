import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class StatsList extends React.Component {
  state = {
    checked: [1]
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {[0, 1, 2, 3].map(value => (
            <ListItem key={value} dense button className={classes.listItem}>
              <ListItemText primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction>{value * 10}</ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

StatsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StatsList);
