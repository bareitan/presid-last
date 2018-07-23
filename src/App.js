import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Demo from './components/Demo/Demo';
import Header from './components/Header/Header';
import './App.css';
import configureStore from './configureStore';
import { setFilters } from './actions';

const store = configureStore();

const filters = ["credit","email"]

store.dispatch(setFilters(filters));
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Demo} />
          <Route exact path="/demo" component={Demo} />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
