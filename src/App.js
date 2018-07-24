import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import DemoPage from './components/DemoPage';
import Header from './components/Header';
import './App.css';
import configureStore from './configureStore';

const store = configureStore();

class App extends React.Component  
{
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <div>
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
