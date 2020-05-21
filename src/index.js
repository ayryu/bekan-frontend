import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/layouts/header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostForm from './components/Content/post-form';
import FullPost from './components/Content/full-post';

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

ReactDOM.render(
<MuiThemeProvider theme={darkTheme}>
    <React.Fragment>
        <CssBaseline />
          <Router>
              <Route path="/"> <Header /> </Route>
              <Route exact path="/"> <App /> </Route>
            <Switch>
              <Route exact path="/createNewPost"> <PostForm/> </Route>
              <Route component={FullPost} exact path="/:id"/>
          </Switch>
          </Router>
    </React.Fragment>
</MuiThemeProvider>

, document.getElementById('root'));
