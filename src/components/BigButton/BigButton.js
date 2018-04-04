import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    padding: 10
  }
});

function BigButton({ action, actionText, subline, classes }) {
  return (
    <div className="BigButton">
      <Paper className={classes.root}>
        <a href="#simulate" className={action}>
          <div className="action">{actionText}</div>
          <div className="subline">{subline}</div>
        </a>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(BigButton);
