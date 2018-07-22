import React, { Component } from 'react';
import {
        AppTitle, 
        Row, 
        FeaturedQuote, 
        RandomQuote, CustomQuote, 
        SortStation,
        QuoteDisplay
      } from "./components";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppTitle/>
        <FeaturedQuote/>
        <RandomQuote/>
        <CustomQuote/>
        <SortStation/>
        <QuoteDisplay/>
      </div>
    );
  }
}

export default App;
