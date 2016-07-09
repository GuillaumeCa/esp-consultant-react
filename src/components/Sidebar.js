import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

export default class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <ul>
          <Link to="/accueil" activeClassName="active"><li>Accueil</li></Link>
          <Link to="/profil" activeClassName="active"><li>Profil</li></Link>
          <li><a href="">Les missions</a></li>
          <li><a href="">Mes missions</a></li>
        </ul>
      </nav>
    )
  }
}
