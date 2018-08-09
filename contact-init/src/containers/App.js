import React from 'react';
import Nav from "./Nav";
import { createMuiTheme } from '@material-ui/core/styles';


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#69F0AE',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#607D8B',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


export default App;
