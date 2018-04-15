import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'config/registerServiceWorker';
import Api from './api';

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

Api.getUsers();
Api.getUser(12);
