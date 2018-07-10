import React, { Component } from 'react';
import './App.css';
import { SuperWeb } from './Components/SuperWeb/SuperWeb';
import { Redirect } from './Components/Routers/Redirect';

class App extends Component {
  render() {
    return (
        <div>
          {/* <SuperWeb /> */}
          <Redirect />
        </div>
    );
  }
}

export default App;
