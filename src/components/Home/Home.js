import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';
import Strategy from 'components/Strategy';
import Patterns from 'components/Patterns';
import Footer from 'components/Footer';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

function Home(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12} lg={5}>
            <Typography variant="display1">Daily Market Update</Typography>
            <Post />
          </Grid>

          <Grid item xs={12} lg={7}>
            <Typography variant="display1">Strategies</Typography>
            <Grid container spacing={8}>
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

            <br />

            <Typography variant="display1">Trading Patterns</Typography>
            <Grid container spacing={8}>
              <Patterns />
            </Grid>
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={16}>
        <Grid item xs={12} lg={3}>
          <Post />
        </Grid>
        <Grid item xs={12} lg={3}>
          <Post />
        </Grid>
        <Grid item xs={12} lg={3}>
          <Post />
        </Grid>
        <Grid item xs={12} lg={3}>
          <Post />
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '15px'
  }
});

export default withStyles(styles)(Home);
