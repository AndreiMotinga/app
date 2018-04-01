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
import About from 'pages/About';
import StrategyPage from 'pages/Strategy';
import Topics from 'pages/Topics';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

function App(props) {
  const { classes } = props;
  return (
    <Router>
      <div>
        <CssBaseline />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/strategies/:id" component={StrategyPage} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
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
