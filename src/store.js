import { createStore, applyMiddleware, compose } from 'redux';
import root from './reducers';
import thunk from 'redux-thunk';

const configureStore = () => {
  const store = createStore(
    root,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(root);
      });
    }
  }

  return store;
};

export default configureStore;
