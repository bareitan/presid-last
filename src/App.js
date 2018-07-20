import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/demo" component={Demo} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
