import { createStore, compose } from 'redux';
import root from './reducers';

const store = createStore(
  root,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;
