import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initUser } from 'actions';
import PrivateRoute from 'config/PrivateRoute';
import history from 'config/history';
import './App.css';

import Nav from './Nav';
import Footer from './Footer';

import AuthDialog from 'components/dialogs/AuthDialog';
import PlansDialog from 'components/dialogs/PlansDialog';

import Home from 'components/pages/Home';
import PostsShow from 'components/pages/PostsShow';
import StrategiesShow from 'components/pages/StrategiesShow';
import Faq from 'components/pages/Faq';
import Tos from 'components/pages/Tos';
import Pp from 'components/pages/Pp';
import Profile from 'components/pages/Profile';
import Auth from 'components/pages/Auth';

class App extends React.Component {
  componentDidMount() {
    this.props.initUser();
  }

  render() {
    const { isSignedIn } = this.props;

    return (
      <div className="App">
        <Router history={history}>
          <div>
            <CssBaseline />
            <Nav />

            <main className="App_content">
              <Route exact path="/" component={Home} />
              <Route path="/posts/:id" component={PostsShow} />
              <Route path="/strategies/:id" component={StrategiesShow} />
              <Route path="/faq" component={Faq} />
              <Route path="/tos" component={Tos} />
              <Route path="/pp" component={Pp} />
              <Route path="/auth" component={Auth} />
              <PrivateRoute
                path="/profile"
                component={Profile}
                isSignedIn={isSignedIn}
              />
            </main>

            <Footer />
            <AuthDialog />
            <PlansDialog />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: Boolean(state.currentUser.email)
});

const mapDispatchToProps = dispatch => ({
  initUser: () => {
    dispatch(initUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
