import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'
import { Field, reduxForm } from "redux-form"

const nameForm = 'create-note'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      title: '',
      content: ''
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

  submit = evt => {
    evt.preventDefault();

    const { title, content } = this.state;

    fetch('http://127.0.0.1:8000/notes', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })
    this.setState({ title: '', content: '' });
    setTimeout(() => {
      this.setState(({ notes }) => ({ notes: [...notes, { title, content }] }));
    }, 1000);
  };


  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };


  render() {
    const { notes } = this.state;
    const { classes } = this.props;
    if (this.state.notes.length > 0) {
      return (
        <div>
          <h1>Notas</h1>
          <Paper>
            <form onSubmit={this.submit}>
              <Field name="title" label="Title" component={renderField} onChange={this.handleChange} type="text" />
              <Field name="content" label='Content' component={renderField} onChange={this.handleChange} type="text" />
              <button type="submit">Submit</button>
            </form>
          </Paper>
          {notes.map((note, index) => (
            <Paper key={index} className={classes.root} elevation={1}>
              <p>Titulo: {note.title}</p>
              <p>Content: {note.content}</p>
              <Grid item xs={8}>
                <DeleteIcon onClick={this.deleteNote(note.id)} className={classes.icon} />
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


const renderField = ({ type, label, input, meta: { touched, error } }) => {
  return (
    <div className='input-row' >
      <label>{label}</label>
      <input {...input} type={type} />
      {touched && error && <span className='error'>{error}</span>}
    </div>
  )
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


export default withStyles(styles)(reduxForm({ form: nameForm })(App))
