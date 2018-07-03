/* <form action="{{ route('new.store') }}" method="POST">
<fieldset>
    <legend>New Creation</legend>
    {{ csrf_field() }}
    <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="{{ old('title') }}">
    </div>
    <div>
        <label for="content">Content</label>
        <input type="text" name="content" id="content" value="{{ old('content') }}">
    </div>
    <div>
        <label for="file">File</label>
        <input type="text" name="file" id="file" value="{{ old('file') }}">
    </div>
    <div>
        <input type="submit" value="Send">
    </div>
</fieldset>
</form> */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CreateContact extends Component {
    render() {
        <form>
                <div>
                    <label name="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label name="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" />
                </div>
                <div>
                    <input type="submit" value="send" name="send" id="send" />
                </div>
            </form>
        return (
            <p>asdas</p>
            // <Router history={history}>
            //     <Route path="/" component={App}>
            //         <Route path="home" component={Home} />
            //         <Route path="about" component={About} />
            //         <Route path="inbox" component={Inbox} />
            //         <Route path="contacts" component={Contacts} />
            //     </Route>
            // </Router>
        );
    }
}

if (document.getElementById('create-contact')) {
    ReactDOM.render(<CreateContact />, document.getElementById('create-contact'));
}
