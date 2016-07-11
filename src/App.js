import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, Redirect } from 'react-router'

import Layout from './Layout';
import Accueil from './pages/Accueil';
import Profil from './pages/Profil';
import News from './pages/News';
import { Login, Logout, NotFound } from './pages/AuthPages';

import Auth from './Auth';

function requireAuth(nextState, replace) {
  if (!Auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Redirect from="/" to="accueil" />
        <Route path="login" component={Login} />
        <Route path="logout" component={Logout} />
        <Route path="/" component={Layout} onEnter={requireAuth}>
          <Route path="accueil" component={Accueil} />
          <Route path="accueil/news/:slug" component={News} />
          <Route path="profil" component={Profil} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}
