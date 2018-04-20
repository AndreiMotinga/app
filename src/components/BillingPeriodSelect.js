import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

// TODO move minehight to parent
const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    maxWidth: '560px',
    minHeight: '250px',
    backgroundColor: theme.palette.background.paper
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8'
  },
  tabsIndicator: {
    backgroundColor: '#1890ff'
  },
  tabRoot: {
    textTransform: 'initial',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    '&:hover': {
      color: '#40a9ff',
      opacity: 1
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium
    },
    '&:focus': {
      color: '#40a9ff'
    }
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
    textAlign: 'center'
  }
});

class BillingPeriodSelect extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Billed Every 1 Month"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Billed Every 3 Month"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Billed Every 6 Month"
          />
        </Tabs>
        <Typography className={classes.typography}>
          {value === 0 && <span>0 % off </span>}
          {value === 1 && <span>10 % off </span>}
          {value === 2 && <span>20 % off </span>}
        </Typography>
      </div>
    );
  }
}

BillingPeriodSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BillingPeriodSelect);
