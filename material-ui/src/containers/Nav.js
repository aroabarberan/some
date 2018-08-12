import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const Nav = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed" >
      <Toolbar variant="dense">
        <IconButton className={classes.menuButton} color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="headline" color="inherit">
          Headline
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)



const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary.dark
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  }
})

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Nav);