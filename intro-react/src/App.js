import React, { Component } from 'react';
import './App.css';
import { SuperWeb } from './Components/SuperWeb/SuperWeb';
import { Redirect } from './Components/Routers/Redirect';
import { Base } from './Components/Routers/RedirectLogin';

class App extends Component {
  render() {
    return (
        <div>
          {/* <SuperWeb /> */}
          {/* <Redirect /> */}
          <Base />
        </div>
    );
  }
}

export default App;
