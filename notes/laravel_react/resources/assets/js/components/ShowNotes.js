import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class ShowNotes extends Component {
    render() {
        return (
            <p>Estoy mostrando la notaa???</p>
        );
    }
}

if (document.getElementById('show-notes')) {
    ReactDOM.render(<ShowNotes />, document.getElementById('show-notes'));
}
