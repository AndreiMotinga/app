import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from 'components/shared/Post';
import Strategy from './Strategy';
import Patterns from './Patterns';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Plans from 'components/shared/Plans';
import { openDialog } from 'actions';

const Home = ({ classes, isSignedIn, handleOpen }) => {
  return (
    <div>
      <div className={classes.main}>
        <Grid container spacing={16}>
          <Grid item xs={12} md={5} lg={5}>
            <Typography>Daily Market Update</Typography>
            <Post />
          </Grid>

          <Grid item xs={12} md={7} lg={7}>
            <Typography>Strategies</Typography>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={3} md={6} lg={3}>
                <Strategy />
              </Grid>
              <Grid item xs={12} sm={3} md={6} lg={3}>
                <Strategy />
              </Grid>
              <Grid item xs={12} sm={3} md={6} lg={3}>
                <Strategy />
              </Grid>
              <Grid item xs={12} sm={3} md={6} lg={3}>
                <Strategy />
              </Grid>
            </Grid>

            <br />

            <Typography>Trading Patterns</Typography>
            <Grid container spacing={8}>
              <Patterns />
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className={classes.posts}>
        <Typography variant="display1">Recent Posts</Typography>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} lg={3}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Post />
          </Grid>
        </Grid>
      </div>

      {!isSignedIn && (
        <div className={classes.plans}>
          <Grid container spacing={16}>
            <Grid item xs={12} lg>
              <Plans triggered={handleOpen} />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  main: {
    paddingTop: 15,
    paddingBottom: 15
  },
  posts: {
    marginTop: 40
  },
  plans: {
    marginTop: 40
  }
});

const mapStateToProps = state => ({
  isSignedIn: Boolean(state.currentUser.email)
});

const mapDispatchToProps = dispatch => ({
  handleOpen: () => {
    dispatch(openDialog('AuthDialog'));
  }
});

const styledHome = withStyles(styles)(Home);

export default connect(mapStateToProps, mapDispatchToProps)(styledHome);
