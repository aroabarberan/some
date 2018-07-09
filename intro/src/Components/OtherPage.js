import React, { Component } from 'react';
import { Head, Content } from './SuperWeb';

export default class OtherPage extends Component {
  constructor() {
    super()
    this.click = this.click.bind()
  }
  click() {
    this.props.click()
  }
  render() {
    return (
      <div>
        <h1>This is other page!!!!</h1>
      </div>
    )
  }
}