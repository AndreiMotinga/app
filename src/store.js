import { createStore, compose } from 'redux';
import todoApp from './reducers';

const store = createStore(
  todoApp,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;
