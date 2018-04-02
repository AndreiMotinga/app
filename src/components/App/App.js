import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/Nav';
import CssBaseline from 'material-ui/CssBaseline';
import Post from 'components/Post';
import Strategy from 'components/Strategy';
import Patterns from 'components/Patterns';
import Footer from 'components/Footer';
import Home from 'components/Home';

import PostsShow from 'pages/PostsShow';
import StrategiesShow from 'pages/StrategiesShow';
import Faq from 'pages/Faq';
import Tos from 'pages/Tos';
import Pp from 'pages/Pp';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import PlansModal from 'components/PlansModal'

function App(props) {
  const { classes } = props;
  return (
    <Router>
      <div>
        <CssBaseline />
        <Nav />
        <PlansModal></PlansModal>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/strategies/:id" component={StrategiesShow} />
        <Route path="/faq" component={Faq} />
        <Route path="/tos" component={Tos} />
        <Route path="/pp" component={Pp} />
        <Footer />
      </div>
    </Router>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '15px'
  }
});

export default withStyles(styles)(App);
