import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from 'config/registerServiceWorker';
import store from 'config/store';
import './config/index.css';

import App from 'components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
