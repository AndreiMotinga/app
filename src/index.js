import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'config/registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';

import App from 'components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

// TODO this is not proper way to reload hot module
// there is supposed to be something wrong with the state. do investigate later
if (module.hot) {
  module.hot.accept();
}
