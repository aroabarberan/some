import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { greenA200, blueGrey } from '@material-ui/core/colors';



const theme = createMuiTheme({
  palette: {
    primary: greenA200,
    secondary: blueGrey,
  }
})

console.log(theme)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));
