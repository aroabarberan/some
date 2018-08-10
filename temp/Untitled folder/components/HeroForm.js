import React, { Component } from 'react'
import { Button, Paper, withStyles, TextField } from '@material-ui/core';

class HeroForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.createHero({
      name: this.props.name,
      power: this.props.power,
    })
  }

  handleChange(evt) {
    this.props.updateReduxForm({
      name: this.props.name,
      power: this.props.power,
      [evt.target.name]: evt.target.value,
    })
  }

  render () {
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
        <form className={classes.form}>
          <div className={classes.formSection}>
            <TextField
              label='Hero name'
              name='name'
              value={this.props.name}
              onChange={this.handleChange}
            />
          </div>
          <div className={classes.formSection}>
            <TextField
              label='Super power'
              name='power'
              type='text'
              value={this.props.power}
              onChange={this.handleChange}
            />
          </div>
          <div className={classes.formSection}>
            <Button onClick={this.handleSubmit} color='primary' variant='contained'>Create</Button>
          </div>
        </form>
      </Paper>
    )
  }
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

export default withStyles(styles, { withTheme: true })(HeroForm)
