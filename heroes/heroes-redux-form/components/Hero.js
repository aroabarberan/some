import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, withStyles } from '@material-ui/core'
import classNames from 'classnames'

const Hero = ({ id, name, power, classes }) => (
  <Card className={classes.root}>
    <Typography className={classes.text}>{id}.</Typography>
    <Typography className={classNames(classes.text, classes.nameText)}>{name}</Typography>
    <Typography className={classes.text}>{power}</Typography>
  </Card>
)

Hero.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  power: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    nameText: PropTypes.string.isRequired,
  }),
}

Hero.defaultProps = {
  power: 'No one',
}

const styles = (theme) => ({
  root: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    display: 'flex',
    maxWidth: 500,
  },
  text: {
    marginRight: theme.spacing.unit * 2,
  },
  nameText: {
    fontWeight: 600,
  }
})

const HeroWithStyles = withStyles(styles, { withTheme: true })(Hero)

export default HeroWithStyles
