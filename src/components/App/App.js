import React, { Component } from 'react';
import Nav from 'components/Nav';
import CssBaseline from 'material-ui/CssBaseline';
import Routes from 'components/Routes';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
