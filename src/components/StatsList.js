import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';
import Paper from 'material-ui/Paper';

class StatsList extends React.Component {
  state = {
    summaryStats: {
      startDate: '04/11/2017',
      suggestedMinimumCapital: '$40,000',
      numTrades: 1433,
      numProfitableTrades: 1001,
      percentWinners: 62.3,
      correlationBTC: -0.05,
      correlationETH: 0.1,
      correlationSPY: 0.67,
      sharpeRatio: 1.39
    }
  };

  render() {
    const { classes } = this.props;
    const stats = this.state['summaryStats'];

    return (
      <div className={classes.root}>
        <Paper>
          <List>
            <ListItem
              key={stats['startDate']}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary="Strategy began" />
              <ListItemSecondaryAction className={classes.secondary}>
                {stats['startDate']}
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <List>
            <ListItem
              key={stats['suggestedMinimumCapital']}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary="Suggested Minimum Capital" />
              <ListItemSecondaryAction className={classes.secondary}>
                {stats['suggestedMinimumCapital']}
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <List>
            <ListItem
              key={stats['numTrades']}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary="# Trades" />
              <ListItemSecondaryAction className={classes.secondary}>
                {stats['numTrades']}
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <List>
            <ListItem
              key={stats['numProfitableTrades']}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary="# Profitable" />
              <ListItemSecondaryAction className={classes.secondary}>
                {stats['numProfitableTrades']}
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <List>
            <ListItem
              key={stats['percentWinners']}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary="% Profitable" />
              <ListItemSecondaryAction className={classes.secondary}>
                {stats['percentWinners']}
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <List>
            <ListItem
              key={stats['correlationSPY']}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary="Correlation S&P500" />
              <ListItemSecondaryAction className={classes.secondary}>
                {stats['correlationSPY']}
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <List>
            <ListItem
              key={stats['correlationBTC']}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary="Correlation BTC" />
              <ListItemSecondaryAction className={classes.secondary}>
                {stats['correlationBTC']}
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <List>
            <ListItem
              key={stats['correlationETH']}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary="Correlation ETH" />
              <ListItemSecondaryAction className={classes.secondary}>
                {stats['correlationETH']}
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <List>
            <ListItem
              key={stats['sharpeRatio']}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary="sharpeRatio" />
              <ListItemSecondaryAction className={classes.secondary}>
                {stats['sharpeRatio']}
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Paper>
      </div>
    );
  }
}

StatsList.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  secondary: {
    paddingRight: 10
  }
});

export default withStyles(styles)(StatsList);
