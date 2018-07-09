import React, { Component } from 'react';
import './App.css';


import { Head, Content } from './Components/SuperWeb';

class App extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      <div>
        <Head />  
        <Content />
      </div>
    );
  }
}

export default App;
