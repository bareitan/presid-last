import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Demo from './components/Demo/Demo';
import Header from './components/Header/Header';
import { setFindings } from './actions/index';

import rootReducer from './reducers';
import './App.css';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const findings = [
  {
    id: 1,
    type: 'PHONE_NUMBER',
    certainity: 1,
    text: '(555) 253-0000',
    line: '10:2'
  },
  {
    id: 2,
    type: 'CREDIT_CARD_NUMBER',
    certainity: 1,
    text: '4012-8888-8888-1881',
    line: '4:23'
  },
  {
    id: 3,
    type: 'US_HEALTHCARE_NPI',
    certainity: 0.8,
    text: '1245319599',
    line: '5:33'
  },
  {
    id: 4,
    type: 'EMAIL_ADDRESS',
    certainity: 0.4,
    text: 'foo@example.com',
    line: '3:3'
  },
  {
    id: 5,
    type: 'DOMAIN_NAME',
    certainity: 0.2,
    text: 'example.com',
    line: '1:13'
  },
  {
    id: 6,
    type: 'US_DRIVERS_LICENSE_NUMBER',
    certainity: 0.3,
    text: 'AC333991',
    line: '2:12'
  },
  {
    id: 7,
    type: 'CANADA_BC_PHN',
    certainity: 0.1,
    text: '1245319599',
    line: '1:23'
  }
];

store.dispatch(setFindings(findings))

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/demo" component={Demo} />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
