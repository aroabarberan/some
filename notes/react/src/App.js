import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  getNotes() {
    fetch('http://127.0.0.1:8000/notes')
      .then(res => res.json())
      .then(json => json.results)
      .then(data => this.setState({ data }))
      .catch(console.log)
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <h1>Notes</h1>
        {this.getNotes()}
        {this.state.data.map(n => {
          <div>
            <p>{n.title}</p>
            <p>{n.content}</p>
          </div>
        })}
      </div>
    )
  }
}

export default App;
