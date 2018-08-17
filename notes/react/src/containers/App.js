import React from 'react'
import { connect } from "react-redux";
import { Grid, Paper, withStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import {
  addNote,
  deleteNote,
  updateInfoForm,
  clearForm
} from "../actions/NoteActions";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.deleteNote = this.deleteNote.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentWillMount() {
    fetch('http://localhost:8000/api/notes')
      .then(res => res.json())
      .then(notes => notes.map(note => this.props.addNote(note)))
      .catch(console.log)
  }

  deleteNote(id) {
    return () => {
      fetch('http://127.0.0.1:8000/api/note/' + id, { method: "DELETE" })
        .catch('Se ha cometido un errorcito')

      this.props.deleteNote(id)
    }
  }

  submit(evt) {
    evt.preventDefault();
    console.log()
    // const { form } = this.props.notes
    // let { title } = form[0]
    // let { content } = form[1]

    // fetch('http://127.0.0.1:8000/api/notes', {
    //   method: "POST",
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({ title, content }),
    // })
    this.props.addNote({
      title: this.props.title,
      content: this.props.content,
    })
    // this.props.updateInfoForm({title: '', content: ''})
  }


  handleChange(evt) {
    // this.props.updateInfoForm({ [evt.target.name]: evt.target.value })
    this.props.updateInfoForm({
      title: this.props.title,
      content: this.props.content,
      [evt.target.name]: evt.target.value
    })
  };


  render() {
    const { classes } = this.props
    const { notes } = this.props.notes
    return (
      <div>
        <h1>Notas</h1>
        <Paper>
          <form onSubmit={this.submit}>
            <div>
              <label>Title</label>
              <input type="text" name='title' onChange={this.handleChange} />
            </div>
            <div>
              <label>Content</label>
              <input type="text" name='content' onChange={this.handleChange} />
            </div>
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


const mapStateToProps = state => ({
  notes: state.notes,
  form: state.notes.form
})

const mapDispatchToProps = dispatch => ({
  addNote: note => {
    dispatch(addNote(note))
  },

  deleteNote: noteInfo => {
    dispatch(deleteNote(noteInfo))
  },

  updateInfoForm: noteInfo => {
    dispatch(updateInfoForm(noteInfo))
  },

  clearForm: () => {
    dispatch(clearForm())
  },

})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
