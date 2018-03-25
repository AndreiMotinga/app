import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import CssBaseline from 'material-ui/CssBaseline';
import Typography from 'material-ui/Typography';
import FullWidthGrid from './FullWidthGrid';
import Footer from './Footer';
import Stat from './Stat';
import StatsList from './StatsList';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Nav />
        <div className="Stats">
          <Stat />
          <Stat />
          <Stat />
          <Stat />
          <Stat />
          <Stat />
        </div>

        <div>
          <StatsList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
