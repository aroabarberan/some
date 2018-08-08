import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import CreateNote from "../containers/Form";
// import { connect } from "react-redux";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
    this.deleteNote = this.deleteNote.bind(this)
  }

  componentWillMount() {
    fetch('http://127.0.0.1:8000/notes')
      .then(res => res.json())
      .then(json => json.results)
      .then(notes => this.setState({ notes }))
      .catch(console.log)
  }
  
  deleteNote(id) {
    return () => {
      fetch('http://127.0.0.1:8000/notes/' + id, {
        method: "DELETE",
      })
        .then(res => this.setState((prevState) => ({
          notes: prevState.notes.filter(n => n.id !== id)
        })))
        .catch('Se ha cometido un errorcito')
    }
  }

  render() {
    const { classes } = this.props;
    if (this.state.notes.length > 0) {
      return (
        <div>
          <h1>Notas</h1>
          <Paper>
            <CreateNote />
          </Paper>
          {this.state.notes.map(n => (
            <Paper key={n.id} className={classes.root} elevation={1}>
              <p>Titulo: {n.title}</p>
              <p>Content: {n.content}</p>
              <Grid item xs={8}>
                <DeleteIcon onClick={this.deleteNote(n.id)} className={classes.icon} />
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
