import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  goToSubscription = () => {
    this.setState({ value: 1 });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <SwipeableViews index={this.state.value}>
          <div>
            PLans here
            <Button onClick={this.goToSubscription} color="primary">
              choose
            </Button>
          </div>
          <div>Subsription here</div>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
