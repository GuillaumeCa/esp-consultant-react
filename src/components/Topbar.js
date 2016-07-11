import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Auth from '../Auth';

export default class Topbar extends Component {

  componentWillMount() {
    this.state = {
      loggedIn: Auth.loggedIn()
    }
  }

  toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('open')
  }

  render() {
    return (
      <nav className="navbar">
          <div className="navbar-header">
            <div className="open-menu" onClick={this.toggleMenu}>☰</div>
            <a href="">Espace Consultant</a>
        </div>
        {
          this.state.loggedIn ? (
            <span>
              <div className="header-user-photo">
                <img src="/img/me.jpg" alt="photo-profil"/>
              </div>
              <div className="header-user-detail">
                <span>Guillaume CARRE</span>
                <span><Link to="/logout"><i>deconnexion</i></Link></span>
              </div>
            </span>
        ) : null
        }
      </nav>
    )
  }
}
