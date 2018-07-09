import React, { Component } from 'react';
import './App.css';
import OtherPage from './Components/OtherPage';
import { Head, Content } from './Components/SuperWeb';

class App extends Component {
  constructor() {
    super()
    this.click = this.click.bind(this)
    this.state = {
      value: false,
      components: <div><Head click={this.click} /><Content /></div>
    }
  }
  click() {
    if (this.state.value) {
      this.setState({ components: <div><Head click={this.click} /><Content /></div> })      
      this.setState({value: false})      
    } else {
      this.setState({ components: <div><Head click={this.click} /><OtherPage click={this.click} /></div> })
      this.setState({value: true})
    }

  }

  render() {
    return (
      <div>
        {this.state.components}
      </div>
    );
  }
}

export default App;
