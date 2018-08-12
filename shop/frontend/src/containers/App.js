import React, { Component } from 'react';
import SimpleAppBar from '../components/SimpleAppBar';
import AddClient from "../components/AddClient";

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <SimpleAppBar />
        <AddClient />
      </div>
    );
  }
}

export default App;
