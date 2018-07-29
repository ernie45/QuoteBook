import React, { Component } from 'react';
import {
        AppTitle, 
        Row, 
        FeaturedQuote, 
        RandomQuote, CustomQuote, 
        SortStation,
        QuoteDisplay
      } from "./components";
import API from "./utils/API";
import './App.css';
class App extends Component {
  state = {
    quotes: "", 
    cards: ""
  };
  componentDidMount = () => {
    API.pullDatabaseQuotes().then(data => {
      this.setState({
        quotes: data
      });
    });
  };
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
