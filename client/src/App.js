import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Test from './Test';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={Test} />
      </Router>
    );
  }
}

export default App;
