import React, { Component } from 'react';
import OtherPage from './OtherPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export function Head() {
    return (
        <div>
            <h3>SuperWeb!!!</h3>
            <Button text="login" />
        </div>
    )
}

export class Button extends Component {
    click() {
        // window.location = 'http://localhost:3000/OtherPage'
        <Route path="/bla" component={OtherPage}/>
    }
    render() {
        return (
            <div style={{ display: 'inline-block' }}>
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

