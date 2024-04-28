
import './App.css';

import React, { Component } from 'react'
import NavBar from './compnents/NavBar';
import News from './compnents/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}

