import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import CssBaseline from 'material-ui/CssBaseline';
import Footer from './Footer';
import Stat from './Stat';
import StatsList from './StatsList';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Topics from './pages/Topics';
import PostsShow from './pages/PostsShow';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Nav />
        <div className="Stats">
          <Stat />
        </div>

        <Router>
          <div>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/posts/345">Post 345</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/home" component={Home} />
            <Route path="/posts/:id" component={PostsShow} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>

        <div>
          <StatsList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
