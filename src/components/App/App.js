import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initUser } from 'actions';
import PrivateRoute from 'config/PrivateRoute';

import Nav from './Nav';
import Footer from './Footer';

import Home from 'pages/Home';
import PostsShow from 'pages/PostsShow';
import StrategiesShow from 'pages/StrategiesShow';
import Faq from 'pages/Faq';
import Tos from 'pages/Tos';
import Pp from 'pages/Pp';
import Profile from 'pages/Profile';

const Routes = ({ isSignedIn }) => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/posts/:id" component={PostsShow} />
    <Route path="/strategies/:id" component={StrategiesShow} />
    <Route path="/faq" component={Faq} />
    <Route path="/tos" component={Tos} />
    <Route path="/pp" component={Pp} />
    <PrivateRoute path="/profile" component={Profile} isSignedIn={isSignedIn} />
  </div>
);

class App extends React.Component {
  componentDidMount() {
    this.props.initUser();
  }

  render() {
    const { isLoading, currentUser } = this.props.auth;
    const isSignedIn = !!currentUser.email;

    return (
      <div>
        {isLoading && <span>Loading...</span>}

        {!isLoading && (
          <div>
            <CssBaseline />
            <Nav />
            <div className="App">
              <Routes isSignedIn={isSignedIn} />
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  initUser: () => {
    dispatch(initUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
