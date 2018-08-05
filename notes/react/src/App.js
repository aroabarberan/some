import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentWillMount() {
    fetch('http://127.0.0.1:8000/notes')
      .then(res => res.json())
      .then(json => json.results)
      .then(data => this.setState({ data }))
      .catch(console.log)
  }

  render() {
    console.log(this.state.data.length)
    if (this.state.data.length > 0) {
      return (
        <div>
          
          <h1>Notas</h1>
          {this.state.data.map(n => {
            return (
              <div key={n.id}>
                <p>Titulo: {n.title}</p>
                <p>Content: {n.content}</p>
              </div>
            )
          })}
        </div>
      )
    } else {
      return <p>Cargando notas...</p>
    }
  }
}

export default App;
