import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Post from './Post';
import Strategy from './Strategy';
import SimpleTable from './SimpleTable';

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12} lg={5}>
          <Typography variant="display1">Some title here</Typography>
          <Post />
        </Grid>

        <Grid item xs={12} lg={7}>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={3}>
              <Strategy />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Strategy />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Strategy />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Strategy />
            </Grid>
          </Grid>

          <Typography variant="display1" align="left">
            Some title here
          </Typography>
          <SimpleTable />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6} md={3}>
              {' '}
              <Post />{' '}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              {' '}
              <Post />{' '}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              {' '}
              <Post />{' '}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              {' '}
              <Post />{' '}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '15px'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

export default withStyles(styles)(FullWidthGrid);
