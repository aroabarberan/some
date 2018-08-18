import React from 'react'
import { Button, Paper, withStyles, TextField, Typography } from '@material-ui/core';
import { reduxForm, Field, reset, SubmissionError } from 'redux-form'
import { createHero } from '../actions/hero'

const formName = 'createHero'

const NameField = ({ input, meta, submitting }) => (
  <div>
    <TextField disabled={submitting} {...input} onSubmit={() => {}} ></TextField>
    {meta.error && meta.touched && <Typography color='primary'>{meta.error}</Typography>}
  </div>
)

const PowerField = ({ input, meta, submitting }) => (
  <div>
    <TextField disabled={submitting} {...input} ></TextField>
    {meta.error && meta.touched && <Typography color='primary'>{meta.error}</Typography>}
  </div>
)

const NewHeroForm = (props) => {
  const { classes, handleSubmit, submitting } = props
  return (
    <Paper className={classes.root}>
    {console.log(props)}
    {console.log('submitting:', submitting)}
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formSection}>

          {/* NAME FIELD */}
          <Field name='name' component={NameField} props={{submitting}} />

        </div>
        <div className={classes.formSection}>

          {/* POWER FIELD */}
          <Field name='power' component={PowerField} props={{submitting}} />

        </div>
        <div className={classes.formSection}>
          <Button
            onClick={handleSubmit}
            color='primary'
            variant='contained'
            disabled={submitting}
          >
            Create
          </Button>
        </div>
      </form>
    </Paper>
  )
}

const styles = (theme) => ({
  root: {
    margin: theme.spacing.unit * 2,
    marginBottom: 0,
    padding: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 2,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formSection: {
    marginBottom: theme.spacing.unit * 2,
  },
})

const submit = async (values, dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const fetch = fetch('http://ergojndsfogje9543t9hj45t94ognghdsfg.com', {
          method: 'POST',
          body: values,
        })
        dispatch(createHero(values))
        dispatch(reset(formName))
        return resolve()
      } catch (err) {
        return reject(new SubmissionError({ name: 'Invalid user' }))
      }
    }, 2000);
  })
}

const validate = (values) => {
  const errors = {}
  const requiredFields = [
    'name',
    'power',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}

const NewHeroFormWithStyles = withStyles(styles, { withTheme: true })(NewHeroForm)

export default reduxForm({
  form: formName,
  onSubmit: submit,
  validate,
})(NewHeroFormWithStyles)
