import React, { Component } from 'react';
import { ContentLogin, ContentLogout } from './Body';
import { Head } from './Headder';

export class SuperWeb extends Component {
  constructor() {
    super()
    this.click = this.click.bind(this)
    this.state = {
      isLogged: false,
    }
  }
  click() {
    this.state.isLogged ? this.setState({ isLogged: false }) : this.setState({ isLogged: true })
  }

  render() {
    let components = ''
    this.state.isLogged ? components = <ContentLogin /> : components = <ContentLogout />
    return (
        <div>
          <Head click={this.click} />
          {components}
        </div>
    );
  }
}
