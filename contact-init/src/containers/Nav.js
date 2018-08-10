import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Theme from '../styles/Theme';


const Nav = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton className={classes.menuButton} color="inherit" >
            <MenuIcon />
          </IconButton>
          <Typography variant="headline" color="inherit">
            Headline
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

console.log(Theme);

const styles = Theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  toolbar: {
    backgroundColor: 'red'
  }
})

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(Nav);
export default withStyles(styles)(Nav);