import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import './index.css';

const store = createStore(
  todoApp,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
