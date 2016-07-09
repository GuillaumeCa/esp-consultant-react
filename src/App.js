import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, Redirect } from 'react-router'

import Layout from './Layout';
import Accueil from './pages/Accueil';
import Profil from './pages/Profil';
import NewsDetail from './pages/NewsDetail';
import Login from './pages/Login';

import Counter from './Counter';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182


export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Redirect from="/" to="accueil" />
        <Route path="login" component={Login} />
        <Route path="/" component={Layout}>
          <Route path="accueil" component={Accueil} />
          <Route path="profil" component={Profil} />
          <Route path="news/:slug" component={NewsDetail} />
        </Route>
      </Router>
    );
  }
}
