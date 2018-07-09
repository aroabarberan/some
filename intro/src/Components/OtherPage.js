import React, { Component } from 'react';
import { Head, Content } from './SuperWeb';

export default class OtherPage extends Component {
    constructor() {
        super()
        this.state = {
            components: <div></div>
        }
        this.click = this.click.bind()
    }
    click() {
        // this.setState({ components: <div><Head click={this.click} /><Content /></div> })
        this.props.click()
    }
    render() {
        return (
            <div>
                {this.state.components}
                <h1>This is other page!!!!</h1>
            </div>
        )
    }
}