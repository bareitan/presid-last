import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import DemoPage from './components/DemoPage';
import Header from './components/Header';
import './App.css';
import configureStore from './configureStore';
import {fetchFilters} from './actions/filters'

const store = configureStore();

class App extends React.Component  
{
  componentWillMount() {
    store.dispatch(fetchFilters())
  }
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="hero is-fullheight">
          <div className="hero-head">
            <Header />
          </div>
          <div className="hero-body">
            <Route exact path="/" component={DemoPage} />
            <Route exact path="/demo" component={DemoPage} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
    )
  }
}

export default App;
