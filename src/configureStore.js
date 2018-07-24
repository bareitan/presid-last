import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import userText from './reducers/userText';
import findingsSorting from './reducers/findingsSorting';
import findings from './reducers/findings';
import filters from './reducers/filters';
import anonText from './reducers/anonText';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      userText,
      anonText,
      findings,
      findingsSorting,
      filters
    }),
    composeEnhancers(applyMiddleware(promise(),thunk))
  );

  return store;
};
