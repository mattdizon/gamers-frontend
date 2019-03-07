import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components to import
import Navigation from './components/NavBar'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
      </div>
    );
  }
}

export default App;
