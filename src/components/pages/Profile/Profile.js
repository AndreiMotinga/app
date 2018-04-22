import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import { openDialog } from 'actions';
import Sidebar from './Sidebar';
import UserForm from './UserForm';
import Subscription from './Subscription';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  changeTab = id => {
    this.setState({ activeTab: id });
  };

  render() {
    const { classes, currentUser, handleOpen } = this.props;
    const isSubscribed = Boolean(currentUser.plan_id);

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} lg={2}>
            <Sidebar changeTab={this.changeTab} />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Paper className={classes.paper}>
              {this.state.activeTab === 0 && (
                <UserForm currentUser={currentUser} />
              )}

              {this.state.activeTab === 1 && (
                <Subscription
                  currentUser={currentUser}
                  isSubscribed={isSubscribed}
                  handleOpen={handleOpen}
                />
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  handleOpen: () => {
    dispatch(openDialog('PlansDialog'));
  }
});

const styles = theme => ({
  root: {
    // marginTop: '20px',
    // maxWidth: 360
    // backgroundColor: theme.palette.background.paper,
  },
  paper: {
    marginTop: '20px',
    padding: '30px',
    minHeight: '400px',
    background: 'white'
  }
});

const styledProfile = withStyles(styles)(Profile);

export default connect(mapStateToProps, mapDispatchToProps)(styledProfile);
