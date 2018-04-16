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

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Typography from 'material-ui/Typography';
// import PlansModal from 'components/PlansModal';

function App() {
  return (
    <Router>
      <div>
        <CssBaseline />
        <Nav />
        <div className="App">
          {/* <PlansModal /> */}
          <Route exact path="/" component={Home} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/strategies/:id" component={StrategiesShow} />
          <Route path="/faq" component={Faq} />
          <Route path="/tos" component={Tos} />
          <Route path="/pp" component={Pp} />
          <Route path="/auth" component={Auth} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
