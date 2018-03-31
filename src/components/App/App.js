import React, { Component } from 'react';
import Nav from 'components/Nav';
import CssBaseline from 'material-ui/CssBaseline';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Nav />
      </div>
    );
  }
}

export default App;
