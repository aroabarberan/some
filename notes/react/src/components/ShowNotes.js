import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ShowNotes extends Component {
    getNotes(e) {
        e.preventDefault()
        const request = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000')
                const json = await response.json()
                console.log(json)
            } catch (ERROR) {
                console.log(ERROR)
            }
        }
        request()
    }
    render() {
        return (
            <button onClick={e => this.getNotes(e)}>Get all notes</button>
        )
    }
}
if (document.getElementById('show-notes')) {
    ReactDOM.render(<ShowNotes />, document.getElementById('show-notes'));
}