import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {
  withRouter,
  Switch,
  BrowserRouter,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Posts from './components/Post/Posts';
import * as serviceWorker from './serviceWorker';
import Loading from './components/Section/Loading';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar> </Navbar>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/post/:postId" component={Posts} exact />
        <Route path="/loading" component={Loading} exact />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
