import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { red, green } from '@material-ui/core/colors'
import { Provider } from 'react-redux'
import store from './store'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: green,
    text: {
      disabled: '#ff0000',
    },
  },
  spacing: {
    unit: 8,
  },
  shape: {
    borderRadiusAlt: 2,
  },
})

console.log(theme)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
