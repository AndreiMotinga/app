import React from 'react';
import Nav from 'components/Nav';
import CssBaseline from 'material-ui/CssBaseline';
import Footer from 'components/Footer';
import Home from 'components/Home';
import PostsShow from 'pages/PostsShow';
import StrategiesShow from 'pages/StrategiesShow';
import Faq from 'pages/Faq';
import Tos from 'pages/Tos';
import Pp from 'pages/Pp';
import Auth from 'pages/Auth';
import Stripe from 'pages/Stripe';
import Profile from 'pages/Profile';
import PrivateRoute from 'components/PrivateRoute';

import { Router, Route } from 'react-router-dom';
import history from 'configureHistory';
import { connect } from 'react-redux';
import { initUser } from '../../actions';
// import Typography from 'material-ui/Typography';
// import PlansModal from 'components/PlansModal';

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
          <Router history={history}>
            <div>
              <CssBaseline />
              <Nav />
              <div className="App">
                {/* <PlansModal /> */}
                <Route exact path="/" component={Home} />
                <Route path="/auth" component={Auth} />
                <PrivateRoute
                  path="/profile"
                  component={Profile}
                  isSignedIn={isSignedIn}
                />

                <Route path="/posts/:id" component={PostsShow} />
                <Route path="/strategies/:id" component={StrategiesShow} />

                <Route path="/faq" component={Faq} />
                <Route path="/tos" component={Tos} />
                <Route path="/pp" component={Pp} />
              </div>
              <Footer />
            </div>
          </Router>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    initUser: () => {
      dispatch(initUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
