import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class CreateContact extends Component {
    render() {
        return (
           <p>asdasdsads</p>
        );
    }
}

if (document.getElementById('create-contact')) {
    ReactDOM.render(<CreateContact />, document.getElementById('create-contact'));
}
