import React, { Component } from 'react';
import {AppTitle} from "./components/AppTitle";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppTitle/>
      </div>
    );
  }
}

export default App;
