import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Aroa';
const element = <h1>Hello, {name}</h1>;

function showUser(user) {
    return user.name + ' ' + user.lastName
}

const user = {
    name: 'Ivancillo',
    lastName: 'Shame'
}
const userName = (
    <h1>
        Hello, {showUser(user)}
    </h1>
)
const formContact = (
    <form action="">
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
        </div>
        <div>
            <input type="submit" value="Send" name="send"/>
        </div>
    </form>
)

ReactDOM.render(
    formContact,
    document.getElementById('root')
);
