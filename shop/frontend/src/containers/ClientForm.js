import React from 'react'
import { Paper, withStyles } from '@material-ui/core'
import { Field, reduxForm } from "redux-form"


const nameForm = 'create-client'

class ClientForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      name: '',
      last_name: ''
    };
  }

  submit = evt => {
    evt.preventDefault();

    const { name, last_name } = this.state;

    this.setState({ name: '', last_name: '' });
    setTimeout(() => {
      this.setState(({ clients }) => ({ clients: [...clients, { name, last_name }] }));
    }, 1000);
  };


  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const { clients } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <h1>Clients</h1>
        <Paper>
          <form onSubmit={this.submit}>
            <Field name="name" label="Name" component={renderField} onChange={this.handleChange} type="text" />
            <Field name="last_name" label='Last name' component={renderField} onChange={this.handleChange} type="text" />
            <button type="submit">Submit</button>
          </form>
        </Paper>
        {clients.map((client, index) => (
          <Paper key={index} className={classes.root} elevation={1}>
            <p>Name: {client.name}</p>
            <p>Last Name: {client.last_name}</p>
          </Paper>
        ))}
      </div>
    )
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
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
  },
});


export default withStyles(styles, { withTheme: true })(reduxForm({ form: nameForm })(ClientForm))
