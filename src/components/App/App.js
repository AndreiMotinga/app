import React, { Component } from 'react';
import Nav from 'components/Nav';
import CssBaseline from 'material-ui/CssBaseline';
import Routes from 'components/Routes';
import axios from 'axios';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentUser: {}
    };
  }

  componentWillMount() {
    axios
      .get('/api/users/current.json')
      .then(res => {
        this.setState({ currentUser: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <Nav />
        <Routes />
        {this.state.currentUser.email}
      </div>
    );
  }
}

export default App;
