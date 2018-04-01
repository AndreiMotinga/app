import React, { Component } from 'react';
import Nav from 'components/Nav';
import CssBaseline from 'material-ui/CssBaseline';
import Routes from 'components/Routes';
import Post from 'components/Post';
import Strategy from 'components/Strategy';
import Patterns from 'components/Patterns';
import Footer from 'components/Footer';
import Grid from 'material-ui/Grid';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Nav />
        <Post />

        <Strategy />
        <Strategy />
        <Strategy />
        <Strategy />

        <Patterns />

        <Post />
        <Post />
        <Post />
        <Post />

        <Footer />
      </div>
    );
  }
}

export default App;
