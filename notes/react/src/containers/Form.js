import React from 'react'
import { Field, reduxForm } from "redux-form"


const nameForm = 'create-note'

class CreateNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = { notes: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    // return () => {
    //   fetch('http://127.0.0.1:8000/notes', {
    //     method: "POST",
    //     body: JSON.stringify('values')
    //   })
    //     .then(res => this.setState((prevState) => ({
    //       notes: [...prevState.notes, res]
    //     })))
    //     .catch('Se ha cometido un errorcito')
    // }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <Field name="title" label="Title" component={renderField} type="text" />
        </div>
        <div>
          <Field name="content" label='Content' component={renderField} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const renderField = props => {
  {console.log(props)}
  return (
    <div>
      <label>{props.label}</label>
    </div>
  )
}

export default reduxForm({ form: nameForm })(CreateNote)