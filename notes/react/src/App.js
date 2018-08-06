import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      title: '',
      content: ''
    };
    this.removeNote = this.removeNote.bind(this)
  }

  componentWillMount() {
    fetch('http://127.0.0.1:8000/notes')
      .then(res => res.json())
      .then(json => json.results)
      .then(data => this.setState({ data }))
      .catch(console.log)
  }
  removeNote(id) {
    console.log(id)
    fetch('http://127.0.0.1:8000/notes/' + id, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",

      },
      method: "post",
      body: JSON.stringify({
        key: id
      })
    })
  }

  render() {
    const { classes } = this.props;
    if (this.state.data.length > 0) {
      return (
        <div>
          <h1>Notas</h1>
          {this.state.data.map(n => (
            <Paper key={n.id} className={classes.root} elevation={1}>
              <p>Titulo: {n.title}</p>
              <p>Content: {n.content}</p>
              <Grid item xs={8}>
                <DeleteIcon onClick={() => this.removeNote(n.id)} className={classes.icon} />
              </Grid>
            </Paper>
          ))}
        </div>
      )
    } else {
      return <p>Cargando notas...</p>
    }
  }
}

const styles = theme => ({
  root: {
    margin: 10,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
  },
});


export default withStyles(styles)(App);
