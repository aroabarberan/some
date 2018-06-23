import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ShowNotes extends Component {
    render() {
        function getNotes() {

            const request = async () => {
                const response = await fetch('http://localhost:8000')
                const json = await response.json()
                // console.log(json)
            }
            request()
        }
        return (

            <button className="notes" onClick={getNotes()}>Get all notes</button>
        );
    }
}

if (document.getElementById('show-notes')) {
    ReactDOM.render(<ShowNotes />, document.getElementById('show-notes'));
}
