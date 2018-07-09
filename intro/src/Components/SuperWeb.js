import React, { Component } from 'react';

export class Head extends Component {
  constructor() {
    super()
    this.click = this.click.bind(this)
  }
  click() {
    this.props.click()
  }
  render() {
    return (
      <div>
        <h3>SuperWeb!!!</h3>
        <Button text='login' click={this.click} />
      </div>
    )
  }
}

export class Button extends Component {
  constructor(props) {
    super(props)
    this.click = this.click.bind(this)

  }
  click() {
    this.props.click()
  }
  render() {
    return (
      <div>
        <button onClick={this.click}>{this.props.text}</button>
      </div>
    )
  }
}

export function Content() {
  return (
    <div>
      <p>To access Web press login</p>
    </div>
  )
}